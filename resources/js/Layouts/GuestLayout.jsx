export default function GuestLayout({ children }) {
    return (
        <div className="container grid h-svh flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 lg:max-w-none lg:px-0">
            <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
                <div className="mb-4 flex items-center justify-center">
                    <h1 className="text-xl font-medium">Employee Data</h1>
                </div>
                {children}
            </div>
        </div>
    );
}
