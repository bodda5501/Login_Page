const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

document.getElementById("showRegister").onclick = () => {
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
};

document.getElementById("showLogin").onclick = () => {
    registerForm.classList.remove("active");
    loginForm.classList.add("active");
};