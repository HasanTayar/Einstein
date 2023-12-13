'use client';
import Heading from '@/components/heading'
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { formSchema } from '@/constants/shcema';
import { zodResolver } from '@hookform/resolvers/zod';
import { MessageSquare } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
const ConversationPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      prompt:''
      
    }
  });
  const isLoading = form.formState.isSubmitting;
  const onSumbit = async (values:z.infer<typeof formSchema>)=>{
    console.log(values)
  }
  return (
    <div>
      <Heading title='Conversation' description='Our most adavnced conversation model.' icon={MessageSquare} iconColor='text-violet-500' bgColor='bg-violet-500/10'/>
      <div className='px-4 lg:px-4'>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSumbit)} className='rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'>
                <FormField name='prompt' render={({field})=>(
                  <FormItem className='col-span-12 lg:col-span-10'>
                    <FormControl className='m-0 p-0'>
                      <Input type='text'  className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent' disabled={isLoading} placeholder='How do I calculate the radius of circle?' {...field}/>
                    </FormControl>
                  </FormItem>
                )}>
                </FormField>
                <Button className='col-span-12 lg:col-span-2 w-full' disabled={isLoading}>Genrate</Button>
            </form>
          </Form>
        </div>
        <div className='space-y-4 mt-4'>
          Message Content
        </div>
      </div>
    </div>
  )
}

export default ConversationPage