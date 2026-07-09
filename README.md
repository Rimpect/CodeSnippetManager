# CodeSnippetManager

Веб-приложение для хранения и управления сниппетами кода. Позволяет создавать, редактировать и удалять фрагменты кода с подсветкой синтаксиса, тегами и нечётким поиском. Все данные хранятся локально в браузере (`localStorage`) — бэкенд не требуется.

🔗 **Демо:** https://rimpect.github.io/CodeSnippetManager/

## Возможности

- 📝 **Создание и редактирование сниппетов** — название, описание, язык, теги и сам код
- 🎨 **Профессиональный редактор кода** на базе Monaco (движок VS Code) с подсветкой синтаксиса и IntelliSense
- 🌐 **Поддержка языков**: JavaScript, Python, Java, C++
- 🔍 **Нечёткий поиск** по названиям сниппетов (Fuse.js)
- 🏷️ **Теги** с цветовой маркировкой — добавление и удаление на лету
- ⭐ **Избранное** — пометка важных сниппетов
- 💾 **Локальное хранение** в `localStorage`, синхронизация между вкладками через событие `storage`

## Технологический стек

| Категория | Технологии |
|-----------|-----------|
| **UI** | [React 19](https://react.dev/) (+ React Compiler) |
| **Сборка** | [Vite 7](https://vite.dev/) |
| **Роутинг** | [React Router 7](https://reactrouter.com/) |
| **Редактор кода** | [Monaco Editor](https://microsoft.github.io/monaco-editor/) — движок VS Code: подсветка, автодополнение, IntelliSense |
| **Поиск** | [Fuse.js](https://fusejs.io/) — лёгкий нечёткий поиск с настраиваемыми весами полей |
| **UI-компоненты** | [react-select](https://react-select.com/), [lucide-react](https://lucide.dev/) (иконки) |
| **Стили** | SCSS (Sass) |
| **Качество кода** | [ESLint](https://eslint.org/) (статический анализ) + [Prettier](https://prettier.io/) (форматирование) |
| **Хранилище** | Browser `localStorage` |

## Структура проекта

```
CodeSnippetManager/
├── .github/workflows/deploy.yml   # автодеплой на GitHub Pages
└── client/                        # фронтенд-приложение
    ├── public/                    # статика
    ├── index.html
    ├── vite.config.js
    └── src/
        ├── app/                   # корень приложения, роуты, layout, глобальные стили
        ├── pages/                 # страницы (DashboardPage)
        ├── widgetes/              # виджеты: Header, Dashboard, SnippetCard, SnippetItem, CodeEditor
        └── features/snippet/      # логика работы со сниппетами (StorageSnippet.js)
```

Маршруты (через `HashRouter`, адреса вида `#/...`):
- `#/` — дашборд со списком сниппетов и поиском
- `#/editor/:id` — редактор конкретного сниппета (`#/editor/new` — создание нового)

## Запуск локально

Требуется [Node.js](https://nodejs.org/) 20+.

```bash
cd client
npm install      # установка зависимостей
npm run dev      # запуск дев-сервера (http://localhost:5173)
```

Другие команды:

```bash
npm run build    # production-сборка в client/dist
npm run preview  # локальный просмотр собранной версии
npm run lint     # проверка кода ESLint
```

## Деплой на GitHub Pages

Настроен автодеплой через GitHub Actions: при каждом push в ветку `main` приложение собирается и публикуется.

Первоначальная настройка (один раз): в репозитории → **Settings → Pages → Source** выбрать **GitHub Actions**.

Технические детали:
- `base: '/CodeSnippetManager/'` в [vite.config.js](client/vite.config.js) — приложение обслуживается из подпапки
- `HashRouter` (адреса вида `#/editor/:id`) — прямые ссылки и перезагрузка страниц работают на статик-хостинге без серверных rewrite'ов
