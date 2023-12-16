'use clinet'

import { testimonials } from "@/constants/constatns"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export const LandingContent = () =>{
    return (
        <div className="px-10  pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item , index)=>(
                    <Card key={index}  className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <Avatar className="flex items-center">
                                        <AvatarImage>
                                            {item.avatar}
                                        </AvatarImage>
                                        <AvatarFallback className="bg-primary">
                                            {item.avatar.charAt(0)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>

                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                    </div>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}