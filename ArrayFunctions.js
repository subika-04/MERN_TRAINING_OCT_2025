let arr=[1,2,3,4,5];
//applies functions and returns as array
let doubledarray=arr.map((n)=>2*n);
console.log(arr);
console.log(doubledarray);

let arr1=[1,2,3,4,5];
//odd will be added ,even will not be added,and it returns odd array
let odd=arr1.filter((n)=>{return n%2!=0});
console.log(arr);
console.log(odd);

let arr3=[13,15,20,35,27];
let multiplesof5=arr3.filter((n)=>{return n%5==0;});
console.log(arr3);
console.log(multiplesof5);
//reduce()
//1st parameter is array iterating element
//2nd parameter is sum value stored place while iterating
//the one present after closed set bracket is initial value
let arr4=[1,2,3,4,5,6];
let sumofarray=arr4.reduce((sum,n)=>{
return sum*n;},1);
console.log(sumofarray);

//arr5-stores actual arr value
let arr5=[1,2,3,4,5];
//arr6-stores the array value of arr5,where each element is multiplied by 3
let arr6=arr5.map((n)=>n*3);
//arr7-stores the number which is even
let arr7=arr6.filter((n)=>{return n%2==0});
//sumofarray1-stores sum of all elements
let sumofarray1=arr7.reduce((sum1,n)=>{return sum1+n;},0);
console.log(arr5);
console.log(arr6);
console.log(arr7);
console.log(`Sum:${sumofarray1}`);

/*
let arr6=arr5.map((n)=>n*3)
             .filter((n)=>n%2==0)
             .reduce((sum,n)=>{return sum*n;},0);
console.log(arr6);
*/


//Destructuring-assigning variables to some other variables in one line
let b=[1,2,3,4,5];
const [one,...two]=b;
console.log(two);

let num=[0,...b,6,7];
console.log(num);

const obj1={x:3,y:4};
const obj2={y:5,z:6};
//while merging one object will be added first and then second object will be addec ,so the second object 
const spread={...obj1,...obj2};
console.log(spread);

const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    const success=true;
    if(success){
        resolve("Resolved Successfully");
    }
    else{
        reject('rejected');
    }
    },2000);
});

    console.log("Before Promise Execution");
    promise.then((result)=>console.log(result))
           .catch(err=>console.log(err))
           .finally(()=>{console.log("Promises completed");})
    
    console.log("After promises execution");
    
   //API Fetch
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response)=>{return response.json()})
      .then((data)=>console.log(data))
      .catch((err)=>console.log(err))

    //API Fetch
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response)=>{return response.json()})
      .then((data)=>data.map((user)=>{console.log(user.name);}))
      .catch((err)=>{console.log(err);})

    async function fetchAPI()
    {
        try{
            const response =await fetch(
                "https://jsonplaceholder.typicode.com/users"
            )
            const data=await response.json();
            data.map((user)=>{
                console.log(user.name);
            })
        }
        catch(error)
        {
            console.log(error);
        }
    }
    fetchAPI();
    