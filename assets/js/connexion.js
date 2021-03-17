const helloAdelTxt = document.getElementById("hello-adel-txt");
const firstConnectBtn = document.getElementById("first-connect-btn");
const secondConnectBtn = document.getElementById("second-connect-btn");
const connectForm = document.getElementById("connect-form");

// First step
document.documentElement.addEventListener("click", function() {
    helloAdelTxt.style.top = "40vh";

    firstConnectBtn.style.display = "block";
    setTimeout(function(){
        firstConnectBtn.style.opacity = "1"; 
    }, 500);
});

// Second step
document.getElementById("first-connect-btn").addEventListener("click", function() {
    helloAdelTxt.style.opacity = "0";
    firstConnectBtn.style.display = "none";

    connectForm.style.display = "block";
    setTimeout(function(){
        connectForm.style.opacity = "1"; 
    }, 500);
});
