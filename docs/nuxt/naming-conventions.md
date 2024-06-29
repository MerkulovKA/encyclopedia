# Соглашение об именовании

## Название файлов

Чаще всего мы находим нужные нам файлы непосредственно через поиск по имени файла.
Поэтому, самый простой способ улучшить поиск – добавить к вашим файлам суффикс с указанием их функции.

| Тип         | Пример                 |
|-------------|------------------------|
| types       | example.type.ts        |
| services    | example.service.ts     |
| stores      | example.store.ts       |
| composables | example.composables.ts |

Помимо этого, не стоит забывать про стиль написания.

| Тип        | Нотация    | Пример            |
|------------|------------|-------------------|
| Папки      | kebab-case | my-example-folder |
| .ts файлы  | camelCase  | exampleFile.ts    |  
| .vue файлы | PascalCase | MyComponent.vue   |  

::: info Важно!
Исключением являются файлы типов, принадлежащие компонентам.
:::
## Имена компонентов

### Правило двух слов

Названия компонентов всегда должны содержать не менее двух слов! Это делается для того, чтобы не спутать компонент с
html элементом. В HTML все элементы состоят из одного слова.

| ❌ Плохо    | ✅ Хорошо       |
|------------|----------------|
| Table.vue  | BaseTable.vue  |
| Button.vue | BaseButton.vue |
| Icon.vue   | AtomIcon.vue   |

### Чем длиннее, тем лучше

При создании компонентов, тесно связаных с модулем, компонентом или страницей всегда добавляйте в качестве префикса
название модуля, компонента или страницы.

| ❌ Плохо               | ✅ Хорошо                      |
|-----------------------|-------------------------------|
| Map.vue               | ContactPageMap.vue            |
| DetailInformation.vue | EmployeeDetailInformation.vue |
| Slider.vue            | HomePageSlider.vue            |

## Названия объектов

Помимо правил названий файлов важно соблюдать правила наименования и остальных сущностей, находящиеся внутри файлов.

| Тип                    | Нотация               | Пример             |
|------------------------|-----------------------|--------------------|
| services               | PascalCase            | `ProductService`   |
| stores                 | use + PascalCase      | `useModalStore`    |
| composables            | use + PascalCase      | `useApiFetch`      |
| types                  | PascalCase + type     | `ProductPageType`  |
| variable names         | 	camelCase            | 	`exampleVariable` |
| function names         | 	camelCase            | 	`exampleFunction` |
| constants	             | UPPERCASE_SNAKE_CASE	 | `MY_CONSTANT`      |
| components in template | 	PascalCase           | 	`<MyComponent />` |
| translation key	       | snake_case            | 	`my_key`          |
| route paths	           | kebab-case            | 	`/example-route`  |
| booleans               | 	is/has + camelCasing | 	`isVisible`       |
