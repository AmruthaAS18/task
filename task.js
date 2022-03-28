
  let showName =(firstname,lastname,...args)=>{
    let sum=firstname+lastname;
    for(let ele of args){
      sum+=ele;
    }
  }
    console.log(showName('ammu','c'));