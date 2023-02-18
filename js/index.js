
let count = 0

// triangle

document.getElementById('btn-triangle').addEventListener('click', function () {

// get inner text and input value
    const triangle = getInnerText('triangle');
    // console.log(triangle)
    const areaTriangle = parseFloat(getInputField('base', 'height'))
    // console.log(typeof areaTriangle)
   
    // adding row in table
    count += 1

    //    display
    displayArea(triangle, areaTriangle)


    // blank the field
    document.getElementById('base').value = '';
    document.getElementById('height').value = '';

})


// Rectangle

document.getElementById('btn-rectangle').addEventListener('click', function () {

    const rectangle = document.getElementById('rectangle').innerText
    // width
    const widthRectangle = document.getElementById('width').value
    // console.log(baseTriangle)
    const widthRectangleValue = parseInt(widthRectangle)
    // console.log(typeof widthRectangleValue)

    // length
    const lengthRectangle = document.getElementById('length').value
    // console.log(heightTriangle)
    const lengthRectangleValue = parseInt(lengthRectangle)
    // console.log(typeof lengthRectangleValue)

    // area
    const areaRectangle = (widthRectangleValue * lengthRectangleValue).toFixed(2)
    const areaOfRectangle=parseFloat(areaRectangle)
    // console.log(typeof areaOfRectangle)

    // adding row in table
    count += 1

    displayArea(rectangle, areaOfRectangle)

    // blank the field
    document.getElementById('width').value = '';
    document.getElementById('length').value = '';
})


// Parallelogram

document.getElementById('btn-parallelogram').addEventListener('click', function () {

    const parallelogram = document.getElementById('parallelogram').innerText
    // base
    const baseParallelogram = document.getElementById('base').value
    // console.log(baseParallelogram)
    const baseParallelogramValue = parseInt(baseParallelogram)
    // console.log(baseTriangleValue)

    // height
    const heightParallelogram = document.getElementById('height').value
    // console.log(heightParallelogram)
    const heightParallelogramValue = parseInt(heightParallelogram)
    // console.log(typeof heightTriangleValue)

    // area
    const areaParallelogram = (baseParallelogramValue * heightParallelogramValue).toFixed(2)
    const areaOfParallelogram=parseFloat(areaParallelogram)
    console.log(typeof areaOfParallelogram)

    // adding row in table
    count += 1

    displayArea(parallelogram, areaOfParallelogram)

    // blank the field
    document.getElementById('base').value = '';
    document.getElementById('height').value = '';

})


// Rhombus

document.getElementById('btn-rhombus').addEventListener('click', function () {

    // const rhombus = document.getElementById('rhombus').innerText
    // // width
    // const diagonal1Rhombus = document.getElementById('d1').value
    // // console.log(baseTriangle)
    // const diagonal1RhombusValue = parseInt(diagonal1Rhombus)
    // // console.log(baseTriangleValue)

    // // length
    // const diagonal2Rhombus = document.getElementById('d2').value
    // // console.log(heightTriangle)
    // const diagonal2RhombusValue = parseInt(diagonal2Rhombus)
    // // console.log(typeof heightTriangleValue)

    // // area
    // const areaRhombus = parseFloat(0.5 * diagonal1RhombusValue * diagonal2RhombusValue).toFixed(2)

    // get inner text and input value hoiche
    const rhombus = getInnerText('rhombus');
    // console.log(rhombus)
    const areaRhombus = getInputField('d1', 'd2')
    // console.log(areaRhombus)
    // adding row in table
    count += 1

    displayArea(rhombus, areaRhombus)

    // blank the field
    document.getElementById('d1').value = '';
    document.getElementById('d2').value = '';
})

// Pentagon

document.getElementById('btn-pentagon').addEventListener('click', function () {

    // const pentagon = document.getElementById('pentagon').innerText
    // // base
    // const perimeterPentagon = document.getElementById('perimeter').value
    // // console.log(baseTriangle)
    // const perimeterPentagonValue = parseInt(perimeterPentagon)
    // // console.log(baseTriangleValue)

    // // height
    // const apothemTriangle = document.getElementById('apothem').value
    // // console.log(heightTriangle)
    // const apothemTriangleValue = parseInt(apothemTriangle)
    // // console.log(typeof heightTriangleValue)

    // // area
    // const areaPentagon = parseFloat(0.5 * perimeterPentagonValue * apothemTriangleValue).toFixed(2)


    // get inner text and input value hoiche
    const pentagon = getInnerText('pentagon');
    console.log(pentagon)
    const areaPentagon = getInputField('perimeter', 'apothem')
    console.log(areaPentagon)
    // adding row in table
    count += 1

    displayArea(pentagon, areaPentagon)

    // blank the field
    document.getElementById('perimeter').value = '';
    document.getElementById('apothem').value = '';

})


// Ellipse

document.getElementById('btn-ellipse').addEventListener('click', function () {

    const ellipse = document.getElementById('ellipse').innerText
    // width
    const aaxisEllipse = document.getElementById('a-axis').value
    // console.log(baseTriangle)
    const aaxisEllipseValue = parseInt(aaxisEllipse)
    // console.log(baseTriangleValue)

    // length
    const baxisEllipse = document.getElementById('b-axis').value
    // console.log(heightTriangle)
    const baxisEllipseValue = parseInt(baxisEllipse)
    // console.log(typeof heightTriangleValue)

    // area
    const areaEllipse = parseFloat(3.1416 * aaxisEllipseValue * baxisEllipseValue).toFixed(2)

    // adding row in table
    count += 1

    displayArea(ellipse, areaEllipse)

    // blank the field
    document.getElementById('a-axis').value = '';
    document.getElementById('b-axis').value = '';
})





// get result
function getInnerText(id) {
    const geometry = document.getElementById(id).innerText
    return geometry
}

// get input field
function getInputField(id, id) {
    // const triangle = document.getElementById('triangle').innerText
    // base
    const baseGeometry = document.getElementById(id).value
    // console.log(baseTriangle)
    const baseGeometryValue = parseInt(baseGeometry)
    console.log(baseGeometryValue)

    // height
    const heightGeometry = document.getElementById(id).value
    // console.log(heightTriangle)
    const heightGeometryValue = parseInt(heightGeometry)
    // console.log(typeof heightTriangleValue)

    const area = ((0.5)* baseGeometryValue* heightGeometryValue ).toFixed(2)
    return area
}





// display area
function displayArea(name, area) {
    const tableParent = document.getElementById('table-parent')
    const tr = document.createElement("tr");
    tr.innerHTML = `<tr>
        <th>${count}</th>
        <td>${name}</td>
        <td>${area} cm<sub>2</sub></td>
        <td><button class="bg-blue-500 rounded-md p-2 font-semibold">Convert to m<sub>2</sub></button></td>
    </tr>`;

    tableParent.appendChild(tr);
}

// add blog page
document.getElementById('blog').addEventListener('click', function () {
    window.location.href = "blog.html";
})
