// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let total=JSON.parse(localStorage.getItem('amount'))
document.getElementById('wallet').innerText=total

let Alldata=JSON.parse(localStorage.getItem('movie'))
Alldata.forEach(function(ele){
 let box=document.createElement('div')
 let img=document.createElement('img');
 img.src=ele.Poster;
 let title=document.createElement('p');
 title.innerText=ele.Title;
 box.append(img,title)
 document.getElementById('movie').append(box)
})
