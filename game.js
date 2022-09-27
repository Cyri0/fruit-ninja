fruits = []

let point = 0

function fruitFactory(){
    let fruit = {
        element: document.createElement("div"),
        xPos: Math.floor(Math.random()*window.innerWidth) - 25,
        yPos: (Math.floor(Math.random()*1000) + 50) * -1,
        rotate: 0,
        speed: Math.floor(Math.random()*10) + 5
    }
    fruit.element.classList.add("fruit")
    fruit.element.style.left = `${fruit.xPos}px`
    fruit.element.style.top = `${fruit.yPos}px`

    fruit.element.onmouseover = () =>{
        fruit.element.style.display = "none"
        point++
        document.getElementById("point").innerText = point
    }

    document.body.appendChild(fruit.element)
    fruits.push(fruit)
}

function resetFruit(i){
    fruits[i].xPos = Math.floor(Math.random()*window.innerWidth) - 25
    fruits[i].yPos = (Math.floor(Math.random()*200) + 50) * -1
    fruits[i].speed = Math.floor(Math.random()*10) + 5
    fruits[i].element.style.display = "block"
}

fruitFactory()
fruitFactory()
fruitFactory()
fruitFactory()
fruitFactory()
fruitFactory()
fruitFactory()
fruitFactory()
fruitFactory()
fruitFactory()
fruitFactory()
fruitFactory()
fruitFactory()
fruitFactory()
fruitFactory()

console.log(fruits)

setInterval(() => {
    for(let i = 0; i < fruits.length; i++){
        fruits[i].element.style.top = `${fruits[i].yPos}px`
        fruits[i].yPos += fruits[i].speed

        if(fruits[i].yPos > window.innerHeight){
            resetFruit(i)
        }
    }
}, 100);







// let fruit = document.createElement("div")
// fruit.classList.add("fruit")
// document.body.appendChild(fruit)

// console.log(fruit)

// let yPos = 0
// let xPos = Math.floor(Math.random()*window.innerWidth) - 25
// let rotateDeg = 0
// setInterval(() => {
//     fruit.style.top = `${yPos}px`
//     fruit.style.left = `${xPos}px`

//     fruit.style.transform = `rotate(${rotateDeg}deg)`
//     rotateDeg += 10

//     yPos += 10
//     if(yPos > window.innerHeight){
//         yPos = -50
//         xPos = Math.floor(Math.random()*window.innerWidth) - 25
//     }
// }, 50);