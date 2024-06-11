import { Home, Users } from "lucide-react";

export const navigationList = [
    {
        title: "Dashboard",
        label: "",
        href: "dashboard",
        active: "Dashboard",
        icon: <Home size={18} />,
    },
    {
        title: "Employees",
        label: "",
        href: "employee.index",
        active: "Employee",
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
    //             active: "SignIn", //Base on Folder or Filename of Components
    //             icon: <IconHexagonNumber1 size={18} />,
    //         },
    //     ],
    // },
];
