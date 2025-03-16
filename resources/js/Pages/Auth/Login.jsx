// import Checkbox from '@/Components/Checkbox';
// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import GuestLayout from '@/Layouts/GuestLayout';
// import { Head, Link, useForm } from '@inertiajs/react';

// export default function Login({ status, canResetPassword }) {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         email: '',
//         password: '',
//         remember: false,
//     });

//     const submit = (e) => {
//         e.preventDefault();

//         post(route('login'), {
//             onFinish: () => reset('password'),
//         });
//     };

//     return (
//         <GuestLayout>
//             <Head title="Log in" />

//             {status && (
//                 <div className="mb-4 text-sm font-medium text-green-600">
//                     {status}
//                 </div>
//             )}

//             <form onSubmit={submit}>
//                 <div>
//                     <InputLabel htmlFor="email" value="Email" />

//                     <TextInput
//                         id="email"
//                         type="email"
//                         name="email"
//                         value={data.email}
//                         className="mt-1 block w-full"
//                         autoComplete="username"
//                         isFocused={true}
//                         onChange={(e) => setData('email', e.target.value)}
//                     />

//                     <InputError message={errors.email} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <InputLabel htmlFor="password" value="Password" />

//                     <TextInput
//                         id="password"
//                         type="password"
//                         name="password"
//                         value={data.password}
//                         className="mt-1 block w-full"
//                         autoComplete="current-password"
//                         onChange={(e) => setData('password', e.target.value)}
//                     />

//                     <InputError message={errors.password} className="mt-2" />
//                 </div>

//                 <div className="mt-4 block">
//                     <label className="flex items-center">
//                         <Checkbox
//                             name="remember"
//                             checked={data.remember}
//                             onChange={(e) =>
//                                 setData('remember', e.target.checked)
//                             }
//                         />
//                         <span className="ms-2 text-sm text-gray-600">
//                             Remember me
//                         </span>
//                     </label>
//                 </div>

//                 <div className="mt-4 flex items-center justify-end">
//                     {canResetPassword && (
//                         <Link
//                             href={route('password.request')}
//                             className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                         >
//                             Forgot your password?
//                         </Link>
//                     )}

//                     <PrimaryButton className="ms-4" disabled={processing}>
//                         Log in
//                     </PrimaryButton>
//                 </div>
//             </form>
//         </GuestLayout>
//     );
// }

import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { IconCornerUpLeft } from "@tabler/icons-react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("register"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 md:px-20 ">
            <Head title="Registrasi" />

            <div className="absolute top-4 left-1 sm:top-6 sm:left-10">
                <Link
                    href="/"
                    className="px-3 py-2 text-sm sm:text-base text-secondary rounded-md transition-transform duration-300 border border-secondary hover:bg-secondary hover:text-white flex items-center gap-2 flex-wrap w-full sm:w-auto"
                >
                    <IconCornerUpLeft
                        stroke={1}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                    <span>Kembali</span>
                </Link>
            </div>

            <div className="flex flex-col md:flex-row items-center w-full max-w-6xl">
                {/* Bagian Logo dan Judul */}
                <div className="flex flex-col items-center md:w-1/2 mt-16 sm:mt-0">
                    <h1 className="text-4xl sm:text-5xl font-bold text-center">
                        MTs LA TAHZAN
                    </h1>
                    <img
                        src="/image/logo.png"
                        alt="Logo MTs LA TAHZAN"
                        className="w-64 sm:w-80 mt-6"
                    />
                </div>

                {/* Form Registrasi */}
                <div className="w-full md:w-1/2 bg-white p-6 sm:p-8">
                    <form
                        onSubmit={submit}
                        className="border-2 border-secondary p-6 rounded-lg"
                    >
                        <h2 className="text-2xl sm:text-3xl text-center font-bold mb-6 text-gray-800">
                            Login
                        </h2>


                        {/* Input Email */}
                        <div className="mt-4">
                            <InputLabel
                                htmlFor="email"
                                value="Email"
                                className="text-lg font-semibold"
                            />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Masukan email calon siswa"
                                value={data.email}
                                className="mt-2 block w-full border-secondary"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        {/* Input Password */}
                        <div className="mt-4">
                            <InputLabel
                                htmlFor="password"
                                value="Password"
                                className="text-lg font-semibold"
                            />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Masukan password calon siswa"
                                value={data.password}
                                className="mt-2 block w-full border-secondary"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        {/* Tombol Registrasi */}
                        <div className="mt-6 text-center">
                            <PrimaryButton
                                className="w-full sm:w-2/3 bg-secondary mx-auto hover:bg-secondary/90"
                                disabled={processing}
                            >
                                Login
                            </PrimaryButton>
                        </div>

                        {/* Link ke halaman login */}
                        <div className="mt-3 text-center">
                            <span>Belum punya akun? </span>
                            <Link
                                href={route("login")}
                                className="text-blue-500"
                            >
                                Registrasi
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
