const h1 = document.querySelector("h1")
const happyBtn = document.querySelector("#happy")
const sadBtn = document.querySelector("#sad")
const angryBtn = document.querySelector("#angry")
const confusedBtn = document.querySelector("#confused")


happyBtn.addEventListener("click", function(e){
    store.dispatch({ type: "HAPPY", payload : 'ʘ‿ʘ' })
    const state = store.getState();
    h1.innerText = state.feeling;
})
sadBtn.addEventListener("click", function(e){
    store.dispatch({ type: "SAD", payload : '⊙︿⊙' })
    const state = store.getState();
    h1.innerText = state.feeling;
})
angryBtn.addEventListener("click", function(e){
    store.dispatch({ type: "ANGRY", payload : 'ಠ▃ಠ'})
    const state = store.getState();
    h1.innerText = state.feeling;
})
confusedBtn.addEventListener("click", function(e){
    store.dispatch({ type: "CONFUSED", payload : '◔_◔' })
    const state = store.getState();
    h1.innerText = state.feeling;
})

