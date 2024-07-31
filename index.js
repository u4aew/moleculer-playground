// index.js
const { ServiceBroker } = require("moleculer");

// Создаем брокера
const broker = new ServiceBroker({
    nodeID: "node-1",
    transporter: "TCP"
});

// Регистрируем сервис
broker.createService(require("./hello.service"));

// Запускаем брокера
broker.start()
    .then(() => {
        broker.call("hello.sayHello")
            .then(response => {
                console.log(response); // Должно вывести "Hello, World!"
            })
            .catch(err => {
                console.error(`Error occurred: ${err.message}`);
            });
    });
