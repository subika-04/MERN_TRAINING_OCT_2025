let  a=10;
let b=a;
a=20;
console.log(b);

//value-(primitive-oru ethulaa update anaa ella idthalayum update agathu)

let object1={age:33};
let object2=object1;
object1.age=22;
console.log(object2);

//reference-(non-primitive-oru ethulaa update anaa ella idthalayum update agum)
function rep()
{
let i;
for(i=1;i<=10;i++)
{
  console.log(i);
}
}

const print=()=>
{
    let i;
for(i=1;i<=10;i++)
{
  console.log(i);
} 
}
rep();
rep();
rep();

print();

