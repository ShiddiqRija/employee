import { useRef } from "react";
import { useForm } from "@inertiajs/react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";

export default function DeleteUserForm({ className = "" }) {
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "",
    });

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-slate-950 dark:text-slate-50">
                    Delete Account
                </h2>

                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Before deleting your account,
                    please download any data or information that you wish to
                    retain.
                </p>
            </header>

            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="destructive">Delete Account</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-slate-950 dark:text-slate-50">
                            Are you sure you want to delete your account?
                        </DialogTitle>
                        <DialogDescription className="text-slate-600 dark:text-slate-400">
                            Once your account is deleted, all of its resources
                            and data will be permanently deleted. Please enter
                            your password to confirm you would like to
                            permanently delete your account.
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={deleteUser} className="mt-6">
                        <div>
                            <Label htmlFor="password" className="sr-only">
                                Password
                            </Label>

                            <Input
                                id="password"
                                type="password"
                                name="password"
                                ref={passwordInput}
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                isFocused
                                placeholder="Password"
                            />

                            <p className="mt-2 text-xs text-red-800">
                                {errors.password}
                            </p>
                        </div>

                        <div className="mt-6 flex justify-end">
                            <DialogClose>
                                <Button type="button" variant="secondary">
                                    Cancel
                                </Button>
                            </DialogClose>

                            <Button
                                variant="destructive"
                                className="ms-3"
                                disabled={processing}
                            >
                                Delete Account
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </section>
    );
}
