
import { Button } from '@/components/ui/button'
import { Delete, Edit } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Remove from './Delete'
import {GetData} from "@/app/controllers/getdata"

export default async function Content() {
    const {writes} = await GetData()
     console.log(writes)
    return (
        <>
        {/* <h1>hello</h1> */}
             {
                writes?.map((t: any) => (
                    <div key={t._id} className=' flex justify-center items-center'>
                        <div className='border-transparent rounded-lg w-[70%] h-auto mt-11 p-4 mr-5 bg-amber-200'>
                            <h2 className='font-sans font-bold text-3xl mb-8'>{t.heading}   </h2>
                            <p>{t.description}</p>

                            <div className='flex justify-end gap-5 mt-6 mr-4 ' >
                                <Link href={"#"}>
                                    <Remove id={t._id} />
                                </Link>

                                <Link href={`/edit/${t._id}`}>
                                    <Button>

                                        <Edit />
                                        Edit</Button></Link>
                            </div>


                        </div>
                    </div>

                ))}
        </> 
    )
}






