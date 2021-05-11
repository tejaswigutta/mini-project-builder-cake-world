/*Fill your code */
//total price to be paid by the customer
var totalPrice=0; 
//state mof buy button
var buyButton=false
//state of ingredients of cake
var state={
    chocolate:false,
    strawBerry:false,
    butterScotch:false,
    vanilla:false,
    redVelvet:false
}
//prices of ingedients of cake
var price={
    chocolate:300,
    strawBerry:100,
    butterScotch:200,
    vanilla:250,
    redVelvet:350
}
 
// used to add and remove items from bill and screen 
function makeChanges(ingredient){
    let items=document.querySelectorAll(`.${ingredient}`)
    if(state[ingredient]){
        items.forEach(item=>{item.style.display="block"})
        totalPrice+=price[ingredient]
    }
    else{
        items.forEach(item=>{item.style.display="none"})
        totalPrice-=price[ingredient]
    }
}

//to render chocolate
function renderChocolate(){
    state["chocolate"]=!state["chocolate"]
    if(state["chocolate"])
       document.querySelector("#buttonChocolate").id="button-Chocolate"
    else
       document.querySelector("#button-Chocolate").id="buttonChocolate"
    makeChanges("chocolate")
}
//to render strawberry
function renderStrawBerry(){
    state["strawBerry"]=!state["strawBerry"]
    if(state["strawBerry"])
      document.querySelector("#buttonStrawBerry").id="button-StrawBerry"
    else
      document.querySelector("#button-StrawBerry").id="buttonStrawBerry"
    makeChanges("strawBerry")
}
//to render butterscotch
function renderButterScotch(){
    state["butterScotch"]=!state["butterScotch"]
    if(state["butterScotch"])
      document.querySelector("#buttonButterScotch").id="button-ButterScotch"
    else
      document.querySelector("#button-ButterScotch").id="buttonButterScotch"
    makeChanges("butterScotch")
}
//to render vanilla
function renderVanilla(){
    state["vanilla"]=!state["vanilla"]
    if(state["vanilla"])
      document.querySelector("#buttonVanilla").id="button-Vanilla"
    else
      document.querySelector("#button-Vanilla").id="buttonVanilla"
    makeChanges("vanilla")
}
//to render redvelvet
function renderRedVelvet(){
    state["redVelvet"]=!state["redVelvet"]
    if(state["redVelvet"])
      document.querySelector("#buttonRedVelvet").id="button-RedVelvet"
    else
      document.querySelector("#button-RedVelvet").id="buttonRedVelvet"
    makeChanges("redVelvet")
}
//on clicking buy button
function clickBuy(){
    if(!buyButton){
        let newElement=document.createElement("div");
        newElement.classList.add("total")
        newElement.innerHTML=`TOTAL----${totalPrice}`
        document.querySelector(".totalBill").appendChild(newElement);
        if(totalPrice!=0)
        document.querySelector("#candle").style.display="block"
        buyButton=!buyButton
    }
}

// adding event listeners to buttons
document.querySelector("#buttonChocolate").addEventListener("click",renderChocolate);
document.querySelector("#buttonStrawBerry").addEventListener("click",renderStrawBerry);
document.querySelector("#buttonButterScotch").addEventListener("click",renderButterScotch);
document.querySelector("#buttonVanilla").addEventListener("click",renderVanilla);
document.querySelector("#buttonRedVelvet").addEventListener("click",renderRedVelvet);
document.querySelector("#buttonBuy").addEventListener("click",clickBuy);


