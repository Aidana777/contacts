const  contactDiv=document.createElement("div")
const avatarTag=document.createElement("div")
avatarTag.style.backgroundImage="https://static3.bigstockphoto.com/4/4/3/large1500/344777575.jpg"
const nameTag=document.createElement("div")
const phoneTag=document.createElement("div")
phoneTag.textContent="telefon"
nameTag.textContent='click'
const contactslist=document.querySelector(".contacts__list")
const btn=document.createElement("button")
const icona=document.createElement("img")
icona.src="./icons/user.svhttps://www.google.com/url?sa=i&url=https%3A%2F%2Ficonscout.com%2Ficon%2Fright-arrow-1767497&psig=AOvVaw3nDBPTK9YnNBjyuYNZHUMn&ust=1645019618684000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCLiWu-btgfYCFQAAAAAdAAAAABADg"
avatarTag.classList.add("form__avatar")
nameTag.classList.add("form__username")
phoneTag.classList.add("form__phone")
const controlbtn=document.querySelector("form__btn")
btn.classList.add("contact__btn")
btn.append(icona)
contactDiv.append(avatarTag,nameTag,phoneTag,btn)
contactslist.append(contactDiv)
controlbtn.onclick=()=>{
   if(contactDiv!==null){
       contactDiv.append(contactslist)
   }else{
       alert("Error")
   }
}
