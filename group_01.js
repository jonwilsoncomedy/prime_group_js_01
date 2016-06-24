var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
​
var employees = [atticus, jem, boo, scout];
function employeeUpdate(x) {
 var empArray = [];
 var bonus = calculateBonus(x) / 100;
 var income = parseInt(x[2]);
 empArray.push(x[0]);
 empArray.push(bonus * 100);
 empArray.push(income + (income * bonus));
 empArray.push(Math.round(income * bonus));
 return empArray;
}
​
function calculateBonus(array){
  var bonus = 0;
  if (array[3] <= 2) {
    bonus = 0;
  }
  if(array[3] === 3){
      bonus += 4;
  }
  if(array[3] === 4){
      bonus += 6;
  }
  if(array[3] === 5){
      bonus += 10;
  };
​
  if(array[1].length === 4){
    bonus += 5;
  };
  if(parseInt(array[2]) > 65000) {
    bonus -= 1;
  };
  if(bonus > 13) {
    bonus = 13;
  };
  return bonus;
};
for (var i = 0; i < employees.length; i++){
 console.log(employeeUpdate(employees[i]));
}
