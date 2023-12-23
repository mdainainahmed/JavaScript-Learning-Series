// In JavaScript: 
/*
Scope determines the accessibility (visibility) of variables.

JavaScript variables have 3 types of scope:
1. Block scope
2. Function scope
3. Global scope
*/



/* -------------- Block Scope----------- */

{
    /* variables defined in block scope behaves differently */

    // 1. variables defined using 'var' behave as Global variables & can be accessed outside this block
    var blockVar = 5;


    // 2. Special Case: f you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
    undelaredVariable = 12;
    // To Resolve this, ES6 introduced Strict Mode: In "Strict Mode", undeclared variables are not automatically global.


    // 3. variables defined using 'let' or 'const' behave as block variables & can be only be accessed within block
    let blockLet = 10;
    const blockConst = 15;

    // console.log(blockVar, undeclaredVariable, blockLet, blockConst);
}


console.log(blockVar);
console.log(blockLet);
console.log(blockConst);
console.log(undelaredVariable);








/* ------------------------ Function Scope -------------------------- */
/*
Variables defined inside a function are not accessible (visible) from outside the function.
Variables declared with var, let and const are quite similar when declared inside a function.
*/

function myFunc(){
    let x = 12;
    var y = 14;
    const z = 23;
    console.log(x,y,x);
}

console.log(x,y,z);







/* ------------------ Global Scope -------------------------- */
/* 
With JavaScript, the global scope is the JavaScript environment.
In HTML, the global scope is the window object.
*/
// ---------------- Global variables defined with the 'var' keyword or 'undefined variables' belong to the window object:
var globalVar = 20;
undefinedVariable = 23;
// In Strict Mode: undefined variables are not automically global 
console.log(window); 

// Global variables defined with the 'let' or 'const' keyword do not belong to the window object: 
let globalLet = 25;
const globalConst = 30;
console.log(window);









/* ---------- Conclusion ------------------- */

    
    /* 
    ----- Block Scope ------ 
        - Accessibility : 
            - 'var' : Inside Block Scope as well as Outside Block Scope
            - 'let' & 'const' : Only Inside Block Scope
            - 'undefined variables' : Automatically Global but not in Strict Mode
    ----- Fuction Scope ----
        - Accessibility : 
            - 'var', 'let', & 'const' : Only Inside Fuction Scope
    ----- Global Scope -----
        - Accessibility:
            - 'var': Member of Window Object & can be accessed using 'window.  '
            -  'unnamed variable' :  Member of Window Object & can be accessed using 'window.  ' but not in Strict Mode
            - 'let' & 'const' : Not a member of Window Object & can't be accessed using 'window.  '
    */
