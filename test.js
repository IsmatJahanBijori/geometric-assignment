// document.getElementById('btn-triangle').addEventListener('click', function () {

//     // const triangle = document.getElementById('triangle').innerText

//     // // base
//     // const baseTriangle = document.getElementById('base').value
//     // // console.log(baseTriangle)
//     // const baseTriangleValue = parseInt(baseTriangle)
//     // // console.log(baseTriangleValue)

//     // // height
//     // const heightTriangle = document.getElementById('height').value
//     // // console.log(heightTriangle)
//     // const heightTriangleValue = parseInt(heightTriangle)
//     // // console.log(typeof heightTriangleValue)


// //     // get inner text and input value hoiche
// //     const triangle = getInnerText('triangle');
// //     // console.log(triangle)
// //     const areaTriangle = getInputField('base', 'height')
// //     console.log(areaTriangle)

// // // validation hoy nay
//     if (isNaN=(areaTriangle) || (typeof areaTriangle!=="") || (areaTriangle<=0)) {
//         // area
//         // const areaTraingle = parseFloat(0.5 * baseTriangleValue * heightTriangleValue).toFixed(2)

//         // // adding row in table
//         // count += 1

//         // //    display
//         // displayArea(triangle, areaTraingle)
//         return alert('Enter valid number')
//     //        // // blank the field
//     // document.getElementById('base').value = '';
//     // document.getElementById('height').value = '';
        
//     }
//     else {
//         // alert('Enter valid number')
//     //     //     // adding row in table
//     count += 1

//     //    display
//     displayArea(triangle, areaTriangle)


//     // blank the field
//     document.getElementById('base').value = '';
//     document.getElementById('height').value = '';
//     }


// // get inner text and input value hoiche
//     // const triangle = getInnerText('triangle');
//     // // console.log(triangle)
//     // const areaTriangle = getInputField('base', 'height')
//     // // console.log(areaTriangle)
   
//     // // adding row in table
//     // count += 1

//     // //    display
//     // displayArea(triangle, areaTriangle)


//     // // blank the field
//     // document.getElementById('base').value = '';
//     // document.getElementById('height').value = '';




// })

// // get input field
// function getInputField(id, id) {
//     // const triangle = document.getElementById('triangle').innerText
//     // base
//     const baseGeometry = document.getElementById(id).value
//     // console.log(baseTriangle)
//     const baseGeometryValue = parseInt(baseGeometry)
//     console.log(baseGeometryValue)

//     // height
//     const heightGeometry = document.getElementById(id).value
//     // console.log(heightTriangle)
//     const heightGeometryValue = parseInt(heightGeometry)
//     // console.log(typeof heightTriangleValue)

//     const area = ((0.5)* baseGeometryValue* heightGeometryValue ).toFixed(2)
//     return area
// }





// // display area
// function displayArea(name, area) {
//     const tableParent = document.getElementById('table-parent')
//     const tr = document.createElement("tr");
//     tr.innerHTML = `<tr>
//         <th>${count}</th>
//         <td>${name}</td>
//         <td>${area} cm<sub>2</sub></td>
//         <td><button class="bg-blue-500 rounded-md p-2 font-semibold">Convert to m<sub>2</sub></button></td>
//     </tr>`;

//     tableParent.appendChild(tr);
// }

// // const colors=document.querySelectorAll('.cardColor')
// // for (const color of colors){
// //     color.addEventListener('mouseenter', function(e){
// // e.target.parentNode.style.backgroundColor=Math.floor(Math.random()*16777215).toString(16)
// //     })
// // }
// // //   const setBg = () => {
// // //   const randomColor = Math.floor(Math.random()*16777215).toString(16);
// // //   document.body.style.backgroundColor = "#" + randomColor;
// // // //   color.innerHTML = "#" + randomColor;
// // // }

// // // card-color.addEventListener("click", setBg);
// // // setBg();

// // const divElem = document.querySelectorAll(".cardColor");
// //     function randomcolor() {
// //         return Math.floor(Math.random()*16777215).toString(16);
// //     }
// //     divElem.addEventListener('mouseenter', () => {
// //         divElem.style.backgroundColor = 
// //         "rgba('+randomcolor()+','+randomcolor()+','+randomcolor()+'\)"
// //     })

// function rg(m, n) {
//     return Math.floor( Math.random() * (n - m + 1) ) + m;
// }

// function hex(i) {
//     return i.toString(16);
// }

// function randColor() {
//     return '#' + hex(rg(1, 15)) + hex(rg(1, 15)) + hex(rg(1, 15)) +
//         hex(rg(1, 15)) + hex(rg(1, 15)) + hex(rg(1, 15));
// }

// (".cardColor").mouseover(function() {
//     $(this).css("background-color",randColor());
// });