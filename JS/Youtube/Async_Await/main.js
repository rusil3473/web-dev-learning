const data=[
  { name:"Rusil",Prof:"Devloper "},
  {name :"ABC" ,Prof:"Nothing"}              
];



function getData(){

  let output="";
  data.forEach(value=>{
    output+=`<li>${value.name} Is ${value.Prof}</li>`;
  })
  document.body.innerHTML=output;
 /*  setTimeout(()=>{ */
  /* },1000); */
}


 function createData(newData){

  
   
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    data.push(newData);
    let err=false;
    if(!err){
      resolve();
    }
    else{
      reject("ABC");
    }},1000);
  }); 
}


getData();
setTimeout(()=>{
createData({name:"soham",Prof:"Nothing"}).then(getData);},1000);





/*async function start(arr) {
  
  await createData({name:"Rusil",Prof:"Hi"}).then(getData);
   getData();
}
start([]);*/

