//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  on.('load', function(){
    $('img')
  })
}

function pressIt(){
  $('form').on('keydown', function(key){
    if (key.which === 71){
      alert('g has been pressed')
    }
  })
}



$(document).ready(function(){
getIt()
// call functions here

});
