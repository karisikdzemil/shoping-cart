let alltotal = 0;
function addToCart(element){
   let mainEl = element.closest('.single-item');
   let price = mainEl.querySelector('.price').innerText;
   let name = mainEl.querySelector('h3').innerText;
   let quantity = mainEl.querySelector('input').value;
   let cartItems = document.querySelector('.cart-items');

   console.log(price)

   if(parseInt(quantity) > 0){

    price = price.substring(1)
    price = parseInt(price)
    let total = price * parseInt(quantity);

    alltotal += total
    document.querySelector('.total').innerText = `total: $${alltotal}`
   cartItems.innerHTML += `<div class="cart-single-item">
                                <h3>${name}</h3>
                                <p>$${price} x ${quantity} = $<span>${total} </span>
                                <button onclick="removeFromCart(this)" class ="remove-item">ukloni</button>
                                </div>`


   element.innerText = 'dodato'
   element.setAttribute('disabled', 'true')




   }else{
    alert('odaberi kolicinu')
}


}

function removeFromCart(element){
    let mainEl = element.closest('.cart-single-item');
    let price = mainEl.querySelector('p span').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let vegetables = document.querySelectorAll('.single-item');

    price = parseInt(price)

    alltotal -= price

    document.querySelector('.total').innerText = `total: $${alltotal}`
    mainEl.remove()

    vegetables.forEach(function (vege){
        let itemName = vege.querySelector('.si-content h3').innerText;
        
        if(itemName === name){
            vege.querySelector('.actions input').value = 0;
            vege.querySelector('.actions button').removeAttribute('disabled');
            vege.querySelector('.actions button').innerText = 'Dodaj';

        };
    })
}
 