function init(){
  var button = document.getElementById('entrybutton'); 

  button.addEventListener('click', function(){
    var fc = document.getElementById('entryinput')
    alert('Gregory Prawdzik: ' + fc.value);
    var output = document.getElementById('textoutput');
    output.innerHTML = fc.value;
    });



}

window.addEventListener('load', init);
