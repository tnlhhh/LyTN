let currentProduct = []
function thembanhmi(){
    currentProduct.push("Bánh Mì");
    hienthisanpham();

}
function themsuachua(){
    currentProduct.push("Sữa Chua");
    hienthisanpham();
}
function xoa(i){
    const newProduct = [ ]
    for(let j = 0; j < currentProduct.length; j++){
        if(j!== i){
            newProduct.push(currentProduct[j]);
        }
    }
    currentProduct = newProduct;
    hienthisanpham();

}

function hienthisanpham(){
    productList.innerHTML = "";
    for(let i = 0; i < currentProduct.length; i++){
        const product  = currentProduct[i];
        productList.innerHTML += `<li>${product}</li>
        <button onclick="xoa(${i})">Xóa</button>`

}
}
hienthisanpham()