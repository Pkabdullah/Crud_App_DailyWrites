"use client"
import { Button } from '@/components/ui/button'
import { Delete, Edit } from 'lucide-react'
import { useRouter } from 'next/navigation'
export default function Remove({ id }: any) {
    const router = useRouter();
    const remove = async () => {
        const confirmed = confirm("Are you Sure");
        if (confirmed) {
            const result =await fetch(`http://localhost:3000/api/writes?id=${id}`, {
                method: "DELETE"
            })
            if(result.ok){
            router.refresh();
        }
    }
    }
    return (
        <Button onClick={remove}>

            <Delete />
            Delete
        </Button>
    )
}