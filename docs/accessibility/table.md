# Таблицы

Для того чтобы сделать доступными данные, представленные в табличном виде — старайтесь верстать их с помощью
элемента `<table>`. В случае, когда `<table>` не отвечает вашим требованиям — не забывайте правильно расставлять ARIA-роли
для соответствующих элементов.

Для заголовка таблицы используйте элемент `<caption>` или атрибуты `aria-describedby` и `aria-label`.

Используйте атрибут `scope` для связывания между собой заголовков ячеек и ячеек с данными.

```html
<table>
    <caption>Список студентов курса</caption>
    <thead>
    <tr>
        <th scope="col">№ строки</th>
        <th scope="col">ФИО</th>
        <th scope="col">Дата рождения</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th scope="row">1</th>
        <th>Иванов Иван Иванович</th>
        <th>01.01.2000</th>
    </tr>
    </tbody>
</table>
```

```html
<div role="table" aria-label="Студенты" aria-describedby="students-table-desc">
    <div id="students-table-desc">
        Список студентов курса
    </div>
    <div role="rowgroup">
        <div role="row">
            <span role="columnheader">
                № строки
            </span>
            <span role="columnheader">
                ФИО
            </span>
            <span role="columnheader">
                Дата рождения
            </span>
        </div>
    </div>
    <div role="rowgroup">
        <div role="row">
            <span role="rowheader">
                1
            </span>
            <span role="cell">
                Иванов Иван Иванович
            </span>
            <span role="cell">
                01.01.2000
            </span>
        </div>
    </div>
</div>
```
## Дополнительная информация

[Реализация ARIA таблицы](https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/table/)

[Реализация ARIA Data Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/examples/data-grids/)