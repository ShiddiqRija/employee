import {
    MainBody,
    MainHeader,
    MainLayout,
} from "@/Components/Partials/MainLayout";
import ThemeSwitch from "@/Components/ThemeSwitch";
import UserNav from "@/Components/UserNav";
import { Card, CardContent } from "@/Components/ui/card";
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
                        <div className="max-w-7xl mx-auto">
                            <Card>
                                <CardContent className="pt-6">You're logged in!</CardContent>
                            </Card>
                        </div>
                    </div>
                </MainBody>
            </MainLayout>
        </AuthenticatedLayout>
    );
}
