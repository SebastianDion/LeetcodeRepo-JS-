//Find the result of factiorial n

//Factorial is a result of multiplying a series less than or equal to n


export default function factorial(n){
  let result = 1
  for(let i = 2; i <= n ; i++){
    result = result * i
  }
  return result
}