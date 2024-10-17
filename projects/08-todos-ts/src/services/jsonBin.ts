import { JsonBinApi } from "../types/jsonBin"
import { TodoList } from "../types/todoesType"

const PATH = "https://api.jsonbin.io/v3/b/671054f0ad19ca34f8b9cda2" as const 
const XMasterKey = import.meta.env.VITE_JSONBIN_API_MASTER_KEY
const XAccessKey = import.meta.env.VITE_JSONBIN_API_ACCESS_KEY

export async function  CreateBin({Todos}:JsonBinApi): Promise<Boolean>{

    const heraders = {
        'X-Master-Key' : XMasterKey,
        'X-Access-Key' : XAccessKey,
        'Content-Type' : "application/json"
    }

    var res = await fetch(PATH,{
        method : 'PUT',
        headers : heraders,
        body : JSON.stringify(Todos)
    })
    
    return res.ok
} 

export async function ReadBin(): Promise<TodoList>{
    var res = await fetch(PATH,{
        method : 'GET',
        headers : {
            'X-Master-Key' : XMasterKey,
            'X-Access-Key' : XAccessKey
        }
    })
    if (!res.ok) {
        return []
      }

      const { record: todos } = await res.json() as { record: TodoList }
      return todos
}