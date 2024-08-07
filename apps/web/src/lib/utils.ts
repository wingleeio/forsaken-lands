import { Scene } from "@forsaken/api";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const isScene = <T extends Scene["type"]>(
    data: any,
    scene: T,
): data is Scene & {
    type: typeof scene;
} => {
    return data && data.type === scene;
};
