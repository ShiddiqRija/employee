import {
    MainBody,
    MainHeader,
    MainLayout,
} from "@/Components/Partials/MainLayout";
import ThemeSwitch from "@/Components/ThemeSwitch";
import UserNav from "@/Components/UserNav";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <MainLayout fixedHeight>
                <MainHeader>
                    <div className="ml-auto flex items-center space-x-4">
                        <ThemeSwitch />
                        <UserNav user={auth.user} />
                    </div>
                </MainHeader>
                <MainBody>
                    <div>
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-slate-300 dark:bg-slate-700 overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-slate-950 dark:text-slate-50">
                                    You're logged in!
                                </div>
                            </div>
                        </div>
                    </div>
                </MainBody>
            </MainLayout>
        </AuthenticatedLayout>
    );
}
