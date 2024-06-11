import { cn } from "@/Lib/Utils";
import { Link, usePage } from "@inertiajs/react";
import { Button } from "./ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "./ui/collapsible";
import { ChevronDown } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { buttonVariants } from "./Custom/button";

export default function Navigation({
    links,
    isCollapsed,
    className,
    closeNav,
}) {
    const renderLink = ({ sub, ...rest }) => {
        const key = `${rest.title}-${rest.href}`;

        if (isCollapsed && sub)
            return (
                <NavLinkIconDropdown
                    {...rest}
                    sub={sub}
                    key={key}
                    closeNav={closeNav}
                />
            );

        if (isCollapsed)
            return <NavLinkIcon {...rest} key={key} closeNav={closeNav} />;

        if (sub)
            return (
                <NavLinkDropdown
                    {...rest}
                    sub={sub}
                    key={key}
                    closeNav={closeNav}
                />
            );

        return <NavLink {...rest} key={key} closeNav={closeNav} />;
    };

    return (
        <div
            data-collapsed={isCollapsed}
            className={cn(
                "group border-b bg-slate-50 dark:bg-slate-950 py-2 transition-[max-height,padding] duration-500 data-[collapsed=true]:py-2 md:border-none",
                className
            )}
        >
            <TooltipProvider delayDuration={0}>
                <nav className="grid gap-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
                    {links.map(renderLink)}
                </nav>
            </TooltipProvider>
        </div>
    );
}

function NavLink({
    title,
    icon,
    label,
    href,
    active,
    closeNav,
    subLink = false,
}) {
    const { component } = usePage();

    return (
        <Link
            href={route(href)}
            onClick={closeNav}
            className={cn(
                buttonVariants({
                    variant: component.startsWith(active)
                        ? "secondary"
                        : "ghost",
                    size: "sm",
                }),
                "h-12 justify-start text-wrap rounded-none px-6",
                subLink && "h-10 w-full border-l border-l-slate-500 px-2"
            )}
            aria-current={component.startsWith(active) ? "page" : undefined}
        >
            <div className="mr-2">{icon}</div>
            {title}
            {label && (
                <div className="ml-2 rounded-lg bg-slate-800 dark:bg-slate-300 px-1 text-[0.625rem] text-slate-300 dark:text-slate-800">
                    {label}
                </div>
            )}
        </Link>
    );
}

function NavLinkDropdown({ title, icon, label, sub, closeNav }) {
    const { component } = usePage();
    // Open collapsible by default
    // if one of child element is active
    const isChildActive = !!sub?.find(
        (s) => route().current() === component.startsWith(s.active)
    );

    return (
        <Collapsible defaultOpen={isChildActive}>
            <CollapsibleTrigger
                className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "group h-12 w-full justify-start rounded-none px-6"
                )}
            >
                <div className="mr-2">{icon}</div>
                {title}
                {label && (
                    <div className="ml-2 rounded-lg bg-slate-800 dark:bg-slate-300 px-1 text-[0.625rem] text-slate-300 dark:text-slate-800">
                        {label}
                    </div>
                )}
                <span
                    className={cn(
                        'ml-auto transition-all group-data-[state="open"]:-rotate-180'
                    )}
                >
                    <ChevronDown size={18} />
                </span>
            </CollapsibleTrigger>
            <CollapsibleContent className="collapsibleDropdown" asChild>
                <ul>
                    {sub?.map((subLink) => (
                        <li key={subLink.title} className="my-1 ml-8">
                            <NavLink {...subLink} subLink closeNav={closeNav} />
                        </li>
                    ))}
                </ul>
            </CollapsibleContent>
        </Collapsible>
    );
}

function NavLinkIcon({ title, icon, label, href, active }) {
    const { component } = usePage();

    return (
        <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
                <Link
                    href={route(href)}
                    className={cn(
                        buttonVariants({
                            variant: component.startsWith(active)
                                ? "secondary"
                                : "ghost",
                            size: "icon",
                        }),
                        "h-12 w-12"
                    )}
                >
                    {icon}
                    <span className="sr-only">{title}</span>
                </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="flex items-center gap-4">
                {title}
                {label && (
                    <span className="ml-auto text-slate-300 dark:text-slate-800">
                        {label}
                    </span>
                )}
            </TooltipContent>
        </Tooltip>
    );
}

function NavLinkIconDropdown({ title, icon, label, sub }) {
    const { component } = usePage();
    // Open collapsible by default
    // if one of child element is active
    const isChildActive = !!sub?.find(
        (s) => route().current() === component.startsWith(s.active)
    );

    return (
        <DropdownMenu>
            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant={isChildActive ? "secondary" : "ghost"}
                            size="icon"
                            className="h-12 w-12"
                        >
                            {icon}
                        </Button>
                    </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent
                    side="right"
                    className="flex items-center gap-4"
                >
                    {title}{" "}
                    {label && (
                        <span className="ml-auto text-slate-300 dark:text-slate-800">
                            {label}
                        </span>
                    )}
                    <ChevronDown
                        size={18}
                        className="-rotate-90 text-slate-300 dark:text-slate-800"
                    />
                </TooltipContent>
            </Tooltip>
            <DropdownMenuContent side="right" align="start" sideOffset={4}>
                <DropdownMenuLabel>
                    {title} {label ? `(${label})` : ""}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {sub?.map(({ title, icon, label, href, active }) => (
                    <DropdownMenuItem key={`${title}-${href}`} asChild>
                        <Link
                            href={route(href)}
                            className={`${
                                component.startsWith(active)
                                    ? "bg-slate-800 dark:bg-slate-300"
                                    : ""
                            }`}
                        >
                            {icon}{" "}
                            <span className="ml-2 max-w-52 text-wrap">
                                {title}
                            </span>
                            {label && (
                                <span className="ml-auto text-xs">{label}</span>
                            )}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
