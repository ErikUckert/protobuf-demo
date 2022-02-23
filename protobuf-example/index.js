const Schema = require('./employees_pb');
const fs = require('fs');

const erik = new Schema.Employee();

erik.setId(99);
erik.setName('Erik');
erik.setSalary(1000);

const jack = new Schema.Employee();

jack.setId(100);
jack.setName('Jack');
jack.setSalary(800);

const rick = new Schema.Employee();

rick.setId(102);
rick.setName('Rick');
rick.setSalary(500);

const employees = new Schema.Employees();

employees.getEmployeesList().push((erik));
employees.getEmployeesList().push((jack));
employees.getEmployeesList().push((rick));

const serializedMsg = employees.serializeBinary();
fs.writeFileSync('serializedMsg.bin', serializedMsg)
