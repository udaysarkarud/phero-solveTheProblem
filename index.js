const persons = [
    { name: 'Biplap', age: 22, temperature: 98 },
    { name: 'sunil', age: 21, temperature: 98 },
    { name: 'Kabir', age: 36, temperature: 99 },
    { name: 'Rahul', age: 37, temperature: 99 },
    { name: 'Paul', age: 42, temperature: 98 },
    { name: 'Kat', age: 41, temperature: 98 },
    { name: 'Nayem', age: 50, temperature: 100 },
    { name: 'Sabnaj', age: 51, temperature: 101 }
];

const vaxTrail =(persons)=>{
    let A = [];
    let B = [];
    let C = [];
    let D = [];
    
    for(let i of persons){
        if (i.age >20 && i.age <30 && i.temperature <100){
            A.push(i)
        }
        else if (i.age >31 && i.age <40 && i.temperature <100){
            B.push(i)
        }
        else if (i.age >41 && i.age <50 && i.temperature <100){
            C.push(i)
        }
        else (i.temperature >100){
            D.push(i)
        }
        
    }
    console.log(A);
}

vaxTrail(persons)