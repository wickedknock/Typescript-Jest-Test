import { resolve } from "path"
import stocks from "../../data/stock.json"
import transactions from "../../data/transactions.json"

interface data {
    sku:string,
    qty:number
}



export async function getStock(sku:string):Promise<data>{
    return new Promise<data>((resolve,reject)=>{
        const values:number = transactions.filter(t=>t.sku==sku).reduce((a,b)=>a+b.qty,0)
        if(!values){
            reject(new Error("SKU not found"))
        }
        resolve({sku,qty:values})
    
    });
}


// DevLog: For testing
// (async()=>{
//     const stock:data = await getStock("LV719449/39/39")
//      console.log(stock)
// })();