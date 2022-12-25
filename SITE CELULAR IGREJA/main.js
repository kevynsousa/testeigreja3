const botaomenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')
botaomenu.addEventListener('click',() =>{
    menu.classList.toggle('menu-lateral--ativo')
})


const botaomenu2 = document.querySelector('.butao_2')
const licao2 = document.querySelector('.licao')
botaomenu2.addEventListener('click',() =>{
   licao2.classList.toggle('licao--ativo')
})

