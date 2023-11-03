 import { getStock } from "../../modules/stocks/stock";

 interface data {
   sku:string,
   qty:number
}



describe("Get SKU", () => {
   describe("If SKU Found", () => {
     it("Getting SKU Success", async () => {
       await expect(getStock("KED089097/68/09")).resolves.toMatchObject<data>({
         sku: expect.any(String),
         qty: expect.any(Number)
       });
     });
   });
 
   describe("If SKU Not Found", () => {
     it("Getting SKU Error", async () => {
       await expect(getStock("zzzzzz")).rejects.toThrow('SKU not found');
     });
   });
 });
 