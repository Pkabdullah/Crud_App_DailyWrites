import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'


const NavBar = () => {
    return (
        <div>
            <header className='flex justify-center mt-14 '>

                <div className='border-2 border-yellow-300 w-[80%] h-32 bg-blue-500 p-6 rounded-lg flex justify-between text-white shadow-2xl '>
                    <Link href={"/"}>
                        <h1 className='font-sans font-semibold text-[30px]  '>DailyWrites</h1>
                    </Link>
                    <Link href={"Add"}>
                        <Button className='w-28'>Add</Button>
                    </Link>
                </div>

            </header>

                  </div>
    )
}

export default NavBar