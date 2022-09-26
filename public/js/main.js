///////////////////////////////////////////////STOP WATCH///////////////////
//global variables
const time_el = document.querySelector('.ttime')
// const start_btn = document.getElementById('start')
const stop_btn = document.querySelectorAll('#stop')
const reset_btn = document.querySelectorAll('#reset')
const start_btn = document.querySelectorAll('#start')


let miliseconds = 0;
let interval = null;

//event listeners
Array.from(start_btn).forEach((el)=>{
    el.addEventListener('click', timer)
})
Array.from(stop_btn).forEach((el)=>{
    el.addEventListener('click', stop)
})
Array.from(reset_btn).forEach((el)=>{
    el.addEventListener('click', reset)
})

// start_btn.addEventListener('click', start)
// stop_btn.addEventListener('click', stop)
// reset_btn.addEventListener('click', reset)


function timer (){
    miliseconds++;

    let milisecs = miliseconds % 1000
    let secs = Math.floor(miliseconds / 100) % 60
    let mins = Math.floor(miliseconds/(100 * 60)) % 60 
    let hrs = Math.floor (miliseconds/(100 * 60 * 60))

    if (milisecs < 10) milisecs = '0' + milisecs
    if (secs < 10) secs = '0' + secs
    if (mins < 10) mins = '0' + mins 
    if (hrs < 10) hrs = '0' + hrs 

    time_el.innerText = `${hrs}:${mins}:${secs}:${milisecs}`
}

function start(){
    if (interval){
        return
    }
    
    interval = setInterval(timer, 10)
}
function stop(){
    clearInterval(interval)
    interval = null
}
function reset(){
    stop();
    miliseconds = 0;
    time_el.innerText = '00:00:00'
}

/////////////////////////////////////////////////////trial////////////////////////////////////
// const deleteBtn = document.querySelectorAll('.del')
// const todoItem = document.querySelectorAll('span.not')
// const todoComplete = document.querySelectorAll('span.completed')

// Array.from(deleteBtn).forEach((el)=>{
//     el.addEventListener('click', deleteTodo)
// })

// Array.from(todoItem).forEach((el)=>{
//     el.addEventListener('click', markComplete)
// })

// Array.from(todoComplete).forEach((el)=>{
//     el.addEventListener('click', markIncomplete)
// })

// async function markComplete(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/markComplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }

// async function markIncomplete(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/markIncomplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }

// /////////////////////////////////////////////////////HAMBURGER MENU////////////////////////////////////
// const mainMenu = document.querySelector('.navDiv')
// const openMenu = document.querySelector('.openMenu')
// const closeMenu = document.querySelector('.closeMenu')


// document.querySelector('.openMenu').addEventListener('click', show);
// document.querySelector('.closeMenu').addEventListener('click', close);

// function show(){
//     mainMenu.style.display = 'flex';
//     openMenu.style.display = 'none';
//     document.querySelector('.firstli').addEventListener('click', close);
//     document.querySelector('.secondli').addEventListener('click', close);
// }
// function close(){
//     mainMenu.style.display = "none";
//     openMenu.style.display = "flex";
// }