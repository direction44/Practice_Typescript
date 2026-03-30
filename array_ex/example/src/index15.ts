let numbers=[10,20,35,40,15];
let evenNumber=numbers.filter((element:number) => { 
    return element%2===0
});
console.log(evenNumber)