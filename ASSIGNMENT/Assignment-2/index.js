const { read } = require("./IO/io");
const { write } = require("./IO/io");
const username = process.argv[2];
const productname = process.argv[3];

orderHistory=[];

async function buyProduct(username, productname) {
  const usersData = await read("user.txt");
  const productsData = await read("product.txt");

  const users = JSON.parse(usersData);
  const products = JSON.parse(productsData);

  let user = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === username) {
      user = users[i];
      break;
    }
  }

  let product = null;
  for (let i = 0; i < products.length; i++) {
    if (products[i].product === productname) {
      product = products[i];
      break;
    }
  }

  if (user == null) {
    console.log("User nhi mila...");
    return;
  }

  if (product == null) {
    console.log("product nhi mila..");
    return;
  }
  


  const newOrder = {
    userName: user.name,
    productName: product.product
  };

  orderHistory.push(newOrder);

  await write("orderHistory.txt", JSON.stringify(orderHistory));

  console.log("order done ..");
}

buyProduct(username, productname);
