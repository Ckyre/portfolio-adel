const helloAdelTxt = document.getElementById("hello-adel-txt");
const firstConnectBtn = document.getElementById("first-connect-btn");
const secondConnectBtn = document.getElementById("second-connect-btn");
const connectForm = document.getElementById("connect-form");
const passwordForgetButton = document.getElementById("password-forget-link");
const passwordForgetHelpText = document.getElementById("password-forget-help");
const passwordVisibilityButton = document.getElementById("password-visibility-toggle");
const passwordContent = document.getElementById("mdp-content-txt");

var currentStep = 0;
var isPasswordVisible = false;

// First step
document.documentElement.addEventListener("click", function() {
    if(currentStep == 0)
    {
        helloAdelTxt.style.top = "45vh";

        firstConnectBtn.style.display = "block";
        setTimeout(function(){
            firstConnectBtn.style.opacity = "1"; 
        }, 800);

        currentStep = 1;
    }
});

// Second step
firstConnectBtn.addEventListener("click", function() {
    if(currentStep == 1)
    {
        helloAdelTxt.style.opacity = "0";
        firstConnectBtn.style.opacity = "0";
        
        connectForm.style.display = "block";
        setTimeout(function(){
            connectForm.style.opacity = "1";
            helloAdelTxt.style.display = "none";
        }, 800);

        currentStep = 2;
    }
});

// Password forget
passwordForgetButton.addEventListener("click", function() {
    passwordForgetHelpText.classList.toggle("hidden");
});

// Password visibility
passwordVisibilityButton.addEventListener("click", function() {
    isPasswordVisible = !isPasswordVisible;

    if(isPasswordVisible)
    {
        passwordVisibilityButton.setAttribute("src", "assets/images/icons/eye.png");
        passwordContent.innerHTML = "embauchez-moi";
    }else 
    {
        passwordVisibilityButton.setAttribute("src", "assets/images/icons/eyelashes.png");
        passwordContent.innerHTML = "*************";
    }
});
