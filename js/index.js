
let count = 0
// triangle

document.getElementById('btn-triangle').addEventListener('click', function () {

    const triangle = document.getElementById('triangle').innerText
    // base
    const baseTriangle = document.getElementById('base').value
    // console.log(baseTriangle)
    const baseTriangleValue = parseInt(baseTriangle)
    // console.log(baseTriangleValue)

    // height
    const heightTriangle = document.getElementById('height').value
    // console.log(heightTriangle)
    const heightTriangleValue = parseInt(heightTriangle)
    // console.log(typeof heightTriangleValue)

    if (typeof baseTriangleValue === 'number' && typeof heightTriangleValue === 'number') {
        // area
        const areaTraingle = parseFloat(0.5 * baseTriangleValue * heightTriangleValue).toFixed(2)


        // adding row in table
        count += 1

        //    display
        displayArea(triangle, areaTraingle)
    }
    else {
        alert('Enter valid number')
    }

    // // area
    // const areaTraingle = parseFloat(0.5 * baseTriangleValue * heightTriangleValue).toFixed(2)

    //     // adding row in table
    //     count += 1

    // //    display
    //     displayArea(triangle, areaTraingle)


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
    // console.log(baseTriangleValue)

    // length
    const lengthRectangle = document.getElementById('length').value
    // console.log(heightTriangle)
    const lengthRectangleValue = parseInt(lengthRectangle)
    // console.log(typeof heightTriangleValue)

    // area
    const areaRectangle = parseInt(widthRectangleValue * lengthRectangleValue).toFixed(2)

    // adding row in table
    count += 1

    displayArea(rectangle, areaRectangle)

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
    const areaParallelogram = parseFloat(baseParallelogramValue * heightParallelogramValue).toFixed(2)
    // console.log(areaParallelogram)

    // adding row in table
    count += 1

    displayArea(parallelogram, areaParallelogram)

    // blank the field
    document.getElementById('base').value = '';
    document.getElementById('height').value = '';

})


// Rhombus

document.getElementById('btn-rhombus').addEventListener('click', function () {

    const rhombus = document.getElementById('rhombus').innerText
    // width
    const diagonal1Rhombus = document.getElementById('d1').value
    // console.log(baseTriangle)
    const diagonal1RhombusValue = parseInt(diagonal1Rhombus)
    // console.log(baseTriangleValue)

    // length
    const diagonal2Rhombus = document.getElementById('d2').value
    // console.log(heightTriangle)
    const diagonal2RhombusValue = parseInt(diagonal2Rhombus)
    // console.log(typeof heightTriangleValue)

    // area
    const areaRhombus = parseFloat(0.5 * diagonal1RhombusValue * diagonal2RhombusValue).toFixed(2)

    // adding row in table
    count += 1

    displayArea(rhombus, areaRhombus)

    // blank the field
    document.getElementById('d1').value = '';
    document.getElementById('d2').value = '';
})

// Pentagon

document.getElementById('btn-pentagon').addEventListener('click', function () {

    const pentagon = document.getElementById('pentagon').innerText
    // base
    const perimeterPentagon = document.getElementById('perimeter').value
    // console.log(baseTriangle)
    const perimeterPentagonValue = parseInt(perimeterPentagon)
    // console.log(baseTriangleValue)

    // height
    const apothemTriangle = document.getElementById('apothem').value
    // console.log(heightTriangle)
    const apothemTriangleValue = parseInt(apothemTriangle)
    // console.log(typeof heightTriangleValue)

    // area
    const areaPentagon = parseFloat(0.5 * perimeterPentagonValue * apothemTriangleValue).toFixed(2)

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


// display area
function displayArea(name, area) {
    const tableParent = document.getElementById('table-parent')
    const tr = document.createElement("tr");
    tr.innerHTML = `<tr>
        <th>${count}</th>
        <td>${name}</td>
        <td>${area}</td>
    </tr>`;

    tableParent.appendChild(tr);
}

