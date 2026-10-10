/* Logical Operator */
/* AND Operator */

let age = 18;
let feepaid = true;

let carEenter = age >= 18 && feepaid;
console.log(carEenter);

let agee = 24;
let feeepaid = false;
let canEenter = age >= 26 && feepaid;
console.log(canEenter);

/* Logical Operator */
/* OR Operator */

let emailCorrect = true;
let phoneNumber = false;
let canLogin = emailCorrect || phoneNumber;
console.log(canLogin);

/* Logical NOT(!)*/

let isBlocked = true;
let canAccess = !isBlocked;
console.log(canAccess);

/* Combine Logical Operator */

let isLoggedin = true;
let isPremium = false;
let hasCoupon = true;

let specialDiscount = isLoggedin && (isPremium || hasCoupon);
console.log(specialDiscount);
