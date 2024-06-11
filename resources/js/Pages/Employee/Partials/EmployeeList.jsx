import { Button } from "@/Components/Custom/button";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/Components/ui/pagination";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { Link } from "@inertiajs/react";
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react";

export default function EmployeeList({ data }) {
    const items =
        data.data.length > 0 ? (
            data.data.map((item, index) => (
                <TableRow key={item.id}>
                    <TableCell>
                        {item.name}
                        <p className="text-xs">{item.email}</p>
                    </TableCell>
                    <TableCell>{item.employee_number}</TableCell>
                    <TableCell className="capitalize">{item.branch}</TableCell>
                    <TableCell>{item.job_position}</TableCell>
                    <TableCell className="capitalize">
                        {item.job_level}
                    </TableCell>
                    <TableCell className="capitalize">
                        {item.employment_status}
                    </TableCell>
                    <TableCell>
                        <Link href={route("employee.show", { id: item.id })}>
                            <Button variant="ghost">VIEW</Button>
                        </Link>
                    </TableCell>
                </TableRow>
            ))
        ) : (
            <TableRow>
                <TableCell colSpan={7} className="text-center">
                    No employees listed.
                </TableCell>
            </TableRow>
        );

    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Employee Name</TableHead>
                        <TableHead>Employee ID</TableHead>
                        <TableHead>Branch</TableHead>
                        <TableHead>Job Position</TableHead>
                        <TableHead>Job Level</TableHead>
                        <TableHead>Employment Status</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>{items}</TableBody>
            </Table>

            <div className="flex items-center justify-between mt-2">
                <p className="text-xs">
                    Showing {data.meta.from} to {data.meta.to} of{" "}
                    {data.meta.total} entries
                </p>

                <div>
                    <div className="flex items-center space-x-2">
                        <Link href={data.links.first} preserveScroll>
                            <Button
                                disabled={
                                    data.links.prev === null ? true : false
                                }
                                variant="outline"
                                className="h-8 w-8 p-0"
                            >
                                <ChevronsLeft size={18} />
                            </Button>
                        </Link>
                        <Link href={data.links.prev} preserveScroll>
                            <Button
                                disabled={
                                    data.links.prev === null ? true : false
                                }
                                variant="outline"
                                className="h-8 w-8 p-0"
                            >
                                <ChevronLeft size={18} />
                            </Button>
                        </Link>
                        <Link href={data.links.next} preserveScroll>
                            <Button
                                disabled={
                                    data.links.next === null ? true : false
                                }
                                variant="outline"
                                className="h-8 w-8 p-0"
                            >
                                <ChevronRight size={18} />
                            </Button>
                        </Link>
                        <Link href={data.links.last} preserveScroll>
                            <Button
                                disabled={
                                    data.links.next === null ? true : false
                                }
                                variant="outline"
                                className="h-8 w-8 p-0"
                            >
                                <ChevronsRight size={18} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
