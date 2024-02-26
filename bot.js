import { Telegraf } from 'telegraf';

import { config } from 'dotenv';

config();

const token = process.env.BOT_TOKEN;
const webAppUrl = process.env.PUBLIC_STATIC_DOMAIN;

const bot = new Telegraf(token, { telegram: { testEnv: true } });

bot.command('start', (ctx) => {
	ctx.sendMessage('Open', {
		reply_markup: {
			inline_keyboard: [
				[
					{
						text: 'userId=2',
						web_app: {
							url: `https://${webAppUrl}?eventId=1&userId=2`,
						},
					},
					{
						text: 'userId=3',
						web_app: {
							url: `https://${webAppUrl}?eventId=1&userId=3`,
						},
					},
				],
			],
		},
	});
});

bot.launch();
