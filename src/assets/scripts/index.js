

document.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        const btn = document.querySelector('#send')
        btn.click()
    }
})


const exempleButton = (theme) => {
    const input = document.querySelector('#baloonSearchJoke')
    input.innerHTML = `<input class="searchJoke" type="text" value="${theme}" id="input" placeholder="Search a joke...">`
    searchJoke()
}


const searchLucky  = () => {

    const searchKeyWord = document.querySelector('#input').value
    const url = `https://api.chucknorris.io/jokes/search?query=${searchKeyWord}`
    const screen = document.querySelector('#screen')


    fetch(url) 

    .then(response => {
        if(!response.ok) {
            screen.innerHTML = `<p class="jokeText">Word not found, try another one...</p>`   
        } 
        return response.json()
    })
        
    .then(data => {


    console.log(data)
    console.log(data.result[1].value)

    const resultsArray = data.result

    // Inserção usada para limpar o quadro, em caso de uma nova pesquisa
    screen.innerHTML = `<p class="jokeText"></p>` 

    resultsArray.map(function(eachJoke){
        const joke = eachJoke.value
        
        document.querySelector('#screen').style.backgroundColor = '#ff000054'
        screen.innerHTML += `<p class="jokeText"> 🧔🏼 ${joke}</p>` 

    })


})

.catch(err => console.log(err))

}




const searchJoke = () => {
    const searchCategory = document.querySelector('#input').value
    const url = `https://api.chucknorris.io/jokes/random?category=${searchCategory}`
    const screen = document.querySelector('#screen')

    fetch(url) 

    .then(response => {
        if(!response.ok) {
            screen.innerHTML = `<p class="jokeText">Category not found, try another one or search with Chuck Norris fury!</p>`   
        } 
        return response.json()
    })
        
    .then(data => {


    const joke = data.value

    console.log(joke)
    if(joke === undefined) {
        screen.innerHTML = `<p class="jokeText">Category not found, try another one or search with Chuck Norris fury!`
    } else {
        screen.innerHTML = `<p class="jokeText"> 🧔🏼 ${joke}</p>`     
    }

  


})

.catch(err => console.log(err))

}


