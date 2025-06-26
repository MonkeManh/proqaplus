import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPriorityColor(priority: string): string {
  switch (priority) {
    case "O":
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    case "A":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "B":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    case "C":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    case "D":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
    case "E":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
  }
}

export function getPriorityLevel(code: string): number {
  const priority = code.match(/[A-E]/)?.[0] || "";
  switch (priority) {
    case "E":
      return 5;
    case "D":
      return 4;
    case "C":
      return 3;
    case "B":
      return 2;
    case "A":
      return 1;
    case "O":
      return 0;
    default:
      return 0;
  }
};