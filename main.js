console.log('js');
$(readyNow);

let totalYearly = 0;
let salaries = [];


function readyNow() {
    console.log('JQ');
    $('#submit').on('click', handleClick);
    //$('#submit').on('click', calculateRemainingBudget);
    $('#tableBod').on('click', '.delete', deleteLine);

}

function handleClick() {
    console.log('in handle click');
    let fName = $('#firstName').val();
    let lName = $('#lastName').val();
    let idNumber = $('#ID').val();
    let title = $('#title').val();
    let salary = $('#annualSal').val();

    // console.log(fName);
    // console.log(lName);
    // console.log(idNumber);
    // console.log(title);
    // console.log(salary);

    calculateRemainingBudget();

    $('#firstName').val('');
    $('#lastName').val('');
    $('#ID').val('');
    $('#title').val('');
    $('#annualSal').val('');

    $('#tableBod').append(`
    <tr>
    <td>${fName}</td>
    <td>${lName}</td>
    <td>${idNumber}</td>
    <td>${title}</td>
    <td>${salary}</td>
    <td><button class="delete">Delete</button></td> 
    </tr>
    `)
    // ^^ button is created when the page is loaded, so we need a dynamic click listener, line7.
    

}

function deleteLine() {
    console.log('in delete line');
    $(this).closest('tr').remove();
    removeSalary();
    // $('#fName1').remove();
    // $('#lName1').remove();
    // $('#ID1').remove();
    // $('#title1').remove();
    // $('#sal1').remove();
    // $('#delete1').remove();

}


function calculateRemainingBudget() {
    console.log('in remaining budget');
    let variable = 0;
    let salary = parseInt($('#annualSal').val());
    //parseInt(salary); why tf didn't this work
    salaries.push(salary);
    //console.log(salary);
    for (let i = 0; i < salaries.length; i++) {
        variable += salaries[i];
        //console.log(variable);
    }    
    totalYearly = 0;
    totalYearly += variable;
    console.log(totalYearly);
    let totalMonthly = totalYearly /= 12;
    let el = $('#monthlyBudget');
    el.empty();
    el.append(totalMonthly);

    // this is pretty messy, if extra time, clean up.
    
    if (totalMonthly > 20000) {
        document.getElementById("monthly").style.color = "red";
        $('footer').append (alert(`
            WARNING!! WARNING!!
            YOU HAVE EXCEEDED THE $20,000 LIMIT
            LOWER COSTS OR FACE DEATH BY FIRE!`)); 
        
    }
    
}

function removeSalary() {
    
}