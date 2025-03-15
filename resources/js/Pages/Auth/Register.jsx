import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        nisn: "",
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
        <GuestLayout>
            <Head title="Registrasi" />

            <div className="flex items-center justify-between border-2 border-secondary p-4">
                <Link href="/" className="px-4 py-2 text-red-500 rounded-md">
                    ← Kembali
                </Link>
            </div>

            <div className="flex items-center justify-center min-h-screen px-20">
                <div className="flex flex-col items-center mr-10">
                    <h1 className="text-2xl font-bold">MTs LA TAHZAN</h1>
                    <img
                        src="/image/logo.png"
                        alt="Logo MTs LA TAHZAN"
                        className="w-64 mb-10"
                    />
                </div>

                <div className="w-full bg-white p-8 rounded-lg shadow-md border-2 border-gray-300">
                    <form
                        onSubmit={submit}
                        className="border border-gray-900 p-6 rounded-lg"
                    >
                        {" "}
                        <h2 className="text-2xl text-center font-bold mb-6 text-gray-800">
                            Registrasi
                        </h2>
                        <div>
                            <InputLabel htmlFor="name" value="Nama" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full border-gray-300"
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="nisn" value="NISN" />
                            <Link
                                href="https://nisn.data.kemdikbud.go.id"
                                target="_blank"
                                className="text-blue-500 ml-2"
                            >
                                Cek NISN di Sini
                            </Link>
                            <TextInput
                                id="nisn"
                                name="nisn"
                                value={data.nisn}
                                className="mt-1 block w-full border-gray-300"
                                onChange={(e) =>
                                    setData("nisn", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.nisn}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full border-gray-300"
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
                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full border-gray-300"
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
                        <div className="mt-6">
                            <PrimaryButton
                                className="w-full bg-red-500"
                                disabled={processing}
                            >
                                Registrasi
                            </PrimaryButton>
                        </div>
                        <div className="mt-4 text-center">
                            <span>Sudah punya akun? </span>
                            <Link
                                href={route("login")}
                                className="text-blue-500"
                            >
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
