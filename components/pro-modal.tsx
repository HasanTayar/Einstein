import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader } from '@/components/ui/dialog'
import { DialogTitle } from '@radix-ui/react-dialog'
import { useProModal } from '@/hooks/use-pro-modal'
import { Badge } from '@/components/ui/badge'
import { tools } from '@/constants/constatns'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Check, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import toast from 'react-hot-toast'

export const ProModal = () => {
    const [loading, setLoading] = useState(false)
    const proModal = useProModal()
    const onSubscribe = async ()=>{
        try {
            setLoading(true)
            const response = axios.get('/api/stripe');
            window.location.href = (await response).data.url;
        } catch (error) {
            toast.error("Something went wrong")
        }finally{
            setLoading(false)
        }
    }
  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className='flex justify-center items-center flex-col gap-y-4 pb-2'>
                    <div className='flex items-center gap-x-2 font-bold py-1'>

                        Upgrade to Einsten
                        <Badge className='uppercase test-sm py-1' variant='premium'>
                            pro
                        </Badge>
                    </div>
                </DialogTitle>
                <DialogDescription className='text-center pt-2 space-y-2 text-zinc-900 font-medium'>
                        {tools.map((tool , index)=>(
                            <Card key={index} 
                            className='p-3 border-black/5 flex items-center justify-between'
                            >
                                <div className='flex items-center gap-x-4'>
                                    <div className={cn('p-2 w-fit rounded-md',tool.bgColor)}>
                                        <tool.icon className={cn('h-6 w-6 ', tool.color)}  />
                                    </div>
                                    <div className='font-semibold text-sm'>
                                        {tool.label}
                                    </div>
                                </div>
                                <Check className='text-primary w-5 h-5'/>
                            </Card>
                        ))}
                </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <Button disabled={loading} onClick={onSubscribe} size='lg' variant='premium' className='w-full'>Upgrade <Zap className='w-4 h-4 ml-2 fill-white'/></Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

 
