# Telegram eventer

## io

https://hyrdbyrd.github.io/svelte-tg-eventer

## Сборка

- Качаем nvm https://github.com/nvm-sh/nvm
- Вводим ```nvm install && nvm use```
- Заполняем .env для окружения
- Вводим ```npm ci && npm run build```
- Проект валяется собранным в папке `build`

## Dev

```bash
npm run dev
```

## Структура проекта

В качестве структуры проекта выбран feature-sliced подход, что позволяет отделять разные сущности друг от друга, тем самым защищая от циклических зависимостей и упрощая навигацию в коде

https://feature-sliced.design

## Техонологии

### Svelte

Svelte отлично подходит для работы с реактивными данными. В отличие от реакта, не приходится писать много хуков для работы с данными, чтобы банально подписаться на Observable. У Svelte оптимизация лучше чем React'a, т.к. Svelte старается по минимуму использовать разные абстракции, для работы с DOM'ом, к примеру полностью отказавшись от VirtualDOM

### RxJS

Т.к. в проекте нужно было использовать SSE (server-sent-events), нужно было каким-то образом обрабатывать и перенаправлять события в какое-нибудь хранилище

### Effector

Effector подготавливает observable-хранилища, которые заводяться "из под капота" в Svelte. Т.е. не нужно делать никаких доп. абстракций, достаточно просто использовать стор как переменную

### SvelteKit

Svelte не очень удобно настраивать самостоятельно, для роутинга между страничками. Для того чтобы было удобнее работать с редиректами, настраивать роуты, и настроить ssr, отлично подходит sveltekit, который подготавливает инфру для работы с роутингом и лэйаутом страниц

### Axios

### NGrock

Для того, чтобы mini-appу можно было тестировать локальную сборку сразу на телефоне и телеграм-приложении, нужно иметь какой-нибудь статичный домен, с нормальным сертификатом. Для этого отлично подходит [ngrock](https://ngrok.com/)

### Telegraf

Основной бот находится не тут, но для отладки нужно было иметь собственно бота для тестирования, и чтобы зависимости от python кода не было

## TODO

### Маркировка

- styles - допинать стили
- i18n - прибить сюда переводы
- ally - нормально обработать ally
- prettify - наверняка можно сделать лучше
- logic - по факту появления бэка получиться сделать нормально
