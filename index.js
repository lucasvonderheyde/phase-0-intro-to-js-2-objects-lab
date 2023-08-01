// Write your solution in this file!
const employee = {
    name: "Lucas",
    streetAddress: "11 and Broadway"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployeeObj = { ...employee};
    
    newEmployeeObj[key] = value;

    return newEmployeeObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    console.log(employee)
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const anotherNewEmployee = {...employee};
    
    delete anotherNewEmployee[key];

    return anotherNewEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
   delete employee[key]
   return employee
}