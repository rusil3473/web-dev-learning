export default async function PrfilePage({params}:any){
  const {id}=await params
  return(
    <><h1 className="text-white">Profle for id {id}</h1></>
  )
}