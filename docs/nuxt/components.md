# Компоненты

## Структура компонента

При написании компонентов, также важно придерживаться структуры

| Элемент                | Пример                                           |
|------------------------|--------------------------------------------------|
| template               | `<template>`                                     |
| imports                | `import { defineProps, defineEmits } from 'vue'` |
| model                  | `const modelValue = defineModel({})`             |
| props                  | `const props = defineProps({})`                  |
| emits                  | `const emits = defineEmits()`                    |
| stores and composables | `const useModal = useModalStore()`               |
| refs constants         | `const isLoading = ref<boolean>(false)`          |
| Computed properties    | `const isLoading = computed<boolean>(() => {})`  |
| Methods                | `function handleSendForm() {}`                   |
| Watchers               | `watch()`                                        |
| Lifecycle hooks        | `onMounted()`                                    |
| defineExpose           | `defineExpose({})`                               |
| styles                 | `<style scoped>`                                 |

## Model

`defineModel` нужен для двухсторонней связки компонента и родительского через `v-model`.

Пример оформления:

```typescript
const modelValue = defineModel({
    type: String as PropType<string>,
    default: null
})
```

## Props

Props – это входные параметры (данные) компонента. Эти данные не могут быть изменены внутри компонента, только если вы
не определили их как `defineModel()`, но это уже совсем другая история.

Пример правильного оформления `props`

```typescript
const props = defineProps({
    variant: {
        type: String as PropType<VariantType>,
        default: 'primary'
    },
    isLoading: {
        type: Boolean as PropType<boolean>,
        default: false
    }
})
```

Важно:

1. Всегда указывать тип входного параметра.
2. Если входной параметр является необязательным, то указывать значение по умолчанию.
3. Если входной параметр является обязательным, то необходимо добавить вместо значения по умолчанию
   флаг `required: true`.
4. У необязательных булевых входных параметрах указывать значения по умолчанию наиболее встречающиеся вариант, если
   возможно указать значением по умолчанию `false`, то лучше указать его.

## Emits

'defineEmits' нужен для проброса события в родительский компонент из дочернего.

Пример оформления: 

```typescript
const emits = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
```

