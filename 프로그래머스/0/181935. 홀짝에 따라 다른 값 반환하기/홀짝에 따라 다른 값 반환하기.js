function solution(n) {  
    let result = 0;
    let idx = 1;
    while (idx <= n) {
        if (n%2==0 && idx%2==0) {
            result += idx*idx;
        } else if (n%2==1 && idx%2==1) {
            result += idx;
        }
        idx ++;
    }
    return result;
}