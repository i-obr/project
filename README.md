# project

### Установи модули

```
make install
```


## Структура папок и файлов
```
├── source/                         # Исходники
│   ├── blocks/                     # Блоки
│   │   └── block/                  # Блок
│   │       ├── blockName.pug       # Разметка блока
│   │       ├── blockName.js        # Скрипт блока
│   │       └── blockName.scss      # Стили блока
│   ├── pages/                      # Страницы
│   │   └── index.pug               # Layout страницы
│   └── static/                     # Статические данные
│       ├── fonts/                  # Шрифты
│       └── images/                 # Картинки
│       └── scss/                   # Стили
│           ├── entry/              # Входные точки
│           │   └── main.scss       # Главный стилевой файл
│           ├── mixins.scss         # Примеси
│           ├── common.scss         # Общие стили
│           └── variables.scss      # Переменные
├── gulp/                           # Подключаемые скрипты с задачами для Gulp
├── .stylelintrc                    # Конфигурация проверки стилей (в процессе)
├── .editorconfig                   # Конфигурация настроек редактора кода
├── .gitignore                      # Список исключённых файлов из Git
├── .browserslist                   # Список версий браузеров для плагинов
├── .babelrc                        # Конфигурационный файл для Babel
├── .eslintignore                   # Список исключённых файлов из Eslint
├── .eslintrc.yml                   # Конфигурационный файл для Eslint
├── .stylelintrc                    # Конфигурационный файл для Stylelint
├── gulpfile.babel.js               # Файл для запуска Gulp.js
├── Makefile                        # Утилита для автоматизации сборки
├── package.json                    # Список зависимостей и прочей информации
├── README.md                       # Документация проекта
└── package-lock.json               # Версии пакетов
```
