//Script som laddar när sidan öppnar sig
/*
    Jag använde developer tool console i chrome för att debugga koden



*/
function cardEngine() {
    //Hämta informationen som finns i inputBox
    var input = document.getElementById("inputBox")

    //Rensa upp gammla posts
    clearCards();

    //Gör om informationen till en int
    var posts = parseInt(input.value);

    //Tillåt inte för många posts åt gången
    if(posts < 101 && posts > 0) {
        buildCards(posts);
    }else{
        alert("Minimum: 1\nMaximum: 100")
    }   
};


function buildCards(count, parent) {
    //alert(count+"\n"+parent);
    //Hämta div-taggen som heter cards och ge den variablen cardParent
    var cardParent = document.getElementById("cards");
    for(var i = 0; i < count; i++){

        //Skapa ny div och ge den id:t "card"
        var card = document.createElement("div");
        card.setAttribute("id", "card")

        //Skapa en h1 och en p-tagg
        var cardHead = document.createElement("h1");
        var cardText = document.createElement("p");

        //Ändra texten i h1 och p samt gör dom redigerbara
        cardHead.innerHTML ="Post " + (i + 1);
        cardText.innerHTML = "Placeholder wall of text";
        cardHead.contentEditable = true;
        cardText.contentEditable = true;

        //Skapa taggarna under div taggen "card"
        card.appendChild(cardHead)
        card.appendChild(cardText)

        //Skapa div-taggen "card" under div-taggen "cards"
        cardParent.appendChild(card)
    }

}

function clearCards() {

    //Hämta div-taggen som heter cards och ge den variablen cardParent
    var cardParent = document.getElementById("cards");

    //Hitta alla taggar under "cards"
    //Loopa igenom alla taggar som finns och ta bort dom
    var cardChildren = cardParent.childNodes;
    for(var i = cardChildren.length-1; i >= 0; i--){
        var cardChild = cardChildren[i];
        cardChild.parentNode.removeChild(cardChild);
    }
}