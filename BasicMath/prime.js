//A prime number is only divisible by 1 and itself.

export default function isPrime(n){
  if(n < 2){
    return false
  }
  for(let i = 2; i < n ; i++){
    if(n%i == 0){
      return false
    }
    else return true
  }
}