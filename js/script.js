function init(){
  var button = document.getElementById('entrybutton'); 

  button.addEventListener('click', function(){
    var fc = document.getElementById('entryinput')
    alert('Gregory Prawdzik: ' + fc.value);
    });



}

window.addEventListener('load', init);
