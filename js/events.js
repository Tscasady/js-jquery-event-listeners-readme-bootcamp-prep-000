//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  
}

function pressIt(){
  $().on('keydown', function(key){
    if (key.which == 71){
      alert('g has been pressed')
    }
  })
}



$(document).ready(function(){
getIt()
// call functions here

});
