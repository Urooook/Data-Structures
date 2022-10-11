# Базовые структуры данных
## Двусторонний двусвязанный итерируемый связанный список 
const list = LinkedList();

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
