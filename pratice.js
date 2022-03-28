// function camelize(str){
//     let arr= str.split("-");
//     return arr.map(function (words){
//         return words.charAt(0).toUpperCase() + words.substring(1);
//     }).join("");
//     }


// console.log(camelize("background-color"))  //backgroundColor


//  let arrObj = [
//     { name: "Shantanu", age: 27 },
//     { name: "Vignesh", age: 24 },
//     { name: "Priya", age: 24 },
//     { name: "Goutham", age: 26 },
//   ]; // ['Shantanu','Vignesh','Priya', 'Goutham']

// //   arrObj.forEach(element => console.log(element.name));
// //   arrObj.name=forEach(arrObj)

// let arr=arrObj.map((item)=> {
//     return item.name
// })
// console.log(arr)

// myTimeout = setTimeout(5,5000);
// console.log(myTimeout)

// let printnumber=(from, to)=>
// {
//   let stop = setInterval(()=> {
//     if(from<=to){
//       console.log(from);
//       from++;
//     }
//     else{
//       clearInterval(stop);
//     }
//     }, [1000]);
//   }
//   printnumber(1,5);


  // function Printnumber(from, to){
  //   for(let i=from;i<=to;i++){
  //     setTimeout(() => {
  //       console.log(i);
  //     },i *1000);
  //   }
  // }
  // Printnumber(5,10);

  // function Printnumber(from, to){
  //   for(let i=from;i<=to;i++){
  //     setTimeout(() => {
  //       console.log(i);
  //     },[1000]);
  //   }
  // }
  // Printnumber(5,10);

  // function printNumber(i) {
  //   setTimeout(() => {
  //     console.log(i);
  //   }, i * 1000);
  // }
  // for (var i = 1; i <= 5; i++) 
  // printNumber(i);

  // let i=0;
  // setTimeout(() => alert(i), 1000);

  // for(let j=0; j<100;j++){
  //   i++;
  // }

  // let arr =[5,2,1,-10,8];
  // arr.sort();
  // console.log(arr);

  let showName =(firstname,lastname,...args)=>{
    let sum=firstname+lastname;
    for(let ele of args){
      sum+=ele;
    }
  }
    console.log(showName('ammu','c'));