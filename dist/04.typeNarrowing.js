"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(kind) {
    if (typeof kind === 'string') {
        return `Making ${kind} chai...`;
    }
    return `chai order : ${kind}`;
}
function serveChai(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}
function orderChai(size) {
    if (size === 'small') {
        return `small cutting chai...`;
    }
    if (size === 'medium' || size === 'large') {
        return `make extra chai`;
    }
    return `chai order #${size}`;
}
class kulhadChai {
    serve() {
        return `serving kulhad chai`;
    }
}
class Cutting {
    serve() {
        return `Serving Cutting Chai`;
    }
}
function serve(chai) {
    if (chai instanceof kulhadChai) {
        return chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.type === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `serving ${item.type} chai with ${item.suger} suger`;
    }
    return `serving custom chai ${item}`;
}
// use case of Narrow types
// 1)multi user na role jyare assign kari tyare
// 2) try catch
//# sourceMappingURL=04.typeNarrowing.js.map