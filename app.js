let card = document.querySelector(".card_one");
let info_text = document.querySelector(".info");
let card_one_h1 = document.querySelector(".info_head");


//EventListeners 
card.addEventListener("click",() =>{

    console.log("clicked box");
    expand();
    console.dir(card_one_h1);
    card_one_h1.style.fontSize = "xx-large";
   
    

})

card_one_h1.addEventListener("click",() =>{
    console.log("clicked");
})




//Function
function expand(){
    card.classList.add("big_card");
    card.classList.add("info_expand");
}

let text_visible = () =>{
    info_text.classList.add("info_expand");
}