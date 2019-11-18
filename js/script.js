function init(){
  var button = document.getElementById('entrybutton'); 

  button.addEventListener('click', function(){
    var fc = document.getElementById('entryinput')
    alert(fc.value);
    });



}

window.addEventListener('load', init);
