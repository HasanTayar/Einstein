import { useProModalStore } from '@/constants/interfaces'
import {create } from 'zustand'

export const useProModal = create<useProModalStore>((set)=>({
    isOpen:false,
    onOpen: ()=>set({isOpen:true}),
    onClose: ()=>set({isOpen:false})

}))