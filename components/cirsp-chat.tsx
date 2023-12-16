"use client"
import { useEffect } from "react";
import {Crisp} from 'crisp-sdk-web'

export const CrispChat = () =>{
    useEffect(()=>{
        Crisp.configure("5c0eb1ed-d68e-4801-817d-df3b3cc3df42")
    },[])
    return null
}