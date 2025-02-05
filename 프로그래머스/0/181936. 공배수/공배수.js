function solution(number, n, m) {
    let result = 0;
    if (number%n==0 && number%m==0){
        result = 1;
    }
    return result;
}