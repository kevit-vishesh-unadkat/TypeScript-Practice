function getChai(kind:string|number){
    if(typeof kind ==='string'){
        return `Making ${kind} chai...`
    }
    return `chai order : ${kind}`
}


function serveChai(msg?:string){
    if(msg){
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}

function orderChai(size:"small"|"medium"|"large"|number){
    if (size==='small'){
        return `small cutting chai...`
    }
    if (size==='medium'||size==='large'){
        return `make extra chai`
    }
    return  `chai order #${size}`
}


class kulhadChai{
    serve(){
        return `serving kulhad chai`
    }
}

class Cutting{
    serve(){
        return `Serving Cutting Chai`
    }
}

function serve(chai:kulhadChai|Cutting){
    if(chai instanceof kulhadChai){
        return chai.serve();
    } 
}


type ChaiOrder={
    type:string
    suger:number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return (
        typeof obj==="object"&&
        obj!==null&&
        typeof obj.type==="string"&&
        typeof obj.type==="number"
    )
}

function serveOrder(item:ChaiOrder|string){
    if (isChaiOrder(item)){
        return `serving ${item.type} chai with ${item.suger} suger`
    }
    return `serving custom chai ${item}`
}