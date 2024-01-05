import CssGridBase from '$lib/snippets/css-grid--gayd-po-reshyotke/CssGridBase.svelte';
import type { ComponentConstructorOptions, SvelteComponent } from 'svelte';

export type Chapters = [
	string,
	string,
	{
		new(args: ComponentConstructorOptions<Record<string, never>>): SvelteComponent;
	}?
][];

export const content = {
	text: {
		about: {
			header: '',
			text: ''
		},
		article: {
			'css-grid--gayd-po-reshyotke': {
				title: 'CSS Grid: Гайд по решётке',
				keywords: 'css,grid,верстка,гайд,туториал',
				description: `Руководство по CSS Grid: как создавать гибкие макеты.
                  Эта статья охватывает основы, продвинутые техники, примеры и практические советы для адаптивной верстки`,
				chapters: [
					[
						'CSS Grid Layout - что это такое?',
						`Grid - изумителен, ведь он позволяет создавать сложные и гибкие макеты. 
                     Одновременно с этим Grid не прост, и мне потребовалось время, чтобы его освоить.`
					],
					[
						'Поддержка браузерами',
						`Grid - современный инструмент верски макетов, поддерживается с 2017 года почти 98 % браузеров.
                     Потрясающая поддержка,  только у Flexbox немного лучше`
					],
					[
						'Модель Grid',
						`CSS предоставляет несколько алгоритмов разметки:
                     <ul>
                     <li>Flow - макет по-умолчанию</li>
                     <li>Table - для отображения табличных данных </li>
                     <li>Flexbox - для отображения элементов по одной оси </li>
                     <li>Grid - для отображения элементов по двум осям </li>
                     </ul>
                     
                     И первое что сбивает с толку в Grid: структура сетки - столбцы и строки - определяются в CSS!
                     Это необычно, ведь в других макетах структура определяется дочерними DOM элементами.` // TODO вынести
					],
					[
						'Grid Макет',
						`По-умолчанию создается один столбец и дочерние элементы располагаются на каждой строке.
                     Это считается неявной сеткой, т.к мы не задали структуру.
                     Высота родителя определяется дочерними элементами по правилам Flow макета,
                     и только дочерние компоненты размещаются по правилам grid сетки.`,
						CssGridBase
					]
					// ['- Юниты для размеров решетки', ''],
					// ['- Свойства элементов решетки', ''],
					// ['Компоновка с CSS Grid', ''],
					// ['- Создание ячеек и колонок', ''],
					// ['- Использование гэпов и линий', ''],
					// ['- Автоматическое размещение элементов', ''],
					// ['- Управление переполнением', ''],
					// ['Продвинутые техники с CSS Grid', ''],
					// ['- Использование грид-шаблонов', ''],
					// ['- Создание сложных макетов', ''],
					// ['- Респонсивный дизайн с помощью CSS Grid', ''],
					// ['CSS Grid vs. другие методы верстки', ''],
					// ['- Сравнение с Flexbox, Bootstrap и другими стандартами', ''],
					// ['- Почему выбирать CSS Grid?', ''],
					// ['Лучшие практики и советы по CSS Grid', ''],
					// ['- Браузерная совместимость и обратная совместимость', ''],
					// ['- Использование инструментов разработчика для работы с CSS Grid', ''],
					// ['- Частые ошибки и их решения', ''],
					// ['Практические примеры использования CSS Grid', ''],
					// ['- Примеры создания разного типа макетов с CSS Grid', ''],
					// ['Заключение', ''],
					// ['- Подведение итогов', ''],
					// ['- Дополнительные ресурсы для изучения CSS Grid.', '']
				]
			}
		}
	}
};
