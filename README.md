```markdown
# Moleculer Hello World

Простой пример микросервисного приложения на Moleculer, который реализует сервис `hello` с действием `sayHello`, возвращающим строку "Hello, World!".

## Установка

1. Убедитесь, что у вас установлен [Node.js](https://nodejs.org/).
2. Установите Moleculer с помощью npm:

```bash
npm install moleculer
```

## Структура проекта

```
.
├── hello.service.js  # Файл сервиса
└── index.js          # Точка входа
```

### hello.service.js

Этот файл содержит определение сервиса `hello` с одним действием `sayHello`:

```javascript
// hello.service.js
module.exports = {
    name: "hello",
    actions: {
        sayHello(ctx) {
            return "Hello, World!";
        }
    }
};
```

### index.js

Этот файл запускает сервис и вызывает действие `sayHello`:

```javascript
// index.js
const { ServiceBroker } = require("moleculer");

// Создаем брокера
const broker = new ServiceBroker({
    nodeID: "node-1",
    transporter: "NATS" // Используем NATS для транспортировки сообщений
});

// Регистрируем сервис
broker.createService(require("./hello.service"));

// Запускаем брокера
broker.start()
    .then(() => {
        // Вызываем действие sayHello сервиса hello
        broker.call("hello.sayHello")
            .then(response => {
                console.log(response); // Должно вывести "Hello, World!"
            })
            .catch(err => {
                console.error(`Error occurred: ${err.message}`);
            });
    });
```

## Запуск

1. Убедитесь, что все зависимости установлены.
2. Запустите приложение:

```bash
node index.js
```

После запуска приложения в консоли должно появиться сообщение "Hello, World!".

## Лицензия

Этот проект лицензирован на условиях лицензии MIT. Подробности смотрите в файле `LICENSE`.
```
