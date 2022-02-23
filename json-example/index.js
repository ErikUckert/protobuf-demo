const fs = require('fs');
const employees = [];

employees.push({
    'name': 'Erik',
    'salary': 1000,
    'id': 99 
});

employees.push({
    'name': 'Jack',
    'salary': 900,
    'id': 100 
});

fs.writeFileSync('employeedata.json', JSON.stringify(employees))
console.log(JSON.stringify(employees));