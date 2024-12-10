import {Lightning}  from '@lightningjs/sdk'

//this class is not used anywhere in the code, but still shows in the generated bundle
export class Add extends Lightning.Component{
    sum(a, b) {
        return a + b;
    }
}

//this class is not used any where in the code and is not shown in the generated bundle
class Multiply {
    multipl(a, b) {
        return a * b
    }
}

//this class is not used any where and this is not included in the bundle
export class MathOper extends Multiply {
    div(a, b) {
        return a/b
    }
}



export function subtract(a, b) {
    return a - b;
}