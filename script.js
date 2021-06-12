
let dates = new Date();
let days = ["sunday","monday","tuesday","wednesday","thursday","friday","satdurday"];
let months = ["january","february","march","april","may","june","july","augest","september","october","november","december"];
let day = days[dates.getDay()];
let month = months[dates.getMonth()];
let date = dates.getDate();
let year = dates.getFullYear();
document.querySelector(".date").innerHTML=year+" "+month+" "+date;


let home = "home"
apiURL(home)

let navSelector = document.querySelectorAll('.nav-link')
console.log(navSelector);
navSelector.forEach(event => {
   event.addEventListener("click",function(){
      let removecard = document.querySelectorAll('.card');
      removecard.forEach(() => {
         document.getElementById('deletedata').remove();
      })
      apiURL(event.innerHTML);
   })
});

async function apiURL(value) {

      let apikey = "0TLfFX4hZTyCuOoaTsZel6h8xK6HYGp4";
      let apiURL = "https://api.nytimes.com/svc/topstories/v2/"+value+".json?api-key="+apikey;
      // console.log(apiURL);
      const response = await fetch(apiURL);
      const data = await response.json();
      console.log(data.results);
      const dresult = data.results
      dresult.forEach(element => {
         let nTitle = element.title;
         let nNews = element.abstract;
         let ntime = element.updated_date;
         let na = element.url;
         let nimage = element.multimedia[2].url;
         
       
   
    //card
   let card = document.createElement('div');
   card.id = "deletedata"
   card.className="card mb-3";
   document.querySelector('.container').appendChild(card);
   
   //row
   let row = document.createElement('div');
   row.className="row g-0";
   card.appendChild(row);
   
   //colm
   let colm = document.createElement('div');
   colm.className="col-md-8";
   row.appendChild(colm);
   
   //cardbody
   let cardbody = document.createElement('div');
   cardbody.className="card-body";
   colm.appendChild(cardbody);
   
   //cardtitle
   let cardtitle = document.createElement('h5');
   cardtitle.className="card-title";
   let cardhead = document.createTextNode(nTitle);
   cardtitle.appendChild(cardhead);
   cardbody.appendChild(cardtitle);
   
   //cardtext
   let cardtext = document.createElement('p');
   cardtext.className="card-text";
   let cardcontent = document.createTextNode(nNews)
   cardtext.appendChild(cardcontent);
   cardbody.appendChild(cardtext);
   
   //cardtext1
   let cardtext1 = document.createElement('p');
   cardtext1.className="card-text text1";
   let small = document.createElement('small');
   small.className="text-muted";
   let cardcontent1 = document.createTextNode(ntime);
   small.appendChild(cardcontent1);
   cardtext1.appendChild(small);
   cardbody.appendChild(cardtext1);

   //a
   let a = document.createElement('a');
   a.className="anger";
   a.innerText="continue";
   a.setAttribute('href',na);
   cardtext.appendChild(a);
   
   //colm4
   let colm4 = document.createElement('div');
   colm4.className="col-md-4";
   row.appendChild(colm4);
   
   //img
   let img = document.createElement('img');
   img.setAttribute('src',nimage);
   img.setAttribute('alt',"noimage");
   colm4.appendChild(img);
    
   
   });
  
}