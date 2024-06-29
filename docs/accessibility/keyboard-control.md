# Управление с клавиатуры

Доступный интерфейс должен позволять перемещаться нему и управлять им не только мышью, но и с помощью клавиатуры –
листать страницу, переходить по ссылкам, заполнять формы и т.д.

Правильная организация перехода фокуса на странице даст возможность перемещаться по странице с помощью скринридеров и
клавиатуры.

## Как это сделать?

### 1. Соблюдайте порядок

Пользователь ожидает, что форус будет переключаться между элементами в логичном порядке – обычно слева направо и сверху
вниз.

Используйте `tabindex="-1"` чтобы пропустить элемент и `tabindex="0"` чтобы сделать элемент доступным для фокуса.

### 2. Не скрывайте фокус

Очень часто разработчики скрывают фокус с помощью `outline: none` или `tabindex="-1"`, т.к. им не нравится внешний вид
или то,
что фокус виден при клике мышкой.

Из-за этого пользователи теряют возможность управлять интерфейсом с помощью клавиатуры — становится не понятно, какой
элемент сейчас активный.

Вместо этого — стилизуйте фокус и, если нужно, делайте его видимым только при управлении с клавиатуры.

### 3. Обеспечьте понятное управление

При разработке интерактивных компонентов, например табов, меню и т.д. — старайтесь придерживаться общепринятой логики
управления.

Это поможет всем без исключения пользователям вашего сайта легко и быстро начать использовать интерфейс.

## Дополнительная информация

С примерами интерактивных компонентов и описанием их работы можно ознакомиться в [библиотеке паттернов доступных
элементов](https://inclusive-components.design/), а также на сайте ассоциации [W3C](https://w3c.github.io/aria-practices/).