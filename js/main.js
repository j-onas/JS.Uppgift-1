window.onload = function() {
    document.getElementsById("inputBox").oninput = function (){
       clearCards();
    }
}

function clearCards() {
    var parent = document.getElementById("card");
    parent.innerHTML = '';
}