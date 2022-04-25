// Store the wallet amount to your local storage with key "amount"
document.querySelector('#add_to_wallet').addEventListener('click',addwallet)
let total=JSON.parse(localStorage.getItem('amount'))

function addwallet(){
  let amount=document.getElementById('amount').value;
 amount=total+(+amount)
 window.location.reload()
  
  localStorage.setItem('amount',JSON.stringify(+(amount)))
  

}



document.getElementById('wallet').innerText=total
