type Employee1={
    name:string,
    startDate:Date,
    endDate:Date,
}

type Employee2={
    name:string,
    startDate:Date,
    endDate:Date,
    role:string,
}

type Employee3=Employee1 & Employee2;
const teamLeader:Employee3={
    name:'John',
    startDate:new Date(),
    endDate:new Date(),
    role:'Team Leader',
}
