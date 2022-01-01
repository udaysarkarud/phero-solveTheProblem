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

    let vaccineBooth = {
        A:[], B:[], C:[], D:[]
    }
    
    for(let i of persons){
        if (i.age >=20 && i.age <=30 && i.temperature <100){
            vaccineBooth.A.push(i)
        }
        else if (i.age >=31 && i.age <=40 && i.temperature <100){
            vaccineBooth.B.push(i)
        }
        else if (i.age >=41 && i.age <=50 && i.temperature <100){
            vaccineBooth.C.push(i)
        }
        else if(i.temperature >=100){
            vaccineBooth.D.push(i)
        }
        
    }
    console.log(vaccineBooth);
}

vaxTrail(persons)