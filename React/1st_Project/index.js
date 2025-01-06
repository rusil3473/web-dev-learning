async function a() {
  return "Hello World!"
}


const url="https://www.course-api.com/react-tours-project"

async function getData(){
  
  const res= await fetch(url);
 const data= await res.json()

  console.log(data)
}
getData()