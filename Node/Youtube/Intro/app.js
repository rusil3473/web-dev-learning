/*  const names=require("./1")
const fun=require("./2")
fun.a(names.b)
fun.a(names.c)

const os =require('os')
const path = require('path')
const a=require("fs")
a.WriteFileSync("./name.txt","How to write File")
a.writeFileSync("./name.txt","How to write File")
console.log(a.readFileSync("./name.txt","utf-8")) 

 const http=require("http");

const server=http.createServer((req,res)=>{
  console.log(req)
  res.end(`<h1>Hello Node</h1>`)
});

server.listen(4000) 

 const _=require("lodash");
const it=[1,[2,3,4],5]
const newIt=_.flatMapDeep(it)
console.log(newIt)
console.log("Hello") 

const http=require('http');

const server=http.createServer((req,res)=>{
  if(req.url==='/'){
    res.end("Home Page")
    }
    if(req.url==="/about"){
      res.end("<h1>Our Histiry looks like this in grogh</h1> ")
      }
      else{
        res.end("NO such Page found")
    }
    
    });
    server.listen(5000,()=>{
      console.log("Listing ")
      });
      
      
      const fs = require('fs').promises;
      async function File() {
    const a= await fs.writeFile("./hello.txt","W",()=>{
      console.log("done")
    });
    console.log(a)
  }
File()
console.log("Hellllllll")

 */

/* console.log("\n")

const events = require('events');

const newEm=new events();

newEm.on("res",()=>{
  console.log(`data recived`)
})
newEm.emit("res") */
/* const fs = require('fs');
const a=new Promise ((resolve,reject)=>{
  fs.writeFile("./hi.txt","whdlifgbkdfb",(err,res)=>{
    if(!err){
      resolve(res)
    }
    reject(err);
  });
})

a.then((data)=>{
  console.log("Done")
})

 */




console.log("\n")