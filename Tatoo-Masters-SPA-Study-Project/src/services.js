import { get, host } from "./requester.js";



async function getAll(){
  try{
  const result= await get(`${host}/data/tattoos?sortBy=_createdOn%20desc`)
   return result

  }catch(err){
    alert(err.message)
  }
}

async function getById(id){
  try{
    const result= await get(`${host}/data/tattoos/${id}`)
    return result
  }catch(err){
    alert(err.message)
  }
}
const service={getAll, getById }

export default service
