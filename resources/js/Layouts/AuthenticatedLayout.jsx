import {
    MainBody,
    MainHeader,
    MainLayout,
} from "@/Components/Partials/MainLayout";
import Sidebar from "@/Components/Sidebar";
import ThemeSwitch from "@/Components/ThemeSwitch";
import UserNav from "@/Components/UserNav";
import useIsCollapsed from "@/Hooks/useIsCollapsed";

export default function AuthenticatedLayout({ user, children }) {
    const [isCollapsed, setIsCollapsed] = useIsCollapsed();

    return (
        <div className="relative h-full overflow-hidden bg-slate-50 dark:bg-slate-950">
            <Sidebar
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
            />
            <main
                id="content"
                className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${
                    isCollapsed ? "md:ml-14" : "md:ml-64"
                } h-full`}
            >
                {children}
            </main>
        </div>
    );
}
