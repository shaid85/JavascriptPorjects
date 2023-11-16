const button = document.querySelectorAll('.button');
const body = document.querySelector('body')

button.forEach(function (btndata) {
  console.log(btndata.id);
  btndata.addEventListener('click', function(e){
    if(e.target.id == 'grey'){body.style.backgroundColor = e.target.id}
    if(e.target.id == 'red'){body.style.backgroundColor = e.target.id}
    if(e.target.id == 'blue'){body.style.backgroundColor = e.target.id}
    if(e.target.id == 'yellow'){body.style.backgroundColor = e.target.id}
  })
});