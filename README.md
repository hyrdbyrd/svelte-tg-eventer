# Telegram eventer

## Serves

UserId: 3
EventId: 1

https://backend.hibye.pro:8443

## TG params

[Example](https://cool-faithful-kangaroo.ngrok-free.app/event/1?eventId=1&userId=1&type=rating&meetingId=1#tgWebAppData=query_id%3DAAFq6iEDAQAAAGrqIQPX1zwl%26user%3D%257B%2522id%2522%253A2200037994%252C%2522first_name%2522%253A%2522Ilya%2522%252C%2522last_name%2522%253A%2522Tester%2522%252C%2522username%2522%253A%2522hyrdbyrd_tester%2522%252C%2522language_code%2522%253A%2522ru%2522%252C%2522allows_write_to_pm%2522%253Atrue%257D%26auth_date%3D1708783403%26hash%3D512d6e4148a2ead2f5f4f03bcc0e97ab09610caa196666bc9d735bba6340d6a5&tgWebAppVersion=7.0&tgWebAppPlatform=tdesktop&tgWebAppThemeParams=%7B%22accent_text_color%22%3A%22%2379e8da%22%2C%22bg_color%22%3A%22%23282e33%22%2C%22button_color%22%3A%22%233fc1b0%22%2C%22button_text_color%22%3A%22%23ffffff%22%2C%22destructive_text_color%22%3A%22%23f57474%22%2C%22header_bg_color%22%3A%22%23282e33%22%2C%22hint_color%22%3A%22%2382868a%22%2C%22link_color%22%3A%22%234be1c3%22%2C%22secondary_bg_color%22%3A%22%23313b43%22%2C%22section_bg_color%22%3A%22%23282e33%22%2C%22section_header_text_color%22%3A%22%234be1c3%22%2C%22subtitle_text_color%22%3A%22%2382868a%22%2C%22text_color%22%3A%22%23f5f5f5%22%7D)

## Boot

```bash
npm run dev
# Шоб браузер сразу открывался
npm run dev -- --open
```

## Сборка

```bash
npm run build
```

## Превью собраного в prod-режиме проекта

```bash
npm run preview
```

## TODO marks

- styles - допинать стили
- i18n - прибить сюда переводы
- ally - нормально обработать ally
- prettify - наверняка можно сделать лучше
- logic - по факту появления бэка получиться сделать нормально

## TODO

- Разобраться как сделать красивее export class'a

# Будущее нормально ридми

## Структура проекта

В качестве структуры проекта выбран feature-sliced подход, что позволяет отделять разные сущности друг от друга, тем самым защищая от циклических зависимостей и упрощая навигацию в коде

https://feature-sliced.design
