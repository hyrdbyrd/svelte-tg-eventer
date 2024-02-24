# Telegram eventer

## Cert generator guide

https://dev.to/devland/how-to-generate-and-use-an-ssl-certificate-in-nodejs-2996

```sh
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./cert/cert.key -out ./cert/cert.crt
```

## Serves

UserId: 3
EventId: 1

https://backend.hibye.pro:8443

## TG params

#tgWebAppVersion=7.0&tgWebAppPlatform=tdesktop&tgWebAppThemeParams=%7B"accent_text_color"%3A"%2379e8da"%2C"bg_color"%3A"%23282e33"%2C"button_color"%3A"%233fc1b0"%2C"button_text_color"%3A"%23ffffff"%2C"destructive_text_color"%3A"%23f57474"%2C"header_bg_color"%3A"%23282e33"%2C"hint_color"%3A"%2382868a"%2C"link_color"%3A"%234be1c3"%2C"secondary_bg_color"%3A"%23313b43"%2C"section_bg_color"%3A"%23282e33"%2C"section_header_text_color"%3A"%234be1c3"%2C"subtitle_text_color"%3A"%2382868a"%2C"text_color"%3A"%23f5f5f5"%7D

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

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## TODO marks

- styles - допинать стили
- i18n - прибить сюда переводы
- ally - нормально обработать ally
- prettify - наверняка можно сделать лучше
- logic - по факту появления бэка получиться сделать нормально

## TODO

- Разобраться как сделать красивее export class'a
