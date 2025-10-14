const mul=(a,b)=>{
    return a*b;
}
const square=(n)=>{
    return mul(n,n);
}
const print=(n)=>{
    let s=square(n);
    console.log(s);
}
print(4);

