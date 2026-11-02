"use strict";
// forcefull type assertion 
Object.defineProperty(exports, "__esModule", { value: true });
let response = "42";
let numericLength = response.length;
function redirectBasedOnRole(role) {
    if (role === "admin") {
        console.log("redirecting the admin dashboard");
        return;
    }
    if (role === 'user') {
        console.log('redirecting to the user dashboard');
        return;
    }
    role;
}
function neverReturn() {
    while (true) {
    }
}
//# sourceMappingURL=05.moreTyoes.js.map