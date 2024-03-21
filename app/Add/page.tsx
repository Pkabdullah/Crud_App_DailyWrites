"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
const Add = () => {

  const [heading, setheading] = useState("");
  const [description, setdescription] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!heading || !description) {
      alert("Topic and Description are required")
      return;
    }
    try {
      const result = await fetch("http://localhost:3000/api/writes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ heading, description })
      })
      if (result.ok) {
        router.push("/");
        router.refresh();
      }
      else {
        throw new Error("Failed to create a daily writes");
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className=' flex justify-center'>
        <div className='border-transparent rounded-lg w-[70%] h-auto mt-11 p-4 mr-5 bg-amber-200 '>
          <Input placeholder='Topic' onChange={(e) => setheading(e.target.value)} value={heading} className='w-[80%] mb-6 mt-3 ml-16'></Input>
          <Input placeholder="Today's Writes" onChange={(e) => setdescription(e.target.value)} value={description} className='w-[80%] h-36 ml-16'></Input>
          <div className='flex justify-center mt-8'>
            <Button type='submit'>Add to Menu</Button></div>
        </div>
      </div>
    </form>
  )
}

export default Add