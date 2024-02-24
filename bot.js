import { networkInterfaces } from 'node:os';

import { message } from 'telegraf/filters';
import { Telegraf, Markup } from 'telegraf';

import { config } from 'dotenv';

config();

const nets = networkInterfaces();
const results = Object.entries(nets).reduce((acc, [name, nets]) => {
	if (!acc[name]) acc[name] = [];

	acc[name].push(
		...nets
			.filter((net) => ['IPv4', 4].includes(net.family) && !net.internal)
			.map((net) => net.address)
	);

	return acc;
}, {});

const webAppUrl = `${results['Беспроводная сеть'][0]}:${process.env.PORT}`;

console.log(webAppUrl);

const token = process.env.BOT_TOKEN;

const bot = new Telegraf(token, { telegram: { testEnv: true } });

bot.command('start', (ctx) => {
	ctx.reply(
		'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
		Markup.keyboard([
			Markup.button.webApp('Открыть', `https://${webAppUrl}`),
			Markup.button.webApp(
				'type=rating',
				`https://${webAppUrl}/?eventId=1&userId=1&type=rating&meetingId=1`
			),
			Markup.button.webApp(
				'type=request',
				`https://${webAppUrl}/?eventId=1&userId=1&type=fastmeeting&meetingId=1`
			),
			Markup.button.webApp(
				'type=fastmeeting',
				`https://${webAppUrl}/?eventId=1&userId=1&type=fastmeeting&meetingId=1`
			)
		])
	);
});

bot.launch();
