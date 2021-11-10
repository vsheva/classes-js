"use strict";

//          --- 1 задание ----

// const calculator = {
//
//     sum: function(){
//         let num1, num2, result
//         num1 = document.getElementById("a").value;
//         num1 = parseInt(num1)
//         num2 = document.getElementById("b").value;
//         num2 = parseInt(num2)
//
//         result = num1 + num2;
//         console.log(result)
//         document.getElementById("res").value = result;
//     },
//     mult: function(){
//
//         let num1, num2, result
//         num1 = document.getElementById("a").value;
//         num1 = parseInt(num1)
//         num2 = document.getElementById("b").value;
//         num2 = parseInt(num2)
//
//         result = num1 * num2;
//         console.log(result)
//
//       document.getElementById("res").value = result;
//     },
//     show: function(){
//          document.getElementById("sum").addEventListener("click", this.sum)
//          document.getElementById("mult").addEventListener("click", this.mult)
//     }
// }
//
// calculator.show();






// ---2 задание---

//
// function getResult(x,y){
//     let result;
//
//     let z = Math.pow(x,y)
//
//     result = String(z).split('').reduce((a, b) => Number(a) + Number(b))
//
//
//     return result
// }
//
// console.log(getResult(4, 8))
//
//
//

//  --- 3 задание ---

const cityArr = {
    rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
    uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
    bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
    jap: ['Токио', 'Киото', 'Осака', 'Иокогама']
}

let selectedCountry = document.querySelector("#country");
let selectedCity = document.querySelector("#city");

selectedCountry.addEventListener('change',function(){
    console.log();
    let cities =cityArr[this.value];
    selectedCity.length = 0;



    for(let i = 0; i < cities.length; i++) {

      selectedCity.add(new Option(cities[i]));

    }
})




