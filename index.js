


 const contactslist = document.querySelector(".contacts__list")
const formusername=document.querySelector(".form__username")
const formphone = document.querySelector(".form__phone")
const formbtn = document.querySelector(".form__btn")
const avatarForm=document.querySelector(".form__avatar")
formbtn.onclick = () => {
    const contactDiv=document.querySelector("div")
    const avatarTag = document.createElement("div")
    avatarTag.style.backgroundImage = "https://static3.bigstockphoto.com/4/4/3/large1500/344777575.jpg"
    const nameTag = document.createElement("div")
    const phoneTag = document.createElement("div")
    phoneTag.textContent =formphone.value
    nameTag.textContent = formusername.value
    avatarTag.textContent=avatarForm.value

    const btn = document.createElement("button")
    const icona = document.createElement("img")
    avatarTag.classList.add("contact__avatar")
    nameTag.classList.add("contact__name")
    phoneTag.classList.add("contact__phone")
    btn.classList.add("contact__btn")
    btn.append(icona)
    contactDiv.append(avatarTag, nameTag, phoneTag, btn)
}
