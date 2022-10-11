# Базовые структуры данных
## Двусторонний двусвязанный итерируемый связанный список 
```js
const list = new LinkedList();

list.insertLast(1);
list.insertLast(2);
list.insertLast(3);

console.log(list.first.value);           // 1
console.log(list.last.value);            // 3
console.log(list.first.next.value);      // 2
console.log(list.first.next.prev.value); // 1

for (let item of list.items) {
  console.log('item: ', item)
}

Вставка в начало - list.insertFirst(1);
Удалить с начала - list.deleteFirst();
Удалить с конца - list.deleteLast();
```

## Очередь на основе связанного списка
```js
const queue = new SimpleQueue();

queue.push(10);
queue.push(11);
queue.push(12);

console.log(queue.head);  // 10

console.log(queue.pop()); // 10

console.log(queue.head);  // 11

console.log(queue.pop()); // 11
console.log(queue.pop()); // 12
console.log(queue.pop()); // Exception
```

## Двустороная очередь
```js
const dequeue = new DoubleQueue();

dequeue.push(10);
dequeue.unshift(11);
dequeue.push(12);

console.log(dequeue.pop());   // 12
console.log(dequeue.shift()); // 11
console.log(dequeue.pop());   // 10
console.log(dequeue.pop());   // Exception
```
## Cтек на основе массива фиксированной длины
```js
const stack = Stack();

stack.push(10);
stack.push(11);
stack.push(12);

console.log(stack.head);  // 12

console.log(stack.pop()); // 12

console.log(stack.head);  // 11

console.log(stack.pop()); // 11
console.log(stack.pop()); // 10
console.log(stack.pop()); // Exception
```
## Cтруктура на основе массива с кодогенерацией
```js
const jackBlack = new Structure(['name', 'lastName', 'age']);

jackBlack.set('name', 'Jack');
jackBlack.set('lastName', 'Black');
jackBlack.set('age', 53);

jackBlack.get('name') // 'Jack'
```
