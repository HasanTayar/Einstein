import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function absoluteUrl(path:string){
  console.log(path)
  return `${process.env.NEXT_PUBLIC_URL}${path}`
}