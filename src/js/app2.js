export default function user({ special: [obj1, obj2] }) {
  const array = [obj1, obj2];

  for (const key in array) {
    if (array[key].description === undefined) {
      array[key].description = 'Описание недоступно';
    }
  }
  return array;
}
