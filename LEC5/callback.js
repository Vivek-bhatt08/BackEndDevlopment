let account_balance = 2000000;

let products = [
    {
        name: "samsung",
        amount: 70000,
        quantity: 10
    },
    {
        name: "Iphone 16",
        amount: 10000,
        quantity: 1
    }
];

function buyProduct(product_name) {
    return new Promise((resolve, reject) => {
        let isproduct = null;

        for (let i = 0; i < products.length; i++) {
            if (products[i].name === product_name) {
                isproduct = products[i];
                break;
            }
        }

        if (!isproduct) {
            reject("Product is not available");
        } else {
            resolve(isproduct.amount);
        }
    });
}
buyProduct("samsung")
    .then(amount => {
        console.log("Amount:", amount);
    })
    .then((message)=>{
        // console.log(message);
        console.log(account_balance);
    })
    .catch(err => {
        console.log("Error:", err);
    });

function deductAmount(amount){
    return new Promise((resolve,reject)=>{
        if(amount>account_balance){
            reject("Insufficient balance");
        }else{
            account_balance-=amount;
            resolve("Amount deducted and product is purchased ");
        }
    })
}
deductAmount(100000)
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})


async function myfun(){
    try{
        let amount = await buyProduct("Iphone 16");
        let message  = await deductAmount(amount)
        console.log(message)
    }catch(error){
        console.log(error)
    }
    
}
myfun();
console.log("start");
console.log("end");