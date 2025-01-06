const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

// Creating individual promises for each color change
const color1 = new Promise((resolve, reject) => {
  if (first) {
    setTimeout(() => {
      first.style.color = "red";
      resolve(); // Resolve after coloring the first element
    }, 1000);
  } else {
    reject("No element found for first");
  }
});

const color2 = new Promise((resolve, reject) => {
  if (second) {
    setTimeout(() => {
      second.style.color = "blue";
      resolve(); // Resolve after coloring the second element
    }, 3000);
  } else {
    reject("No element found for second");
  }
});

const color3 = new Promise((resolve, reject) => {
  if (third) {
    setTimeout(() => {
      third.style.color = "green";
      resolve(); // Resolve after coloring the third element
    }, 2000);
  } else {
    reject("No element found for third");
  }

  
});
async function temp(){
  let abc=await color2.then(()=> color3.then(() => { 
    console.log("Done");
  }))
  return abc
}

// Properly chaining the promises to ensure the sequence:
color1
  .then(() => temp() )
  .catch((error) => {
    console.error(error); // Handle any rejection
  }); 

/* function color(){
  addColor("first",1000,"red")
    .then(()=>addColor("second",3000,"blue")
      .then(()=>addColor("third",2000,"green")))
}

function addColor(id,time,color){
  const ele=document.getElementById(id)
  return new Promise((resolve,reject)=>{
      if(ele){
      setTimeout(()=>{
        ele.style.color=color;
        resolve();
      },time);
    }
    else{
      reject("Nothing");
    }
  });
}

color(); */