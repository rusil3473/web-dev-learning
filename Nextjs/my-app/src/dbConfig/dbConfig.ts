import mongoose from "mongoose"
export const connect=async()=>{
  try{
    await mongoose.connect(process.env.MONGO_URI!);
    const connection=mongoose.connection
    connection.on('connected',()=>{
      console.log('Connected to mongodb')
    })
  }
  catch(err:any){
    console.log(err)
    process.exit();
  }
}