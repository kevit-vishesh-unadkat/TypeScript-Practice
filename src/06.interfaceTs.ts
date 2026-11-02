type ChaiOrder={
    type:string;
    suger:number;
    strong:boolean
};


function makeChai(order:ChaiOrder){
    console.log(order);
}

function serveChai(order:ChaiOrder){
    console.log(order);
}

interface TeaRecipe{
    water:number;
    milk:number
}

class MasalaChai implements TeaRecipe{
    water=100;
    milk=50;
}

//customize type ma ny karva dy 
//basic type ma karva dese pan customize type ma ny karva dy

// type CupSize="small"|"Large"

// class Chai implements CupSize{
    
// }


interface CupSize{
    size:"small"|"Large"
}

class Chai implements CupSize{
    size:"small"|"large"="large"
}

// type response ={ok:true}|{ok:false}

// class myRes implements Response{
//     ok:boolean=true;
// }


// in this file explore about interface and intersection

