
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
