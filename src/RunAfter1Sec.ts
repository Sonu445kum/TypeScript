function RunAfter1Sec(fn:()=>void){
    setTimeout(fn,1000);

};
RunAfter1Sec(function (){
    console.log("Hello");
});