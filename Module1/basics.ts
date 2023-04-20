function add(n1: number, n2: number, showResult: boolean){
    const result = n1 + n2;
    if(showResult){
      return `Result is: ${result}`
    }else{
        return result
    }
}

const num1 = 5;
const num2 = 2.8;
const showResult = true

const summed = add(num1, num2, showResult)