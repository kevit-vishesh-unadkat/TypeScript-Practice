// forcefull type assertion 

let response :any = "42";

let numericLength:number=(response as string).length

type Role="admin"|"user"|"superadmin";

function redirectBasedOnRole(role:Role):void{
    if (role==="admin"){
        console.log("redirecting the admin dashboard")
        return 
    }
    if(role==='user'){
        console.log('redirecting to the user dashboard')
        return 
    }
    role;
}

function neverReturn():never{
    while(true){
        
    }
}