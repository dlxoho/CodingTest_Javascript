function solution(a, b) {
    let string = Number(String(a) + String(b));
    let integer = 2 * a * b;
    
    let answer = string;
    if (string < integer) {
        answer = integer;
    } 
    
    return answer;
}