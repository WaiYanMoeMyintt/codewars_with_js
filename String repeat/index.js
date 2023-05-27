function repeatStr (n, s) {
    const arr = [];
    if(typeof n === "number"){
        for(let i = 0; i < n ; i++){
            arr.unshift(s);            
        }
    }

    return arr.join('');
    
}
