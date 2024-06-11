import { Button } from "@/Components/Custom/button";
import {
    MainBody,
    MainHeader,
    MainLayout,
} from "@/Components/Partials/MainLayout";
import ThemeSwitch from "@/Components/ThemeSwitch";
import UserNav from "@/Components/UserNav";
import { Calendar } from "@/Components/ui/calendar";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Textarea } from "@/Components/ui/textarea";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { cn } from "@/Lib/Utils";
import { Head, useForm } from "@inertiajs/react";
import { format, parse } from "date-fns";
import { CalendarIcon } from "lucide-react";

export default function Edit({ auth, employee }) {
    const { data, setData, put, errors, processing } = useForm({
        first_name: employee.first_name,
        last_name: employee.last_name,
        email: employee.email,
        phone: employee.phone,
        place_of_birth: employee.place_of_birth,
        birth_date: employee.birth_date,
        gender: employee.gender,
        marital_status: employee.marital_status,
        religion: employee.religion,
        ktp: employee.identity_address.ktp,
        postal_code: employee.identity_address.postal_code,
        citizen_id_address: employee.identity_address.citizen_id_address,
        residential_address: employee.identity_address.residential_address,
        employee_number: employee.employment.employee_number,
        employment_status: employee.employment.employment_status,
        join_date: employee.employment.join_date,
        resign_date: employee.employment.resign_date,
        branch: employee.employment.branch.split(' ').join('-'),
        job_position: employee.employment.job_position,
        job_level: employee.employment.job_level,
    });

    const submit = (e) => {
        e.preventDefault();

        put(route("employee.update", { id: employee.id }));
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Employee" />

            <MainLayout>
                <MainHeader>
                    <div className="ml-auto flex items-center space-x-4">
                        <ThemeSwitch />
                        <UserNav user={auth.user} />
                    </div>
                </MainHeader>
                <MainBody>
                    <div>
                        <div className="max-w-4xl mx-auto">
                            <form onSubmit={submit} className="space-y-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Edit Employee</CardTitle>
                                    </CardHeader>
                                    <CardHeader>
                                        <h4 className="text-xl font-semibold leading-none tracking-tight">
                                            Personal Data
                                        </h4>
                                        <CardDescription>
                                            Fill all employee personal basic
                                            information data
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                                            <div className="w-full">
                                                <Label htmlFor="first_name">
                                                    First Name{" "}
                                                    <span className="text-red-700">
                                                        *
                                                    </span>
                                                </Label>

                                                <Input
                                                    id="first_name"
                                                    type="text"
                                                    value={data.first_name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "first_name",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />

                                                <p className="mt-2 text-xs text-red-800">
                                                    {errors.first_name}
                                                </p>
                                            </div>

                                            <div className="w-full">
                                                <Label htmlFor="last_name">
                                                    Last Name{" "}
                                                    <span className="text-red-700">
                                                        *
                                                    </span>
                                                </Label>

                                                <Input
                                                    id="last_name"
                                                    type="text"
                                                    value={data.last_name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "last_name",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />

                                                <p className="mt-2 text-xs text-red-800">
                                                    {errors.last_name}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col lg:flex-row  items-center justify-between gap-4">
                                            <div className="w-full">
                                                <Label htmlFor="email">
                                                    Email{" "}
                                                    <span className="text-red-700">
                                                        *
                                                    </span>
                                                </Label>

                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={data.email}
                                                    onChange={(e) =>
                                                        setData(
                                                            "email",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />

                                                <p className="mt-2 text-xs text-red-800">
                                                    {errors.email}
                                                </p>
                                            </div>

                                            <div className="w-full">
                                                <Label htmlFor="phone">
                                                    Phone
                                                </Label>

                                                <Input
                                                    id="phone"
                                                    type="text"
                                                    value={data.phone}
                                                    onChange={(e) =>
                                                        setData(
                                                            "phone",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                                <p className="mt-2 text-xs text-red-800">
                                                    {errors.phone}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col lg:flex-row  items-center justify-between gap-4">
                                            <div className="w-full">
                                                <Label htmlFor="place_of_birth">
                                                    Place of birth{" "}
                                                    <span className="text-red-700">
                                                        *
                                                    </span>
                                                </Label>

                                                <Input
                                                    id="place_of_birth"
                                                    type="text"
                                                    value={data.place_of_birth}
                                                    onChange={(e) =>
                                                        setData(
                                                            "place_of_birth",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />

                                                <p className="mt-2 text-xs text-red-800">
                                                    {errors.place_of_birth}
                                                </p>
                                            </div>

                                            <div className="w-full flex flex-col">
                                                <Label htmlFor="phone">
                                                    Birthdate{" "}
                                                    <span className="text-red-700">
                                                        *
                                                    </span>
                                                </Label>

                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-full h-[40px] justify-start text-left font-normal",
                                                                !data.birth_date &&
                                                                    "text-muted-foreground"
                                                            )}
                                                        >
                                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                                            {data.birth_date ? (
                                                                format(
                                                                    data.birth_date,
                                                                    "PPP"
                                                                )
                                                            ) : (
                                                                <span>
                                                                    Pick a date
                                                                </span>
                                                            )}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0">
                                                        <Calendar
                                                            mode="single"
                                                            selected={parse(
                                                                data.birth_date,
                                                                "yyyy-MM-dd",
                                                                new Date()
                                                            )}
                                                            onSelect={(e) =>
                                                                setData(
                                                                    "birth_date",
                                                                    format(
                                                                        e,
                                                                        "yyyy-MM-dd"
                                                                    )
                                                                )
                                                            }
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>

                                                <p className="mt-2 text-xs text-red-800">
                                                    {errors.birth_date}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col lg:flex-row  items-center justify-between gap-4">
                                            <div className="w-full">
                                                <Label htmlFor="gender">
                                                    Gender{" "}
                                                    <span className="text-red-700">
                                                        *
                                                    </span>
                                                </Label>

                                                <RadioGroup
                                                    defaultValue={data.gender}
                                                    onValueChange={(e) =>
                                                        setData("gender", e)
                                                    }
                                                    className="flex mt-2"
                                                >
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem
                                                            value="male"
                                                            id="male"
                                                        />
                                                        <Label htmlFor="male">
                                                            Male
                                                        </Label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem
                                                            value="female"
                                                            id="female"
                                                        />
                                                        <Label htmlFor="female">
                                                            Female
                                                        </Label>
                                                    </div>
                                                </RadioGroup>

                                                <p className="mt-2 text-xs text-red-800">
                                                    {errors.gender}
                                                </p>
                                            </div>

                                            <div className="w-full">
                                                <Label htmlFor="marital_status">
                                                    Marital Status{" "}
                                                    <span className="text-red-700">
                                                        *
                                                    </span>
                                                </Label>

                                                <Select
                                                    defaultValue={
                                                        data.marital_status
                                                    }
                                                    onValueChange={(e) =>
                                                        setData(
                                                            "marital_status",
                                                            e
                                                        )
                                                    }
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Marital Status" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="single">
                                                            Single
                                                        </SelectItem>
                                                        <SelectItem value="married">
                                                            Married
                                                        </SelectItem>
                                                        <SelectItem value="widow">
                                                            Widow
                                                        </SelectItem>
                                                        <SelectItem value="widower">
                                                            Widower
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>

                                                <p className="mt-2 text-xs text-red-800">
                                                    {errors.marital_status}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col lg:flex-row  items-center justify-between gap-4">
                                            <div className="w-full">
                                                <Label htmlFor="religion">
                                                    Religion{" "}
                                                    <span className="text-red-700">
                                                        *
                                                    </span>
                                                </Label>

                                                <Select
                                                    defaultValue={data.religion}
                                                    onValueChange={(e) =>
                                                        setData("religion", e)
                                                    }
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Religion" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="islam">
                                                            Islam
                                                        </SelectItem>
                                                        <SelectItem value="catholic">
                                                            Catholic
                                                        </SelectItem>
                                                        <SelectItem value="cristian">
                                                            Cristian
                                                        </SelectItem>
                                                        <SelectItem value="buddha">
                                                            Buddha
                                                        </SelectItem>
                                                        <SelectItem value="hindu">
                                                            Hindu
                                                        </SelectItem>
                                                        <SelectItem value="Confucius">
                                                            Confucius
                                                        </SelectItem>
                                                        <SelectItem value="other">
                                                            Other
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>

                                                <p className="mt-2 text-xs text-red-800">
                                                    {errors.religion}
                                                </p>
                                            </div>

                                            <div className="w-full">
                                                <p className="sr-only">
                                                    spacer
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>

                                    <CardHeader>
                                        <h4 className="text-xl font-semibold leading-none tracking-tight">
                                            Identity & address
                                        </h4>
                                        <CardDescription>
                                            Employee identity address
                                            information
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                                            <div className="w-full">
                                                <Label htmlFor="ktp">
                                                    KTP{" "}
                                                </Label>

                                                <Input
                                                    id="ktp"
                                                    type="text"
                                                    value={data.ktp}
                                                    onChange={(e) =>
                                                        setData(
                                                            "ktp",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />

                                                <p className="mt-2 text-xs text-red-800">
                                                    {errors.ktp}
                                                </p>
                                            </div>

                                            <div className="w-full">
                                                <Label htmlFor="postal_code">
                                                    Postal Code{" "}
                                                </Label>

                                                <Input
                                                    id="postal_code"
                                                    type="text"
                                                    value={data.postal_code}
                                                    onChange={(e) =>
                                                        setData(
                                                            "postal_code",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />

                                                <p className="mt-2 text-xs text-red-800">
                                                    {errors.postal_code}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                                            <div className="w-full">
                                                <Label htmlFor="citizen_id_address">
                                                    Citizen id address
                                                </Label>

                                                <Textarea
                                                    id="citizen_id_address"
                                                    value={
                                                        data.citizen_id_address ===
                                                        null
                                                            ? ""
                                                            : data.citizen_id_address
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            "citizen_id_address",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                                <p className="mt-2 text-xs text-red-800">
                                                    {errors.citizen_id_address}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                                            <div className="w-full">
                                                <Label htmlFor="residential_address">
                                                    Redential address
                                                </Label>

                                                <Textarea
                                                    id="residential_address"
                                                    value={
                                                        data.residential_address ===
                                                        null
                                                            ? ""
                                                            : data.residential_address
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            "residential_address",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                                <p className="mt-2 text-xs text-red-800">
                                                    {errors.residential_address}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>

                                    <CardHeader>
                                        <h4 className="text-xl font-semibold leading-none tracking-tight">
                                            Employment data
                                        </h4>
                                        <CardDescription>
                                            Fill all employee data information
                                            related to company
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                                            <div className="w-full">
                                                <Label htmlFor="employee_number">
                                                    Employment Number{" "}
                                                    <span className="text-red-700">
                                                        *
                                                    </span>
                                                </Label>

                                                <Input
                                                    id="employee_number"
                                                    type="text"
                                                    value={data.employee_number}
                                                    onChange={(e) =>
                                                        setData(
                                                            "employee_number",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />

                                                <p className="mt-2 text-xs text-red-800">
                                                    {errors.employee_number}
                                                </p>
                                            </div>

                                            <div className="w-full">
                                                <Label htmlFor="employment_status">
                                                    Employment status{" "}
                                                    <span className="text-red-700">
                                                        *
                                                    </span>
                                                </Label>

                                                <Select
                                                    defaultValue={
                                                        data.employment_status
                                                    }
                                                    onValueChange={(e) =>
                                                        setData(
                                                            "employment_status",
                                                            e
                                                        )
                                                    }
                                                    required
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Employment status" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="internship">
                                                            internship
                                                        </SelectItem>
                                                        <SelectItem value="probation">
                                                            Probation
                                                        </SelectItem>
                                                        <SelectItem value="contract">
                                                            Contract
                                                        </SelectItem>
                                                        <SelectItem value="permanent">
                                                            Permanent
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>

                                                <p className="mt-2 text-xs text-red-800">
                                                    {errors.employment_status}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                                            <div className="w-full">
                                                <Label htmlFor="join_date">
                                                    Join date{" "}
                                                    <span className="text-red-700">
                                                        *
                                                    </span>
                                                </Label>

                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-full h-[40px] justify-start text-left font-normal",
                                                                !data.join_date &&
                                                                    "text-muted-foreground"
                                                            )}
                                                        >
                                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                                            {data.join_date ? (
                                                                format(
                                                                    data.join_date,
                                                                    "PPP"
                                                                )
                                                            ) : (
                                                                <span>
                                                                    Pick a date
                                                                </span>
                                                            )}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0">
                                                        <Calendar
                                                            mode="single"
                                                            selected={parse(
                                                                data.join_date,
                                                                "yyyy-MM-dd",
                                                                new Date()
                                                            )}
                                                            onSelect={(e) =>
                                                                setData(
                                                                    "join_date",
                                                                    format(
                                                                        e,
                                                                        "yyyy-MM-dd"
                                                                    )
                                                                )
                                                            }
                                                            initialFocus
                                                            required
                                                        />
                                                    </PopoverContent>
                                                </Popover>

                                                <p className="mt-2 text-xs text-red-800">
                                                    {errors.join_date}
                                                </p>
                                            </div>

                                            <div className="w-full">
                                                <Label htmlFor="resign_date">
                                                    Resign date{" "}
                                                </Label>

                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-full h-[40px] justify-start text-left font-normal",
                                                                !data.resign_date &&
                                                                    "text-muted-foreground"
                                                            )}
                                                        >
                                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                                            {data.resign_date ? (
                                                                format(
                                                                    data.resign_date,
                                                                    "PPP"
                                                                )
                                                            ) : (
                                                                <span>
                                                                    Pick a date
                                                                </span>
                                                            )}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0">
                                                        <Calendar
                                                            mode="single"
                                                            selected={
                                                                data.resign_date
                                                                    ? parse(
                                                                          data.resign_date,
                                                                          "yyyy-MM-dd",
                                                                          new Date()
                                                                      )
                                                                    : null
                                                            }
                                                            onSelect={(e) =>
                                                                setData(
                                                                    "resign_date",
                                                                    format(
                                                                        e,
                                                                        "yyyy-MM-dd"
                                                                    )
                                                                )
                                                            }
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>

                                                <p className="mt-2 text-xs text-red-800">
                                                    {errors.resign_date}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                                            <div className="w-full">
                                                <Label htmlFor="branch">
                                                    Branch{" "}
                                                    <span className="text-red-700">
                                                        *
                                                    </span>
                                                </Label>

                                                <Select
                                                    defaultValue={data.branch}
                                                    onValueChange={
                                                        (e) => 
                                                        setData("branch", e)
                                                    }
                                                    required
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Branch" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="head-office">
                                                            Head Office
                                                        </SelectItem>
                                                        <SelectItem value="branch-office">
                                                            Branch Office
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>

                                                <p className="mt-2 text-xs text-red-800">
                                                    {errors.branch}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                                            <div className="w-full">
                                                <Label htmlFor="job_position">
                                                    Job Position{" "}
                                                    <span className="text-red-700">
                                                        *
                                                    </span>
                                                </Label>

                                                <Input
                                                    id="job_position"
                                                    type="text"
                                                    value={data.job_position}
                                                    onChange={(e) =>
                                                        setData(
                                                            "job_position",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />

                                                <p className="mt-2 text-xs text-red-800">
                                                    {errors.job_position}
                                                </p>
                                            </div>

                                            <div className="w-full">
                                                <Label htmlFor="job_level">
                                                    Job level{" "}
                                                    <span className="text-red-700">
                                                        *
                                                    </span>
                                                </Label>

                                                <Select
                                                    defaultValue={
                                                        data.job_level
                                                    }
                                                    onValueChange={(e) =>
                                                        setData("job_level", e)
                                                    }
                                                    required
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Job level" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="intern">
                                                            Intern
                                                        </SelectItem>
                                                        <SelectItem value="staff">
                                                            Staff
                                                        </SelectItem>
                                                        <SelectItem value="manager">
                                                            Manager
                                                        </SelectItem>
                                                        <SelectItem value="director">
                                                            Director
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>

                                                <p className="mt-2 text-xs text-red-800">
                                                    {errors.job_level}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>

                                    <CardFooter>
                                        <Button disabled={processing}>
                                            Update
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </form>
                        </div>
                    </div>
                </MainBody>
            </MainLayout>
        </AuthenticatedLayout>
    );
}
