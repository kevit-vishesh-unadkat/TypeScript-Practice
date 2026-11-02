// union and any 
// let subs:number|string=

let apiRequestStatus:'Pending'|'Success'|'error'='Pending'

// apiRequestStatus='done'  ye nahi ho sakta onlt three state is possible
// pending , success , error


const orders=['12','20','28','42']

let currentOrder:string|undefined;
// datatype ni parvah nahi hai 
// string dalo , number dalo , boolean dalo koi farak j nathi padto

for(let order of orders){
    if(order==='28'){
        currentOrder=order
        break
    }
}

// currentOrder=42  this is the problem 

console.log(currentOrder)

// unknown is relatively safe then any
