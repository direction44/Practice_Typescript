type Student={
    readonly id:number,
    name:string,
    course?:string
}
 let student1:Student 
 let student2:Student 
 let student3:Student 

 student1={id:101,name:"Disha"}
 student2={id:102,name:"isha",course:"TypeScript"}
 student3={id:103,name:"Nisha",course:"JavaScript"}

//  student1.id=102
 console.log(student1)
 console.log(student2)
 console.log(student3)