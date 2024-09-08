import Link from "next/link";
import { ReactNode } from "react";

// Define props for CustomLink component
interface CustomLinkProps {
  href: string;
  children: ReactNode;
}

export const CustomLink = ({ href, children }: CustomLinkProps) => {
  return (
    <Link
    
      href={href}
      className="text-sm font-medium hover:underline underline-offset-4 text-gray-400 dark:text-gray-400 hover:text-gray-200 dark:hover:text-gray-300 transition-all duration-200"
      prefetch={false}
    >
      {children}
    </Link>
  );
};
