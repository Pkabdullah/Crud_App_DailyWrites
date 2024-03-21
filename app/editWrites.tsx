"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const Editwrites = ({ id, heading, description }: any) => {

    const [newheading, setnewheading] = useState(heading);
    const [newdescription, setnewdescription] = useState(description);

    const router = useRouter();
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const result = await fetch(`http://localhost:3000/api/writes/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ newheading, newdescription })
            })
            if (!result.ok) {
                throw new Error('Failed to Update DailyWrites')
            }
            router.push("/")
            router.refresh()
        } catch (error) {
            console.log(error)

        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className=' flex justify-center'>
                <div className='border-transparent rounded-lg w-[70%] h-auto mt-11 p-4 mr-5 bg-amber-200 '>
                    <Input placeholder=' Update Topic' onChange={(e) => setnewheading(e.target.value)} value={newheading} className='w-[80%] mb-6 mt-3 ml-16'></Input>
                    <Input placeholder=" Update Today's Writes" onChange={(e) => setnewdescription(e.target.value)} value={newdescription} className='w-[80%] h-36 ml-16'></Input>
                    <div className='flex justify-center mt-8'>
                        <Button> Update </Button>
                        </div>
                </div>
            </div>
        </form>
    )
}

export default Editwrites;