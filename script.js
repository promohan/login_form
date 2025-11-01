const greaterThanBtn=document.querySelector('.greater-than-btn');
const sideBar=document.querySelector('.sidebar');
const toggleDarkLight=document.querySelector('.inner-toggle')
const DarkLightText=document.querySelector('.light-dark')
const bottomBtn=document.querySelector('.bottom');
const searchBtn=document.querySelector('.search-field-icon');


greaterThanBtn.addEventListener('click',()=>{
        sideBar.classList.toggle('callapsed')
});

toggleDarkLight.addEventListener('click',()=>{
        sideBar.classList.toggle('dark')
        // DarkLightText.cl
});

bottomBtn.addEventListener('click',()=>{
        sideBar.classList.toggle('dark')
})

searchBtn.addEventListener("click",()=>{
        sideBar.classList.toggle('callapsed')
})