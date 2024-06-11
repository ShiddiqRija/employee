import { useRef } from "react";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";

export default function UpdatePasswordForm() {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Update Password</CardTitle>
                <CardDescription>
                    Ensure your account is using a long, random password to stay
                    secure.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={updatePassword} className="mt-6 space-y-6">
                    <div>
                        <Label htmlFor="current_password">
                            Current Password
                        </Label>

                        <Input
                            id="current_password"
                            ref={currentPasswordInput}
                            type="password"
                            value={data.current_password}
                            onChange={(e) =>
                                setData("current_password", e.target.value)
                            }
                            autoComplete="current-password"
                        />

                        <p className="mt-2 text-xs text-red-800">
                            {errors.current_password}
                        </p>
                    </div>

                    <div>
                        <Label htmlFor="password">New Password</Label>

                        <Input
                            id="password"
                            ref={passwordInput}
                            type="password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            autoComplete="new-password"
                        />

                        <p className="mt-2 text-xs text-red-800">
                            {errors.password}
                        </p>
                    </div>

                    <div>
                        <Label htmlFor="password_confirmation">
                            Confirm Password
                        </Label>

                        <Input
                            id="password_confirmation"
                            type="password"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            autoComplete="new-password"
                        />

                        <p className="mt-2 text-xs text-red-800">
                            {errors.password_confirmation}
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button
                            disabled={processing}
                            className="uppercase tracking-widest"
                        >
                            Save
                        </Button>

                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm text-gray-600">Saved.</p>
                        </Transition>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
