// import connectMongodb from "@/libs/mongodb";    
// import { NextResponse } from "next/server";
// import Write from "@/models/Write"


// export async function POST(request) {
//     const { heading, description } = await request.json();
//     await connectMongodb();
//     await Write.create({ heading, description });
//     return NextResponse.json({ message: "Daily Writes Added" }, { status: 201 })
// }

// export async function GET() {

//     await connectMongodb();
//     const writes = await Write.find()
//     return NextResponse.json({ writes });
// }

// export async function DELETE (request) {
// const id  = request.nextUrl.searchParams.get ('id')
// await connectMongodb();
// await Write.findByIdAndDelete(id);

// return NextResponse.json({message:"Daily Write Deleted :("}, {status:200})
// }



import connectMongoDB from "@/libs/mongodb";
import Write from "@/models/write";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { heading, description } = await request.json();
  await connectMongoDB();
  await Write.create({ heading, description });
  return NextResponse.json({ message: "heading Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const writes = await Write.find();
  return NextResponse.json({ writes });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Write.findByIdAndDelete(id);
  return NextResponse.json({ message: "heading and description deleted" }, { status: 200 });
}