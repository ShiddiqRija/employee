import { Home, Users } from "lucide-react";

export const navigationList = [
    {
        title: "Dashboard",
        label: "",
        href: "dashboard",
        active: "dashboard",
        icon: <Home size={18} />,
    },
    {
        title: "Employees",
        label: "",
        href: "employee.index",
        active: "employee.*",
        icon: <Users size={18} />,
    },
    // Example with sub
    // {
    //     title: "Authentication",
    //     label: "",
    //     href: "",
    //     icon: <IconUserShield size={18} />,
    //     sub: [
    //         {
    //             title: "Sign In (email + password)",
    //             label: "",
    //             href: "/sign-in",
    //             icon: <IconHexagonNumber1 size={18} />,
    //         },
    //     ],
    // },
];
