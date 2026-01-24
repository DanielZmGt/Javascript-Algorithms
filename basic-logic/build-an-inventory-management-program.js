const inventory = []

const findProductIndex = name => {
  const lowCase = name.toLowerCase()
  const index = inventory.findIndex(product => product.name.toLowerCase() === lowCase)
  return index
}

console.log(findProductIndex("flour"));

const addProduct = product => {
  const item = {
    name: product.name.toLowerCase(),
    quantity: product.quantity
  }
  const index = findProductIndex(item.name)
  if (index !== -1) {
    inventory[index].quantity += product.quantity
    console.log(`${inventory[index].name} quantity updated`)
  } else {
    inventory.push(item)
    console.log(`${item.name} added to inventory`)
  }
}

const removeProduct = (name, quantity) => {
  const index = findProductIndex(name);
  if (index === -1) {
    console.log(`${name.toLowerCase()} not found`);
    return;
  }

  const currentProduct = inventory[index];

  if (currentProduct.quantity < quantity) {
    console.log(`Not enough ${currentProduct.name} available, remaining pieces: ${currentProduct.quantity}`);
    return;
  }

  currentProduct.quantity -= quantity;
  console.log(`Remaining ${currentProduct.name} pieces: ${currentProduct.quantity}`);

  if (currentProduct.quantity === 0) {
    inventory.splice(index, 1);
  }
}
