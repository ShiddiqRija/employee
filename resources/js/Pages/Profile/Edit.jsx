import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import { MainBody, MainHeader, MainLayout } from "@/Components/Partials/MainLayout";
import ThemeSwitch from "@/Components/ThemeSwitch";
import UserNav from "@/Components/UserNav";

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Profile" />

            <MainLayout>
                <MainHeader>
                    <div className="ml-auto flex items-center space-x-4">
                        <ThemeSwitch />
                        <UserNav user={auth.user} />
                    </div>
                </MainHeader>
                <MainBody>
                    <div>
                        <div className="max-w-2xl mx-auto sm:px-6 lg:px-8 space-y-6">
                            <div className="p-4 sm:p-8 bg-slate-300 dark:bg-slate-700 shadow sm:rounded-lg">
                                <UpdateProfileInformationForm
                                    mustVerifyEmail={mustVerifyEmail}
                                    status={status}
                                    className="max-w-xl"
                                />
                            </div>

                            <div className="p-4 sm:p-8 bg-slate-300 dark:bg-slate-700 shadow sm:rounded-lg">
                                <UpdatePasswordForm className="max-w-xl" />
                            </div>

                            <div className="p-4 sm:p-8 bg-slate-300 dark:bg-slate-700 shadow sm:rounded-lg">
                                <DeleteUserForm className="max-w-xl" />
                            </div>
                        </div>
                    </div>
                </MainBody>
            </MainLayout>
        </AuthenticatedLayout>
    );
}
