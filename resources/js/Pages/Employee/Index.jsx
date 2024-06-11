import {
    MainBody,
    MainHeader,
    MainLayout,
} from "@/Components/Partials/MainLayout";
import ThemeSwitch from "@/Components/ThemeSwitch";
import UserNav from "@/Components/UserNav";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import EmployeeList from "./Partials/EmployeeList";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/Custom/button";
import { Plus } from "lucide-react";

export default function Index({ auth, employees }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Employee" />

            <MainLayout>
                <MainHeader>
                    <div className="ml-auto flex items-center space-x-4">
                        <ThemeSwitch />
                        <UserNav user={auth.user} />
                    </div>
                </MainHeader>
                <MainBody>
                    <div>
                        <div className="max-w-7xl mx-auto ">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Employees</CardTitle>
                                </CardHeader>
                                <div className="flex justify-between px-6">
                                    <Link href={route("employee.create")}>
                                        <Button>
                                            <Plus size={18} className="mr-2" />{" "}
                                            Add Employee
                                        </Button>
                                    </Link>

                                    <Input
                                        className="w-64"
                                        placeholder="Search..."
                                    />
                                </div>
                                <CardContent>
                                    <EmployeeList data={employees} />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </MainBody>
            </MainLayout>
        </AuthenticatedLayout>
    );
}
