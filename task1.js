





let arr =[5,2,1,-10,8];
  arr.sort();
  console.log(arr);

  //task 1
let showname =(fn,ln, ...args)=>{
    let name = fn+" "+ln+"";
    for(let title of args){
        name+=title+"";
   }
    return name;

}
  console.log(showname('ammu','a','s'));

  //task2 method1

  const array1 = [1, 2,3];
  const array2 = [4,5,6];
  const array3 = array1.concat(array2);
  
  console.log(array3);

  //task2 method2

  const arr1 = [1, 2,3];
  const arr2 = [4,5,6];
  const arr3=[...arr1, ...arr2]
  console.log([...new Set(arr3)])

  //task 3

//   console.log(window);
//   document.html
//   document.body
//   document.body.childNodes
//   for(let i=0;i<document.body.childNodes.item;i++)
//   {
//     document.body.childNote[i]
//   }

// console.log(document.body.childNodes)

  
// const matches = document.querySelectorAll("div.note, div.alert");
// console.log(matches)

const select = document.querySelector('.select');
const inner = select.querySelectorAll('.outer .inner');
inner.length;
console.log(inner)