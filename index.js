
//задача про студентов


let out1 = document.getElementById('out1')
let out2 = document.getElementById('out2')
let but = document.getElementById('but')

let students = ['Иванов','Петров','Сидоров','Ковалев','Тумашов','Наумова','Пупкин','Соловьева','Пригожина','Усачева']



function random(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function f1(){
    const grade = [random(2,5),random(2,5),random(2,5),random(2,5),random(2,5),random(2,5),random(2,5),random(2,5),random(2,5),random(2,5)]
    let str1 = '<tr><td>Фамилия</td><td>Оценка</td></tr>'

for ( let i=0; i<students.length; i++){
str1 += '<tr><td>'+students[i]+'</td><td>'+grade[i]+'</td></tr>'
}
out1.innerHTML = str1
}

but.onclick = f1

//задача про монетку

let moneta = document.getElementById('moneta')
let but_mon = document.getElementById('but_mon')
let out_mon = document.getElementById('out_mon')

function f2(){
let mon = Math.floor(Math.random ()*2)
if (mon == 0){
    moneta.src = 'mon1.png'
    out_mon.innerText = 'Выпал орел'
}
else {
    moneta.src = 'mon2.png'
    out_mon.innerText = 'Выпала решка'
}

}


but_mon.onclick = f2