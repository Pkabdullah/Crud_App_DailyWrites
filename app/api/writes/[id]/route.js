
import connectMongodb from "@/libs/mongodb";
import Write from "@/models/write"
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newheading: heading, newdescription: description } =  await request.json();
    await connectMongodb();
    await Write.findByIdAndUpdate(id,{heading , description});
    return NextResponse.json({message:"Daily Writes Updated"} , {status :200});
}
export async function GET (request, {params}) {
    const{id} = params ;
    await connectMongodb();
    const write = await Write.findOne({_id:id});
    return NextResponse.json ({write} , {status :200 });
    


} 