// index.js
const { ServiceBroker } = require("moleculer");

// Создаем брокера
const broker = new ServiceBroker({
    nodeID: "node-1",
    transporter: "TCP"
});

// Регистрируем сервисы
broker.createService(require("./hello.service"));
broker.createService(require("./api.service"));

// Запускаем брокера
broker.start()
    .then(() => {
        broker.repl();
    });
