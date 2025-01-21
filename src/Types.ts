type GreetArg=number|string;
function Display(id:GreetArg){
    console.log("The id is "+id);
}
Display(10);
Display("Hello");