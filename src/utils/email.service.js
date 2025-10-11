const { Resend } = require('resend')
const pug = require('pug')
const path = require('path')
const { fileURLToPath } = require('url')

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const resend = new Resend(process.env.RESEND_API_KEY)
const fromName = process.env.APP_NAME
const senderEmail = process.env.EMAIL_SENDER
const replyTo = process.env.EMAIL_REPLY_TO

const EMAIL_CONFIG = {
    from: `${fromName} <${senderEmail}>`,
    replyTo: replyTo,
    templatesPath: path.join(__dirname, 'templates', 'emails')
}

const compileTemplate = (templateName, data) => {
    const templatePath = path.join(EMAIL_CONFIG.templatesPath, `${templateName}.pug`)

    return pug.renderFile(templatePath, {
        ...data,
        currentYear: new Date().getFullYear()
    })
}

const sendRegistrationEmail = async (to, userName, verificationLink = null) => {
    try {
        const emailHTML = compileTemplate('registration', {
            userName,
            verificationLink
        })

        const { data, error } = await resend.emails.send({
            from: EMAIL_CONFIG.from,
            to,
            subject: 'Welcome! Please verify your email',
            html: emailHTML
        })

        if (error) {
            console.log('Error sending registration email:', error)
            throw new Error(`Failed to send registration email: ${error.message}`)
        }

        console.log('Registration email sent successfully:', data)

        return { success: true, data }
    } catch (err) {
        console.log('Registration email error:', err)
        throw err
    }
}

const sendPasswordRecoveryEmail = async (to, userName, resetLink, expiryMinutes = 60) => {
    try {
        const emailHTML = compileTemplate('password-recovery', {
            userName,
            resetLink,
            expiryMinutes
        })

        const { data, error } = await resend.emails.send({
            from: EMAIL_CONFIG.from,
            to,
            subject: 'Password reset request',
            html: emailHTML
        })

        if (error) {
            console.error('Error sending password recovery email:', error)
            throw new Error(`Failed to send password recovery email: ${error.message}`)
        }

        console.log('Password recovery email sent successfully:', data)

        return { success: true, data }
    } catch (err) {
        console.log('Password recovery email error:', err)
        throw err
    }
}

module.exports = {
    sendRegistrationEmail,
    sendPasswordRecoveryEmail
}