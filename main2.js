console.log('js');
$(readyNow);

let totalYearly = 0;
let salaries = [];
let employees = [];


function readyNow() {
    console.log('JQ');
    $('#submit').on('click', handleClick);
    //$('#submit').on('click', calculateRemainingBudget);
    $('#tableBod').on('click', '.delete', removeSalary);

}

function handleClick() {
    console.log('in handle click');
    let fName = $('#firstName').val();
    let lName = $('#lastName').val();
    let idNumber = $('#ID').val();
    let title = $('#title').val();
    let salary = $('#annualSal').val();

    let newObject = {
        firstName: fName,
        lastName: lName,
        id: idNumber,
        title: title,
        salary: salary
    }
    employees.push(newObject);
    console.log(employees);


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
    <td>${newObject.firstName}</td>
    <td>${newObject.lastName}</td>
    <td class="test">${newObject.id}</td>
    <td>${newObject.title}</td>
    <td>${newObject.salary}</td>
    <td><button class="delete">Delete</button></td> 
    </tr>
    `)
    // ^^ button is created when the page is loaded, so we need a dynamic click listener, line7.
    

}

// function deleteLine() {
//     console.log('in delete line');
//     removeSalary();
    //$(this).closest('tr').remove();
    
    // $('#fName1').remove();
    // $('#lName1').remove();
    // $('#ID1').remove();
    // $('#title1').remove();
    // $('#sal1').remove();
    // $('#delete1').remove();

//}


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
    //totalYearly = 0;
    totalYearly += variable;
    console.log(totalYearly);
    displayBudget();

    

    // this is pretty messy, if extra time, clean up.
    
    
}


function removeSalary() {
    console.log('in remove salary');

    let idNumber = $(this).closest('tr').find('.test').text();
    console.log(idNumber);
    for (let i = 0; i < employees.length; i++) {
        if (idNumber === employees[i].id) {
            console.log(totalYearly); // THIS IS WHERE I LEFT OFF. LOOK INTO .TEST OF SALARY INSTEAD OF ID.
            // totalYearly -= employees[i].salary; // this is why we're getting negative numbers.
            // console.log(totalYearly);
            // displayBudget();
        }
        }
        $(this).closest('tr').remove();
    }

    

    


function displayBudget() {
    let totalMonthly = totalYearly /= 12;
    let el = $('#monthlyBudget');
    el.empty();
    el.append(totalMonthly);

    if (totalMonthly > 20000) {
        document.getElementById("monthly").style.color = "red";
        $('footer').append (alert(`
            WARNING!! WARNING!!
            YOU HAVE EXCEEDED THE $20,000 LIMIT
            LOWER COSTS OR FACE DEATH BY FIRE!`)); 
        
    }
}