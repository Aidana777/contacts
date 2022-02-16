


 const contactslist = document.querySelector(".contacts__list")
const formusername=document.querySelector(".form__username")
const formphone = document.querySelector(".form__phone")
const formbtn = document.querySelector(".form__btn")
formbtn.onclick = () => {
    const contactDiv = document.createElement("div")
    const avatarTag = document.createElement("div")
    avatarTag.style.backgroundImage = "https://static3.bigstockphoto.com/4/4/3/large1500/344777575.jpg"
    const nameTag = document.createElement("div")
    const phoneTag = document.createElement("div")
    phoneTag.textContent =formphone.value
    nameTag.textContent = formusername.value
    

    const btn = document.createElement("button")
    const icona = document.createElement("img")
    icona.src = "./icons/user.svhttps://www.google.com/url?sa=i&url=https%3A%2F%2Ficonscout.com%2Ficon%2Fright-arrow-1767497&psig=AOvVaw3nDBPTK9YnNBjyuYNZHUMn&ust=1645019618684000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCLiWu-btgfYCFQAAAAAdAAAAABADg"
    avatarTag.classList.add("contact__avatar")
    nameTag.classList.add("contact__name")
    phoneTag.classList.add("contact__phone")
    btn.classList.add("contact__btn")
   
    btn.append(icona)
    contactDiv.append(avatarTag, nameTag, phoneTag, btn)
    contactslist.append(contactDiv)
}
