export default function orderByProps(object, array) {
  const newOrderABC = [];
  const newOrderSorting = [];

  for (const key in object) {
    if (key !== array[0] && key !== array[1]) {
      newOrderABC.push({ key, value: object[key] });
    }
    if (key === array[0]) {
      newOrderSorting[0] = { key, value: object[key] };
    }
    if (key === array[1]) {
      newOrderSorting[1] = { key, value: object[key] };
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
