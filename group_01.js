// Run code here in the context of Chapter 0
var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

for (var i = 0; i < employees.length; i++){
 console.log(function1(employees[i]));
}

function function1(x) {
 var empArray = [];
  console.log(calculateBonus(x));
 var bonus = calculateBonus(x) / 100;
  console.log(bonus);
 var income = parseInt(x[2]);
 empArray.push(x[0]);
 empArray.push(bonus);
 empArray.push(income + (income * bonus));
 empArray.push(Math.round(income * bonus));
 return empArray;
}

var sti = 0;
function calculateBonus(array){
  if (array[3] <= 2) {
   sti = 0 ;
  };
  if(array[3] === 3){
     sti += 4;
  };
  if(array[3] === 4){
       sti += 6;
  };
  if(array[3] === 5){
         sti += 10;
  };

  if(array[1].length === 4){
   sti += 5;
  };

  if(parseInt(array[2]) > 65000) {
   sti -= 1;
  };
  if(sti > 13) {
   sti = 13;
 };
 };
