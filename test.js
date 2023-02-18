document.getElementById('btn-triangle').addEventListener('click', function () {

    // const triangle = document.getElementById('triangle').innerText

    // // base
    // const baseTriangle = document.getElementById('base').value
    // // console.log(baseTriangle)
    // const baseTriangleValue = parseInt(baseTriangle)
    // // console.log(baseTriangleValue)

    // // height
    // const heightTriangle = document.getElementById('height').value
    // // console.log(heightTriangle)
    // const heightTriangleValue = parseInt(heightTriangle)
    // // console.log(typeof heightTriangleValue)


//     // get inner text and input value hoiche
//     const triangle = getInnerText('triangle');
//     // console.log(triangle)
//     const areaTriangle = getInputField('base', 'height')
//     console.log(areaTriangle)

// // validation hoy nay
//     if (isNaN!=(areaTriangle) || (typeof areaTriangle!=='string') || (areaTriangle>0)) {
//         // area
//         // const areaTraingle = parseFloat(0.5 * baseTriangleValue * heightTriangleValue).toFixed(2)

//         // adding row in table
//         count += 1

//         //    display
//         displayArea(triangle, areaTraingle)
//         // alert('Enter valid number')
//            // // blank the field
//     document.getElementById('base').value = '';
//     document.getElementById('height').value = '';
        
//     }
//     else {
//         alert('Enter valid number')
//     //     //     // adding row in table
//     // count += 1

//     // //    display
//     // displayArea(triangle, areaTriangle)


//     // // blank the field
//     // document.getElementById('base').value = '';
//     // document.getElementById('height').value = '';
//     }


// get inner text and input value hoiche
    const triangle = getInnerText('triangle');
    // console.log(triangle)
    const areaTriangle = getInputField('base', 'height')
    // console.log(areaTriangle)
   
    // adding row in table
    count += 1

    //    display
    displayArea(triangle, areaTriangle)


    // blank the field
    document.getElementById('base').value = '';
    document.getElementById('height').value = '';


    const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.section.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  
  genNew.addEventListener("click", setBg);
  setBg();

})
// const setBg = () => {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.section.style.backgroundColor = "#" + randomColor;
//     color.innerHTML = "#" + randomColor;
//   }
  
//   genNew.addEventListener("click", setBg);
//   setBg();
