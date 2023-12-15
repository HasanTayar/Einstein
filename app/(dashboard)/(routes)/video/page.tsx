"use client";
import axios from "axios";
import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { VideoFormSchema } from "@/constants/shcema";
import { zodResolver } from "@hookform/resolvers/zod";
import {  VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";

const VideoPage = () => {
  const [video, setVideo] = useState<string>();
  const router = useRouter();
  const form = useForm<z.infer<typeof VideoFormSchema>>({
    resolver: zodResolver(VideoFormSchema),
    defaultValues: {
      prompt: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  const onSumbit = async (values: z.infer<typeof VideoFormSchema>) => {
    try {
      setVideo(undefined)
      const response = await axios.post("/api/video",values);
      setVideo(response.data[0])
      form.reset();
    } catch (error) {
      //TODO: Open Pro Modal
      console.log(error);
    } finally {
      router.refresh();
    }
  };
  return (
    <div>
      <Heading
        title="Video Genration"
        description="Turn your prompt into video."
        icon={VideoIcon}
        iconColor="text-orange-700"
        bgColor="bg-orange-700/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSumbit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        type="text"
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Clown fish swimming aroud a coral reef "
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Genrate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {!video && !isLoading && (
            <Empty label="No Video Genrated." />
          )}
          {video && (
            <video controls className="w-full aspect-video mt-8 rounded-lg border bg-black">
              <source src={video} />
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
