function solution(num_list) {
    let arr = num_list.sort((a,b) => {
        if (a > b) return 1;
        if (a==b) return 0;
        if (a < b) return -1;
    });
    
    return arr.slice(5,arr.length);
}