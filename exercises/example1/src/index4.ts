function findUserNameById(users:[string,number][],id:number)
{
    let user=users.find(([name,ID])=> ID==id )
   return user?user:null
}
let AllUsers:[string,number][]=[["Disha",10],["priya",20],["yachna",30],["nandini",40]]
console.log(findUserNameById(AllUsers,50))
