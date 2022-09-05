
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