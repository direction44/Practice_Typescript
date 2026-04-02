function findUserNameById(users:[string,number][],id:number)
{
    for(let [name,userId] of users)
    {
        // console.log(user)
        if(userId==id)
        {
            return name
        }
    }
        return null
}
let AllUsers:[string,number][]=[["Disha",10],["priya",20],["yachna",30],["nandini",40]]
console.log(findUserNameById(AllUsers,40))
