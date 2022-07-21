console.log('js');
$(readyNow);

function readyNow() {
    console.log('JQ');
    $('#submit').on('click', handleClick)
}

function handleClick() {
    console.log('in handle click');
    let fName = $('#firstName').val();
    let lName = $('#lastName').val();
    let idNumber = $('#ID').val();
    let title = $('#title').val();
    let salary = $('#annualSal').val();

    console.log(fName);
    console.log(lName);
    console.log(idNumber);
    console.log(title);
    console.log(salary);

    $('#firstName').val('');
    $('#lastName').val('');
    $('#ID').val('');
    $('#title').val('');
    $('#annualSal').val('');

    $('#tableBod').append(`
    <tr>
    <td id="fName1">` + fName + `</td>
    <td id="lName1">` + lName + `</td>
    <td id="ID1">` + idNumber + `</td>
    <td id="title1">` + title + `</td>
    <td id="sal1">` + salary + `</td>
    <td><button id="delete1">Delete</button></td>
    </tr>
    `)

    $('#delete1').on('click', deleteLine)

}

function deleteLine() {
    console.log('in delete line');
    $('#fName1').remove();
    $('#lName1').remove();
    $('#ID1').remove();
    $('#title1').remove();
    $('#sal1').remove();
    $('#delete1').remove();

}