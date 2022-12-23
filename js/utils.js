let title = document.title

window.addEventListener(`blur`, () => {
    document.title = `Back pls`
})

window.addEventListener(`focus`, () => {
    document.title = title
})