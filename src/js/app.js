const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};
const sorting = ['name', 'level'];

function orderByProps(object, array) {
  const newOrderABC = [];
  const newOrderSorting = [];


  for (const key in object) {
    if (key !== sorting[0] && key !== sorting[1]) {
      newOrderABC.push({ key, value: obj[key] });
    }
    if (key === array[0]) {
      newOrderSorting[0] = { key, value: obj[key] };
    }
    if (key === array[1]) {
      newOrderSorting[1] = { key, value: obj[key] };
    }

    newOrderABC.sort((a, b) => {
      const nameA = a.key.toLowerCase(); const
        nameB = b.key.toLowerCase();
      if (nameA < nameB) { return -1; }
      return 1;
    });
  }
  return newOrderSorting.concat(newOrderABC);
}

const result = orderByProps(obj, sorting);
export default result;
