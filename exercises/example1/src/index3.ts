function findUserNameById(users:[string,number][],id:number)
{
    for(let user of users)
    {
        // console.log(user)
        if(user[1]==id)
        {
            return user
        }
    }
        return null
}
let users:[string,number][]=[["Disha",10],["priya",20],["yachna",30],["nandini",40]]
console.log(findUserNameById(users,40))
