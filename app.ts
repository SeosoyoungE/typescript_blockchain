//call signatures
type Last={
  <T>(arr:T[]):void
  }

type Prepend=<T>(arr:T[],item:T)=>T[]

type Mix=<T,V>(arr1:T[],arr2:V[])=>(T|V)[]

type Count=<T>(arr:T[])=>number

type FindIndex=<T>(arr:T[],item:T)=>number|null

type Slice=<T>(arr:T[],startIndex:number,endIndex?:number)=>T[]

//arr
const arr1=[1,2,3,4,5,10]
const arr2=["a","b","c"]


//function
const last:Last=(arr)=>arr[arr.length-1]

const prepend:Prepend=(arr,item)=>{
  const newArr=[];
  newArr.push(item);
  for(var i=0;i<arr.length;i++){
      newArr.push(arr[i]);
  }
  
  return newArr;
  }

const mix:Mix=(arr1,arr2)=>{
  const newArr:any[]=[];

  arr1.forEach((i)=>{
      newArr.push(i);
  })
  arr2.forEach((i)=>{
      newArr.push(i)
  })

  return newArr;
}

const count:Count=(arr)=>arr.length

const findIndex:FindIndex=(arr,item)=>{
  for(var i=0;i<arr.length;i++){
      if(arr[i]===item){
          return i;
      }
  }
  return null;
}

const slice:Slice=(arr,startIndex,endIndex?)=>{
  const newArr:any[]=[];
  if(endIndex){
      for(var i=startIndex;i<endIndex;i++){
          newArr.push(arr[i]);
      }
  }else{
      for(var i=startIndex;i<arr.length;i++){
          newArr.push(arr[i]);
      }
  }
  return newArr;
}

//test
//console.log(last(arr1));
//console.log(prepend(arr1,100));
//console.log(mix(arr1,arr2));
//console.log(count(arr1));
//console.log(findIndex(arr1,7));
//console.log(slice(arr1,3,5));