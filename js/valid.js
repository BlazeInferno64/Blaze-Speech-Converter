const textInput = document.querySelector(".text");

const btn = document.querySelector(".convert");

const wordsLength = document.querySelector("#len");

const form = document.querySelector(".form");


textInput.addEventListener("input",(e) => {
    wordsLength.innerText = `${textInput.value.length} Words`;
    if(textInput.value.length < 1){
        btn.classList.add("none");
        wordsLength.classList.remove("yellow");
        wordsLength.classList.add("green");
    }
    if(textInput.value.length >= 100){
        wordsLength.classList.add("yellow");
        wordsLength.classList.remove("green");
    }
    else if(textInput.value.length > 0){
        btn.classList.remove("none")
        wordsLength.classList.remove("yellow");
        wordsLength.classList.add("green");
    }
})

