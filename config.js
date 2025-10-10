const config = {
    port: process.env.APP_PORT || 5000,
    nodeEnv: process.env.NODE_ENV || 'development',
    jwtSecret: process.env.JWT_SECRET,
    db: {
        development: {
            dialect: process.env.DB_DIALECT,
            host: process.env.DB_DEVELOPMENT_HOST,
            port: process.env.DB_DEVELOPMENT_PORT,
            database: process.env.DB_DEVELOPMENT_DATABASE,
            username: process.env.DB_DEVELOPMENT_USERNAME,
            password: process.env.DB_DEVELOPMENT_PASSWORD,
            define: {
                timestamps: true,
                underscored: true,
            },
            logging: false,
        },
        production: {
            dialect: process.env.DB_DIALECT,
            host: process.env.DB_PRODUCTION_HOST,
            port: process.env.DB_PRODUCTION_PORT,
            database: process.env.DB_PRODUCTION_DATABASE,
            username: process.env.DB_PRODUCTION_USERNAME,
            password: process.env.DB_PRODUCTION_PASSWORD,
            define: {
                timestamps: true,
                underscored: true,
            },
            dialectOptions: {
                ssl: {
                    rejectUnauthorized: true,
                    require: true
                }
            },
            logging: false
        },
        testing: {
            dialect: process.env.DB_DIALECT,
            host: process.env.DB_TESTING_HOST,
            port: process.env.DB_TESTING_PORT,
            database: process.env.DB_TESTING_DATABASE,
            username: process.env.DB_TESTING_USERNAME,
            password: process.env.TESTING_PASSWORD,
            define: {
                timestamps: true,
                underscored: true,
            },
            logging: true
        }
    }
}

module.exports = config