"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

import { ArrowRight, MessageSquare, Music, ImageIcon, VideoIcon, Code } from "lucide-react";

const tools =[
  {
    label: "Conversation",
    icon:  MessageSquare,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    href: "/conversation"
  },
  {
    label: "MusicGeneration",
    icon:  Music,
    color: "text-green-700",
    bgColor:"bg-green-700/10",
    href: "/music"
  },
  {
    label: "ImageGeneration",
    icon:  ImageIcon,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    href: "/image"
  },
  {
    label: "VideoGeneration",
    icon:  VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video"
  },
  {
    label: "Code Generation",
    icon:  Code,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/code"
  },
]

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl front-bold text-center">
          Explore the Power of AI
        </h2>
        <p className="text-muted-foreground front-light text-sm md:text-lg text-center">
          Chat with the smartest AI - experince the Power of AI
        </p>
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
          {tools.map((tool) => (
            <Card 
             onClick={() => router.push(tool.href)}
             key={tool.href}
             className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
            >
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                  <tool.icon  className={cn("w-8 h-8", tool.color)}
                  />
                </div>
                <div className="font-semibold">
                  {tool.label}
                </div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
