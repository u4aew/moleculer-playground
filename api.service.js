// api.service.js
const ApiGateway = require("moleculer-web");

module.exports = {
    name: "api",
    mixins: [ApiGateway],
    settings: {
        routes: [
            {
                path: "/api",
                aliases: {
                    "GET hello": "hello.sayHello",
                },
                cors: true
            }
        ],
        port: 3000,
        logRequestParams: "info",
        logResponseData: "info",
    }
};
