// var slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
var i=0
// function showTable() {
//   if(i==0){
//     document.getElementById('table').style.display='none';
//     i=1
//   }
//   else{
//     document.getElementById('table').style.display='block'
//     i=0
//   }
// }
var j=0
function showngo() {
  if(j==0){
    document.getElementById('conform').style.display='none';
    j=1
  }
  else{
    document.getElementById('conform').style.display='block'
    j=0
  }
}
function fetchData(){
fetch('/ngo').then((response)=>{
  response.json().then((data)=>{
    let html=``
    data.forEach(element => {
      html+=`
      <div class="nc">
                    <h1>${element.name}</h1>
                    <h2>${element.place}, ${element.state}</h2>
                    <br>
                    <a href="${element.url}">${element.url}</a><br>
                    <a href="mailto:${element.email}">${element.email}</a>
                    <br>
                    <br>
                    <h5>
                    ${element.des}
                    </h5>
      </div>`
      
    });
    document.getElementById('tablebody').innerHTML=html
  
})})
}