import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeadingProps {
    tittle: string;
    description: string;
    icon: any;    //any
    iconColor?: string;
    bgColor?: string;
}

export const Heading = ({ 
    tittle,
    description,
    icon: Icon,
    iconColor,
    bgColor,
}: HeadingProps) => {
    return (
        <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
            <div className={cn("p-2 w-fit rounded-md", bgColor)}>
                <Icon className={cn("w-10 h-10",iconColor)}/>
            </div>
            <div>
                <h2 className="text-3xl font-bold">
                    {tittle}
                </h2>
                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            </div>
        </div>
    );
};