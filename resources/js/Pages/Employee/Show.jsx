import { Button, buttonVariants } from "@/Components/Custom/button";
import {
    MainBody,
    MainHeader,
    MainLayout,
} from "@/Components/Partials/MainLayout";
import ThemeSwitch from "@/Components/ThemeSwitch";
import UserNav from "@/Components/UserNav";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Separator } from "@/Components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { cn } from "@/Lib/Utils";
import { Head, Link } from "@inertiajs/react";
import { format } from "date-fns";
import { FilePenLine, Trash2 } from "lucide-react";

export default function Show({ auth, employee }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Employee Show" />

            <MainLayout>
                <MainHeader>
                    <div className="ml-auto flex items-center space-x-4">
                        <ThemeSwitch />
                        <UserNav user={auth.user} />
                    </div>
                </MainHeader>
                <MainBody>
                    <div>
                        <div className="max-w-7xl mx-auto mt-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex flex-col lg:flex-row lg:justify-between items-center">
                                        Employee data -{" "}
                                        {employee.data.first_name} ({" "}
                                        {employee.data.employee_number} )
                                        <div className="flex justify-end mt-6 lg:mt-0">
                                            <Link
                                                href={route("employee.edit", {
                                                    id: employee.data.id,
                                                })}
                                                className="mr-2"
                                            >
                                                <Button>
                                                    <FilePenLine
                                                        size={18}
                                                        className="mr-2"
                                                    />{" "}
                                                    Edit Employee
                                                </Button>
                                            </Link>
                                            <AlertDialog>
                                                <AlertDialogTrigger asChild>
                                                    <Button variant="destructive">
                                                        <Trash2
                                                            size={18}
                                                            className="mr-2"
                                                        />{" "}
                                                        Remove Employee
                                                    </Button>
                                                </AlertDialogTrigger>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>
                                                            Are you absolutely
                                                            sure?
                                                        </AlertDialogTitle>
                                                        <AlertDialogDescription>
                                                            This action canot be
                                                            undone. This will
                                                            permanetly delete
                                                            this data.
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel>
                                                            Cancel
                                                        </AlertDialogCancel>
                                                        <Link
                                                            href={route(
                                                                "employee.destroy",
                                                                {
                                                                    id: employee
                                                                        .data
                                                                        .id,
                                                                }
                                                            )}

                                                            method="delete"
                                                        >
                                                            <AlertDialogAction
                                                                className={cn(
                                                                    buttonVariants(
                                                                        {
                                                                            variant:
                                                                                "destructive",
                                                                        }
                                                                    )
                                                                )}
                                                            >
                                                                Continue
                                                            </AlertDialogAction>
                                                        </Link>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                        </div>
                                    </CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <div className="flex flex-col gap-2 lg:px-20 py-5">
                                        <h3 className="text-xl font-bold">
                                            Personal Data
                                        </h3>

                                        <p className="w-full text-gray-950/60 dark:text-gray-50/60 mx-auto xl:mx-0">
                                            This employee personal data
                                        </p>

                                        <Separator />

                                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full mx-auto xl:mx-0">
                                            <li className="flex flex-col gap-1 xl:justify-start">
                                                <span className="text-gray-950/60 dark:text-gray-100/60">
                                                    First name
                                                </span>
                                                <span className="text-xl">
                                                    {employee.data.first_name}
                                                </span>
                                            </li>
                                            <li className="flex flex-col gap-1 xl:justify-start">
                                                <span className="text-gray-950/60 dark:text-gray-100/60">
                                                    Last name
                                                </span>
                                                <span className="text-xl">
                                                    {employee.data.last_name}
                                                </span>
                                            </li>
                                            <li className="flex flex-col gap-1 xl:justify-start">
                                                <span className="text-gray-950/60 dark:text-gray-100/60">
                                                    Email
                                                </span>
                                                <span className="text-xl">
                                                    {employee.data.email}
                                                </span>
                                            </li>
                                            <li className="flex flex-col gap-1 xl:justify-start">
                                                <span className="text-gray-950/60 dark:text-gray-100/60">
                                                    Phone
                                                </span>
                                                <span className="text-xl">
                                                    {employee.data.phone}
                                                </span>
                                            </li>
                                            <li className="flex flex-col gap-1 xl:justify-start">
                                                <span className="text-gray-950/60 dark:text-gray-100/60">
                                                    Place of birth
                                                </span>
                                                <span className="text-xl">
                                                    {
                                                        employee.data
                                                            .place_of_birth
                                                    }
                                                </span>
                                            </li>
                                            <li className="flex flex-col gap-1 xl:justify-start">
                                                <span className="text-gray-950/60 dark:text-gray-100/60">
                                                    Birthdate
                                                </span>
                                                <span className="text-xl">
                                                    {format(
                                                        employee.data
                                                            .birth_date,
                                                        "PPP"
                                                    )}
                                                </span>
                                            </li>
                                            <li className="flex flex-col gap-1 xl:justify-start">
                                                <span className="text-gray-950/60 dark:text-gray-100/60">
                                                    Gender
                                                </span>
                                                <span className="text-xl capitalize">
                                                    {employee.data.gender}
                                                </span>
                                            </li>
                                            <li className="flex flex-col gap-1 xl:justify-start">
                                                <span className="text-gray-950/60 dark:text-gray-100/60">
                                                    Marital Status
                                                </span>
                                                <span className="text-xl capitalize">
                                                    {
                                                        employee.data
                                                            .marital_status
                                                    }
                                                </span>
                                            </li>
                                            <li className="flex flex-col gap-1 xl:justify-start">
                                                <span className="text-gray-950/60 dark:text-gray-100/60">
                                                    Religion
                                                </span>
                                                <span className="text-xl capitalize">
                                                    {employee.data.religion}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flex flex-col gap-2 lg:px-20 py-5">
                                        <h3 className="text-xl font-bold">
                                            Identity & Address
                                        </h3>

                                        <p className="w-full text-gray-950/60 dark:text-gray-50/60 mx-auto xl:mx-0">
                                            This employee identity address
                                        </p>

                                        <Separator />

                                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full mx-auto xl:mx-0">
                                            <li className="flex flex-col gap-1 xl:justify-start">
                                                <span className="text-gray-950/60 dark:text-gray-100/60">
                                                    KTP
                                                </span>
                                                <span className="text-xl">
                                                    {employee.data.ktp}
                                                </span>
                                            </li>
                                            <li className="flex flex-col gap-1 xl:justify-start">
                                                <span className="text-gray-950/60 dark:text-gray-100/60">
                                                    Postal Code
                                                </span>
                                                <span className="text-xl">
                                                    {employee.data.postal_code}
                                                </span>
                                            </li>
                                        </ul>

                                        <ul className="grid grid-cols-1 gap-6 mt-6">
                                            <li className="flex flex-col gap-1 xl:justify-start">
                                                <span className="text-gray-950/60 dark:text-gray-100/60">
                                                    Citizen ID address
                                                </span>
                                                <span className="text-xl">
                                                    {
                                                        employee.data
                                                            .citizen_id_address
                                                    }
                                                </span>
                                            </li>
                                            <li className="flex flex-col gap-1 xl:justify-start">
                                                <span className="text-gray-950/60 dark:text-gray-100/60">
                                                    Residential address
                                                </span>
                                                <span className="text-xl">
                                                    {employee.data
                                                        .residential_address ===
                                                    null
                                                        ? "-"
                                                        : employee.data
                                                              .residential_address}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flex flex-col gap-2 lg:px-20 py-5">
                                        <h3 className="text-xl font-bold">
                                            Employment Data
                                        </h3>

                                        <p className="w-full text-gray-950/60 dark:text-gray-50/60 mx-auto xl:mx-0">
                                            This employee data information
                                            related to company
                                        </p>

                                        <Separator />

                                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full mx-auto xl:mx-0">
                                            <li className="flex flex-col gap-1 xl:justify-start">
                                                <span className="text-gray-950/60 dark:text-gray-100/60">
                                                    Employee number
                                                </span>
                                                <span className="text-xl">
                                                    {
                                                        employee.data
                                                            .employee_number
                                                    }
                                                </span>
                                            </li>
                                            <li className="flex flex-col gap-1 xl:justify-start">
                                                <span className="text-gray-950/60 dark:text-gray-100/60">
                                                    Employment Status
                                                </span>
                                                <span className="text-xl capitalize">
                                                    {
                                                        employee.data
                                                            .employment_status
                                                    }
                                                </span>
                                            </li>
                                            <li className="flex flex-col gap-1 xl:justify-start">
                                                <span className="text-gray-950/60 dark:text-gray-100/60">
                                                    Join date
                                                </span>
                                                <span className="text-xl">
                                                    {format(
                                                        employee.data.join_date,
                                                        "PPP"
                                                    )}
                                                </span>
                                            </li>
                                            <li className="flex flex-col gap-1 xl:justify-start">
                                                <span className="text-gray-950/60 dark:text-gray-100/60">
                                                    Resign date
                                                </span>
                                                <span className="text-xl">
                                                    {employee.data
                                                        .resign_date === null
                                                        ? "-"
                                                        : format(
                                                              employee.data
                                                                  .resign_date,
                                                              "PPP"
                                                          )}
                                                </span>
                                            </li>
                                            <li className="flex flex-col gap-1 xl:justify-start">
                                                <span className="text-gray-950/60 dark:text-gray-100/60">
                                                    Job position
                                                </span>
                                                <span className="text-xl">
                                                    {employee.data.job_position}
                                                </span>
                                            </li>
                                            <li className="flex flex-col gap-1 xl:justify-start">
                                                <span className="text-gray-950/60 dark:text-gray-100/60">
                                                    Job level
                                                </span>
                                                <span className="text-xl capitalize">
                                                    {employee.data.job_level}
                                                </span>
                                            </li>
                                            <li className="flex flex-col gap-1 xl:justify-start">
                                                <span className="text-gray-950/60 dark:text-gray-100/60">
                                                    Branch
                                                </span>
                                                <span className="text-xl capitalize">
                                                    {employee.data.branch}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </MainBody>
            </MainLayout>
        </AuthenticatedLayout>
    );
}
