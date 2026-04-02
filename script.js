let count = 0;

function addToCart(){
    count++;
    document.getElementById("cart-count").innerText = count;
}

// 多語切換
document.getElementById("lang").addEventListener("change", function(){
    let lang = this.value;
    let names = document.querySelectorAll(".name");

    if(lang === "en"){
        names[0].innerText = "Cute Dress";
        names[1].innerText = "Japanese Top";
        names[2].innerText = "Skirt";
    }else{
        names[0].innerText = "可愛洋裝";
        names[1].innerText = "日系上衣";
        names[2].innerText = "少女裙子";
    }
});