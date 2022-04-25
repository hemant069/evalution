// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
  //url=https://www.omdbapi.com/?s=avenger&apikey=4339e83a
  let total=JSON.parse(localStorage.getItem('amount'))
  document.getElementById('wallet').innerText=total
  let movies=document.getElementById('movies')
  let id;
  async function Moviessearch(){
    try{
      const search=document.getElementById('search').value;
      const res=await fetch(`https://www.omdbapi.com/?s=${search}&apikey=4339e83a`);
      let data=await res.json()
      let moviesdata=data.Search
      //console.log(data)
      if(moviesdata==undefined){
      return false;
    }
      return moviesdata;
    }
    catch(err){
      console.log(err);
    }
  }
  function appendMovies(data){
    movies.innerHTML=null;
    
    //console.log(data)
    data.forEach(function(ele){
      let box=document.createElement('div');
      let p=document.createElement('p');
      p.innerText=ele.Title;
      let img=document.createElement('img');
      img.src=ele.Poster
      let book=document.createElement('button');
      book.innerText='Book Now';
      book.setAttribute='book_now'
      book.addEventListener('click',function(){
        moviebook(ele)
      })
     box.append(p,img,book)
     

     
      document.getElementById('movies').append(box)
    })
  }
  async function main(){
    let data=await Moviessearch()
    console.log(data)
   
    appendMovies(data)
  }
  function debounce(func,delay){
    if(id){
      clearTimeout(id)
    }
    id=setTimeout(function(){
      func()
    },delay)
  }
let arr=JSON.parse(localStorage.getItem('movie'))||[]

  function moviebook(ele){
    // console.log(ele)
arr.push(ele)
localStorage.setItem('movie',JSON.stringify(arr))
window.location.href='checkout.html'


  }