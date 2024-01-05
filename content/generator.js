import chalk from 'chalk';
import { readFile, writeFile } from 'node:fs/promises';
import { OpenAI } from 'openai';

const error = (e) => console.error(chalk.red(e));
const warn = (w) => console.warn(chalk.yellow(w));
const info = (i) => console.log(chalk.green(i));

const localeFileName = `src/lib/i18n/ru.json`;

const configuration = {
	apiKey: process.env.PUBLIC_CHAT_GPT_API_KEY,
	organization: process.env.PUBLIC_CHAT_GPT_ORG_ID,
	dangerouslyAllowBrowser: true
};
const openai = new OpenAI(configuration);

const topicsFileName = './content/topics.txt';
readFile(topicsFileName)
	.then((topics) => topics.toString().split('\n'))
	.then((topics) => {
		const unposted = topics.filter((t) => !t.includes(':generated'))[0];
		unposted &&
			generate(unposted.split('/')).then(() => {
				const unpostedIndex = topics.findIndex((t) => t == unposted);
				topics[unpostedIndex] = `${topics[unpostedIndex]}:generated`;
				return writeFile(topicsFileName, topics.join('\n'));
			});
	})
	.then(() => {
		warn('Done');
	})
	.catch(error);

function generate([category, topic]) {
	info('Wait for ChatGPT article generation...');
	return Promise.all([
		askChatGPT(
			`топ 4 SEO ключевых слов для статьи "${topic}" для профессиональных веб-разработчиков`
		),
		askChatGPT(
			`топ 6 низкочастотных SEO запросов по теме "${topic}" от профессиональных веб-разработчиков`
		),
		askChatGPT(`SEO meta описание для статьи "${topic}" для профессиональных веб-разработчиков`),
		askChatGPT(`главы и разделы статьи "${topic}" для профессиональных веб-разработчиков`),
		readFile(localeFileName, 'utf-8')
	]).then(([keywords, rare_requests, description, chapters, data]) => {
		const json = JSON.parse(data);
		const article_name = transpile(topic);
		info(rare_requests);
		json.text.article[category][article_name] = {
			title: topic,
			keywords: keywords
				.split('\n')
				.map((c) => c.replace(/\d+\.\s*/, '').trim())
				.filter(Boolean)
				.join(','),
			chapters: chapters
				.split('\n')
				.map((c) => c.replace(/\d+\.\s*/, '').trim())
				.filter(Boolean)
				.map((ch) => [ch, '']),
			description
		};
		return writeFile(localeFileName, JSON.stringify(json, null, 3));
	});
}

function askChatGPT(content) {
	return openai.chat.completions
		.create({
			model: 'gpt-4',
			messages: [{ role: 'user', content }],
			temperature: 1
		})
		.then((v) => v.choices[0].message.content)
		.catch(error);
}

const chars = {
	а: 'a',
	б: 'b',
	в: 'v',
	г: 'g',
	д: 'd',
	е: 'e',
	ё: 'yo',
	ж: 'zh',
	з: 'z',
	и: 'i',
	й: 'y',
	к: 'k',
	л: 'l',
	м: 'm',
	н: 'n',
	о: 'o',
	п: 'p',
	р: 'r',
	с: 's',
	т: 't',
	у: 'u',
	ф: 'f',
	х: 'h',
	ц: 'c',
	ч: 'ch',
	ш: 'sh',
	щ: 'jsh',
	ъ: 'hh',
	ы: 'ih',
	ь: 'jh',
	э: 'eh',
	ю: 'yu',
	я: 'ya',
	' ': '-',
	':': '-'
};

function transpile(s) {
	return s
		.toLowerCase()
		.split('')
		.map((c) => chars[c] || c)
		.join('');
}
