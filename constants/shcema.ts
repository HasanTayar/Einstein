import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, { message: "Prompt is Required!." }),
});
export const ImageFormSchema = z.object({
  prompt: z.string().min(1, { message: "Image Prompt is Required!." }),
  amount: z.string().min(1),
  resolution: z.string().min(1),
});
export const MusicFormSchema = z.object({
  prompt: z.string().min(1, { message: "Music Prompt is Required!." }),
});
export const VideoFormSchema = z.object({
  prompt: z.string().min(1, { message: "Viedo Prompt is Required!." }),
});
