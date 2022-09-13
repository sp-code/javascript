
var student = {

    firstName:'peter',
    lastName:'smith',
    marks: [25,29,27]
}

//to add new property

student.gender = "male"

console.log(student)

//to delete any property

delete student.gender

console.log(student)

//Interating and printing object values

for(let key in student)
{
    console.log(student[key])
}

//this logic

let employee ={

    firstName : "david",
    lastName : "smith",

    fullname : function()
    {
        console.log(this.firstName+this.lastName)
    }
}

employee.fullname()