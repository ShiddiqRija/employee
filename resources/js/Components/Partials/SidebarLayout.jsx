import { cn } from "@/Lib/Utils";
import { forwardRef } from "react";

const SidebarLayout = forwardRef(
    (
        {
            className,
            fadedBelow = false,
            fixedHeight = false,
            children,
            ...props
        },
        ref
    ) => (
        <div
            ref={ref}
            className={cn(
                "relative flex h-full w-full flex-col",
                fadedBelow &&
                    "after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:hidden after:h-32 after:w-full after:bg-slate-100 dark:after:bg-slate-950 after:md:block",
                fixedHeight && "md:h-svh",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
);

const SidebarHeader = forwardRef(({ className, children, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "flex h-[var(--header-height)] flex-none items-center gap-4 bg-slate-50 dark:bg-slate-950 p-4 md:px-8",
            className
        )}
        {...props}
    >
        {children}
    </div>
));

const SidebarBody = forwardRef(
    ({ className, fixedHeight, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "flex-1 overflow-hidden px-4 py-6 md:px-8",
                fixedHeight && "h-[calc(100%-var(--header-height))]",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
);

export { SidebarLayout, SidebarHeader, SidebarBody };
