import { Telegraf } from 'telegraf';

import { config } from 'dotenv';

config();

const token = process.env.BOT_TOKEN;
const webAppUrl = process.env.NGROCK_STATIC_DOMAIN;

const bot = new Telegraf(token, { telegram: { testEnv: true } });

bot.on('message', (ctx) => {
	try {
		const params = JSON.parse(ctx.message.text);
		const url = new URL(`https://${webAppUrl}`);

		for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value);

		console.log(params, url.toString());

		ctx.sendMessage(url.toString(), {
			reply_markup: {
				inline_keyboard: [
					[
						{
							text: url.toString(),
							web_app: {
								url: url.toString(),
							},
						},
					],
				],
			},
		});
	} catch (e) {
		console.error(e);
		ctx.reply('No valid json');
	}
});

bot.command('start', (ctx) => {
	ctx.sendMessage('Open', {
		reply_markup: {
			inline_keyboard: [
				[
					{
						text: 'userId=5',
						web_app: {
							url: `https://${webAppUrl}?eventId=6&userId=5`,
						},
					},
					{
						text: 'userId=5, preprod',
						web_app: {
							url: `https://hyrdbyrd.github.io/svelte-tg-eventer?eventId=6&userId=5`,
						},
					},
				],
			],
		},
	});
});

bot.launch();
