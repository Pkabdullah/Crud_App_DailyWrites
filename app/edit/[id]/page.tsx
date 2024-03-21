import Editwrites from "@/app/editWrites";


const getWritesById = async (id: any) => {
  try {
    const result = await fetch(`http://localhost:3000/api/writes/${id}`, {
      cache: "no-store",
    })
    if (!result.ok) {
      throw new Error("Failed to Fetch DailyWrites")
    }
    return result.json();

  } catch (error) {
    console.log(error)
  }

}
const Edit = async ({ params }: any) => {
  const { id } = params;
  const { write } = await getWritesById(id)
  const { heading ,description } = write;
  return (

    <Editwrites  id = {id} description = {description} heading = {heading}/>
  )
}
export default Edit


