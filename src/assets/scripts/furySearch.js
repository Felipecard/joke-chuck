
const furySearch  = () => {

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

module.exports = { furySearch }