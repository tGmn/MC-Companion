// adiciona a var splashScreen
const splashScreen = document.querySelector("#splash-screen");

// adiciona o event listener ao div
splashScreen.addEventListener('click', goToIndex);

// cria a função goToIndex

function goToIndex () {
    window.location.href = "main.html";
    console.log("click")
}