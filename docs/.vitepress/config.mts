import {defineConfig} from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Энциклопедия фронтендера",
    description: "Сборник правил и рекомендации по написаю кода и созданию web-приложений",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: "Главная", link: "/"},
            {text: "Документация", link: "/html"}
        ],

        sidebar: [
            {
                text: "Руководство по стилю HTML",
                link: "/html"
            },
            {
                text: "Nuxt",
                items: [
                    {
                        text: "Соглашение об именовании", link: "/nuxt/naming-conventions",
                    },
                    {
                        text: "Структура каталога компонентов", link: "/nuxt/structure-components-folder",
                    },
                    {
                        text: "Компоненты", link: "/nuxt/components",
                    }
                ]
            },
            {
                text: "Доступность",
                items: [
                    {
                        text: "Зачем это нужно?",
                        link: "/accessibility/what-it"
                    },
                    {
                        text: "Семантический HTML",
                        link: "/accessibility/html"
                    },
                    {
                        text: "Изображения",
                        link: "/accessibility/images"
                    },
                    {
                        text: "Аудио и видео",
                        link: "/accessibility/audio-and-video"
                    },
                    {
                        text: "Навигация",
                        link: "/accessibility/navigation"
                    },
                    {
                        text: "Таблицы",
                        link: "/accessibility/table"
                    },
                    {
                        text: "Управление с клавиатуры",
                        link: "/accessibility/keyboard-control"
                    },
                    {
                        text: "Формы",
                        link: "/accessibility/forms"
                    }
                ]
            },
            {
                text: "Редполитика",
                link: "/editorialpolicy",
            }
        ],
    }
})
