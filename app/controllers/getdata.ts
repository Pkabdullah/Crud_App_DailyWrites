"use client"
 export const GetData =  async() =>{
    try {
        const result = await fetch("http://localhost:3000/api/writes", {
            cache: "no-store",
        });
        if (!result.ok) {
            throw new Error("Failed to fetch Daily Writes")
        }
        return result.json();
    } catch (error) {
        console.log("Error Loading Daily Writes", error)
    }
}



// export default async function GetData() {
//     try {
//       const response = await fetch("http://localhost:3000/api/writes", {
//         cache: "no-store",
//       });
//       const writes = await response.json();
//       return writes.data;
//     } catch (error) {
//       console.log("Error Loading Daily Writes",error);
//     }
//   }