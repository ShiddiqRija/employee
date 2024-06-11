import { Button } from "@/Components/Custom/button";
import {
    MainBody,
    MainHeader,
    MainLayout,
} from "@/Components/Partials/MainLayout";
import ThemeSwitch from "@/Components/ThemeSwitch";
import UserNav from "@/Components/UserNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { format } from "date-fns";

export default function Show({ auth, employee }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Employee Show" />

            <MainLayout fixedHeight>
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
                                    <CardTitle className=" flex  justify-between items-center">
                                        {employee.data.first_name} ( {employee.data.employee_number} )
                                        <div className="flex justify-end">
                                            <Link
                                                href={route("employee.create")}
                                                className="mr-2"
                                            >
                                                <Button>
                                                    {/* <Plus size={18} className="mr-2" />{" "} */}
                                                    Edit Employee
                                                </Button>
                                            </Link>
                                            <Link
                                                href={route("employee.create")}
                                            >
                                                <Button variant="destructive">
                                                    {/* <Plus size={18} className="mr-2" />{" "} */}
                                                    Remove Employee
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <div className="container mx-auto">
                                        <Tabs
                                            defaultValue="personal"
                                            className="flex flex-col xl:flex-row gap-[60px]"
                                        >
                                            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto ml:mx-0 gap-6">
                                                <TabsTrigger value="personal">
                                                    Personal
                                                </TabsTrigger>
                                                <TabsTrigger value="identity">
                                                    Identity & Address
                                                </TabsTrigger>
                                                <TabsTrigger value="employment">
                                                    Employment
                                                </TabsTrigger>
                                            </TabsList>

                                            <div className="min-h-[60vh] w-full">
                                                <TabsContent
                                                    value="personal"
                                                    className="w-full text-center xl:text-left"
                                                >
                                                    <div className="flex flex-col gap-2">
                                                        <h3 className="text-xl font-bold">
                                                            Personal Data
                                                        </h3>

                                                        <p className="max-w-[600px] text-gray-950/60 dark:text-gray-50/60 mx-auto xl:mx-0">
                                                            This employee
                                                            personal data
                                                        </p>

                                                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-[620px] mx-auto xl:mx-0">
                                                            <li class="flex flex-col gap-1 xl:justify-start">
                                                                <span class="text-gray-950/60 dark:text-gray-100/60">
                                                                    First name
                                                                </span>
                                                                <span class="text-xl">
                                                                    {
                                                                        employee
                                                                            .data
                                                                            .first_name
                                                                    }
                                                                </span>
                                                            </li>
                                                            <li class="flex flex-col gap-1 xl:justify-start">
                                                                <span class="text-gray-950/60 dark:text-gray-100/60">
                                                                    Last name
                                                                </span>
                                                                <span class="text-xl">
                                                                    {
                                                                        employee
                                                                            .data
                                                                            .last_name
                                                                    }
                                                                </span>
                                                            </li>
                                                            <li class="flex flex-col gap-1 xl:justify-start">
                                                                <span class="text-gray-950/60 dark:text-gray-100/60">
                                                                    Email
                                                                </span>
                                                                <span class="text-xl">
                                                                    {
                                                                        employee
                                                                            .data
                                                                            .email
                                                                    }
                                                                </span>
                                                            </li>
                                                            <li class="flex flex-col gap-1 xl:justify-start">
                                                                <span class="text-gray-950/60 dark:text-gray-100/60">
                                                                    Phone
                                                                </span>
                                                                <span class="text-xl">
                                                                    {
                                                                        employee
                                                                            .data
                                                                            .phone
                                                                    }
                                                                </span>
                                                            </li>
                                                            <li class="flex flex-col gap-1 xl:justify-start">
                                                                <span class="text-gray-950/60 dark:text-gray-100/60">
                                                                    Place of
                                                                    birth
                                                                </span>
                                                                <span class="text-xl">
                                                                    {
                                                                        employee
                                                                            .data
                                                                            .place_of_birth
                                                                    }
                                                                </span>
                                                            </li>
                                                            <li class="flex flex-col gap-1 xl:justify-start">
                                                                <span class="text-gray-950/60 dark:text-gray-100/60">
                                                                    Birthdate
                                                                </span>
                                                                <span class="text-xl">
                                                                    {format(
                                                                        employee
                                                                            .data
                                                                            .birth_date,
                                                                        "PPP"
                                                                    )}
                                                                </span>
                                                            </li>
                                                            <li class="flex flex-col gap-1 xl:justify-start">
                                                                <span class="text-gray-950/60 dark:text-gray-100/60">
                                                                    Gender
                                                                </span>
                                                                <span class="text-xl capitalize">
                                                                    {
                                                                        employee
                                                                            .data
                                                                            .gender
                                                                    }
                                                                </span>
                                                            </li>
                                                            <li class="flex flex-col gap-1 xl:justify-start">
                                                                <span class="text-gray-950/60 dark:text-gray-100/60">
                                                                    Marital
                                                                    Status
                                                                </span>
                                                                <span class="text-xl capitalize">
                                                                    {
                                                                        employee
                                                                            .data
                                                                            .marital_status
                                                                    }
                                                                </span>
                                                            </li>
                                                            <li class="flex flex-col gap-1 xl:justify-start">
                                                                <span class="text-gray-950/60 dark:text-gray-100/60">
                                                                    Religion
                                                                </span>
                                                                <span class="text-xl capitalize">
                                                                    {
                                                                        employee
                                                                            .data
                                                                            .religion
                                                                    }
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </TabsContent>
                                                <TabsContent
                                                    value="identity"
                                                    className="w-full text-center xl:text-left"
                                                >
                                                    <div className="flex flex-col gap-2">
                                                        <h3 className="text-xl font-bold">
                                                            Personal Data
                                                        </h3>

                                                        <p className="max-w-[600px] text-gray-950/60 dark:text-gray-50/60 mx-auto xl:mx-0">
                                                            This employee
                                                            identity address
                                                        </p>

                                                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-[620px] mx-auto xl:mx-0">
                                                            <li class="flex flex-col gap-1 xl:justify-start">
                                                                <span class="text-gray-950/60 dark:text-gray-100/60">
                                                                    KTP
                                                                </span>
                                                                <span class="text-xl">
                                                                    {
                                                                        employee
                                                                            .data
                                                                            .ktp
                                                                    }
                                                                </span>
                                                            </li>
                                                            <li class="flex flex-col gap-1 xl:justify-start">
                                                                <span class="text-gray-950/60 dark:text-gray-100/60">
                                                                    Postal Code
                                                                </span>
                                                                <span class="text-xl">
                                                                    {
                                                                        employee
                                                                            .data
                                                                            .postal_code
                                                                    }
                                                                </span>
                                                            </li>
                                                        </ul>

                                                        <ul className="grid grid-cols-1 gap-6 mt-6">
                                                            <li class="flex flex-col gap-1 xl:justify-start">
                                                                <span class="text-gray-950/60 dark:text-gray-100/60">
                                                                    Citizen ID
                                                                    address
                                                                </span>
                                                                <span class="text-xl">
                                                                    {
                                                                        employee
                                                                            .data
                                                                            .citizen_id_address
                                                                    }
                                                                </span>
                                                            </li>
                                                            <li class="flex flex-col gap-1 xl:justify-start">
                                                                <span class="text-gray-950/60 dark:text-gray-100/60">
                                                                    Residential
                                                                    address
                                                                </span>
                                                                <span class="text-xl">
                                                                    {employee
                                                                        .data
                                                                        .residential_address ===
                                                                    null
                                                                        ? "-"
                                                                        : employee
                                                                              .data
                                                                              .residential_address}
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </TabsContent>
                                                <TabsContent
                                                    value="employment"
                                                    className="w-full text-center xl:text-left"
                                                >
                                                    <div className="flex flex-col gap-2">
                                                        <h3 className="text-xl font-bold">
                                                            Employment Data
                                                        </h3>

                                                        <p className="max-w-[600px] text-gray-950/60 dark:text-gray-50/60 mx-auto xl:mx-0">
                                                            This employee data
                                                            information related
                                                            to company
                                                        </p>

                                                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-[620px] mx-auto xl:mx-0">
                                                            <li class="flex flex-col gap-1 xl:justify-start">
                                                                <span class="text-gray-950/60 dark:text-gray-100/60">
                                                                    Employee
                                                                    number
                                                                </span>
                                                                <span class="text-xl">
                                                                    {
                                                                        employee
                                                                            .data
                                                                            .employee_number
                                                                    }
                                                                </span>
                                                            </li>
                                                            <li class="flex flex-col gap-1 xl:justify-start">
                                                                <span class="text-gray-950/60 dark:text-gray-100/60">
                                                                    Employment
                                                                    Status
                                                                </span>
                                                                <span class="text-xl capitalize">
                                                                    {
                                                                        employee
                                                                            .data
                                                                            .employment_status
                                                                    }
                                                                </span>
                                                            </li>
                                                            <li class="flex flex-col gap-1 xl:justify-start">
                                                                <span class="text-gray-950/60 dark:text-gray-100/60">
                                                                    Join date
                                                                </span>
                                                                <span class="text-xl">
                                                                    {format(
                                                                        employee
                                                                            .data
                                                                            .join_date,
                                                                        "PPP"
                                                                    )}
                                                                </span>
                                                            </li>
                                                            <li class="flex flex-col gap-1 xl:justify-start">
                                                                <span class="text-gray-950/60 dark:text-gray-100/60">
                                                                    Resign date
                                                                </span>
                                                                <span class="text-xl">
                                                                    {employee
                                                                        .data
                                                                        .resign_date ===
                                                                    null
                                                                        ? "-"
                                                                        : format(
                                                                              employee
                                                                                  .data
                                                                                  .resign_date,
                                                                              "PPP"
                                                                          )}
                                                                </span>
                                                            </li>
                                                            <li class="flex flex-col gap-1 xl:justify-start">
                                                                <span class="text-gray-950/60 dark:text-gray-100/60">
                                                                    Job position
                                                                </span>
                                                                <span class="text-xl">
                                                                    {
                                                                        employee
                                                                            .data
                                                                            .job_position
                                                                    }
                                                                </span>
                                                            </li>
                                                            <li class="flex flex-col gap-1 xl:justify-start">
                                                                <span class="text-gray-950/60 dark:text-gray-100/60">
                                                                    Job level
                                                                </span>
                                                                <span class="text-xl capitalize">
                                                                    {
                                                                        employee
                                                                            .data
                                                                            .job_level
                                                                    }
                                                                </span>
                                                            </li>
                                                            <li class="flex flex-col gap-1 xl:justify-start">
                                                                <span class="text-gray-950/60 dark:text-gray-100/60">
                                                                    Branch
                                                                </span>
                                                                <span class="text-xl capitalize">
                                                                    {
                                                                        employee
                                                                            .data
                                                                            .branch
                                                                    }
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </TabsContent>
                                            </div>
                                        </Tabs>
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
