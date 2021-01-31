$('.counter').counterUp({
    delay: 10,
    time: 3000
});

const loginPopup = document.querySelector(".pop_up");
const close = document.querySelector(".close");
window.addEventListener("load",function(){
    showPopup();
})

function showPopup(){
    const timeLimit = 5 //5s;
    let i=0;
    const timer = setInterval(function(){
        i++;
        if (i == timeLimit){
            clearInterval(timer);
            loginPopup.classList.add("show");
        }
        console.log(i)

    }, 1000);
}
 close.addEventListener("click", function(){
    loginPopup.classList.remove("show");
 })