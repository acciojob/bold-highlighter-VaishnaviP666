function highlight() {
    //Write your code here
var els = document.getElementsByTagName("strong");
  for (var i = 0; i < els.length; i++) {
    els[i].style.color = "green";
  }

}


function return_normal() {
    //Write your code here
var els = document.getElementsByTagName("strong");
  for (var i = 0; i < els.length; i++) {
    els[i].style.color = "black";
  }
    
}
