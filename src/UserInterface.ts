// Interface
interface User{
    firstName:string;
    lastName:string;
    age:number;
}
function isLegalAge(user:User){
    if(user.age>=18){
        return true;
    }else{
        return false;
    }
}
isLegalAge({
    firstName:"Sonu",
    lastName:"Kumar",
    age:20
})

function greeting(user:User){
    console.log(`Hello ${user.firstName}`);
}
greeting({
    firstName:"Monu",
    lastName:"Kumar",
    age:20
})