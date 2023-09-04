
class Product {
    constructor(name, type, action){
        this.name = name;
        this.type = type;
        this.action = action
    }

    getName(){
        return this.name;
    }

    getType(){
        return this.type;
    }

    execute(){
        return this.action();
    }
}

function onChangeProductName(e){
    let value = document.getElementById('product_name').value;
    localStorage.setItem('product_name', value);
}

function onChangeProductType(e){
    let value = document.getElementById('product_type').value;
    localStorage.setItem('product_type', value);
}

function onChangeProductAction(e){
    let value = document.getElementById('product_action');
    localStorage.setItem('product_action', value);
}

function getAction(){
    let action = document.getElementById('product_action').value;
    if(!action) action = document.getElementById('product_action')[0].value
    return action;
}

function getProductInfo(){
    const productName = localStorage.getItem('product_name');
    const type = localStorage.getItem('product_type');
    const action =getAction();
    return {
        productName,
        type,
        action
    }
}

function missingProductInfo(obj){
    let isMissingInfo = false;
    Object.values(obj).forEach(item=>{
        if(!item){
            isMissingInfo = true
        }
    })

    return isMissingInfo
}

function saveProduct(){
    let newProduct = getProductInfo();
    
    if(missingProductInfo(newProduct)) {
        return alert('informações faltantes!');
    } 
    
    let listProducts = localStorage.getItem('list_products') || "";
    if (listProducts) {
        listProducts = JSON.parse(listProducts);
    }
    
    let finalList = [...listProducts, newProduct];
    localStorage.setItem('list_products', JSON.stringify(finalList));
}

function listItems(){
    const list = JSON.parse(localStorage.getItem('list_products'));
    const element = document.getElementById('all_products')
    list.forEach(item=>{
        console.log('item', item)
        element.createElement('li')
    })
    return list;
}

listItems()

const sponge = new Product("Esponja", "Limpeza", ()=> "limpando")

