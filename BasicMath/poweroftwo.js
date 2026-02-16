//Problem: is n a power of two?

export default function isPowerOfTwo(n){
  if(n < 1){
    return false
  }
    while(n > 1){
        if(n % 2 !== 0){
            return false
        }
        n = n / 2
    }
    return true
}