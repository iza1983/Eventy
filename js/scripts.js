var list = document.getElementById('Lista')
var add = document.getElementById('addElem')
var liElem = document.getElementsByTagName('li')

add.addEventListener('click', function() {
  list.innerHTML +='<li>item ' + liElem.length + '</li>';
});