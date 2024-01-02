// Write your solution in this file!
const employee ={
    name: "Sam",
    streetAddress: "11, Broadway",
}
 function updateEmployeeWithKeyAndValue (originalEmployee,key, value){ 
    const updateEmployee= {...originalEmployee};

    updateEmployee[key]= value;
    return updateEmployee;
 }


 

 const updateEmployee= updateEmployeeWithKeyAndValue(employee,'name','Maina')
 
 console.log('Original Employee:', employee);
 console.log('Updated Employee:', updatedEmployee);

 function destructivelyUpdateEmployeeWithKeyAndValue(originalEmployee, key , value){
    //const destructEmployee = {...originalEmployee};
    
   originalEmployee[key]= value;
    return originalEmployee;
 }

 const destructEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12,Broadway')
 console.log('Original Employee',employee);
 console.log('destruct update Employee', destructEmployee);

 function deleteFromEmployeeByKey(employee, key){
    const{ [key] : deletedKey, ...updateEmployee}= employee;

    return updateEmployee;
 }

 const updatedEmployeeWithoutKey = deleteFromEmployeeByKey(employee, 'streetAddress')
 console.log('Updated Employee without Key:', updatedEmployeeWithoutKey);



 function destructivelyDeleteFromEmployeeByKey(originalEmployee,key){
    delete originalEmployee[key];
    return originalEmployee;

 }

 const employeeWithoutKey = destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress')
 console.log('Destructively Delete Employee: ', employeeWithoutKey);

 