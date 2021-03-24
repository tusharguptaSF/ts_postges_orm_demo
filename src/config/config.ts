let config = {
    development: {
        databases: {
            username: "postgres",
            password: "root123",
            database: "ordermanager",
            host: "127.0.0.1",
            dialect: "postgres",
            port: 5432
        },
        JWT_SECRET: "SECRETFOODAPP",
        APP_PORT: 3001,
        ROLES_ADMIN: 'ADMIN',
        ROLES_CUSTOMER: 'CUSTOMER'
    },
}

module.exports = config;
