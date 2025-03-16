import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import Button from "./Button";
import { IconChevronDown, IconMenu2, IconX } from "@tabler/icons-react";
import ButtonComponent from "./Button";

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <nav className="fixed w-full backdrop-blur-lg z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <img
                            src="/image/logo.png"
                            alt="Logo"
                            className="h-10 w-10 object-cover"
                        />
                        <span className="ml-2 text-xl font-bold text-primary">
                            MTS LA TAHZAN
                        </span>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <Link
                            href="/"
                            className="text-primary hover:text-gray-950"
                        >
                            Beranda
                        </Link>
                        <div className="relative">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="inline-flex items-center text-primary hover:text-gray-950 focus:outline-none"
                            >
                                Daftar PPDB
                                <IconChevronDown className="ml-1 h-5 w-5" />
                            </button>
                            {dropdownOpen && (
                                <div className="absolute left-0 mt-2 bg-white shadow-md rounded z-30">
                                    <Link
                                        href="/ppdb/reguler"
                                        className="block px-4 py-2 text-primary hover:bg-gray-100"
                                    >
                                        Jalur Reguler
                                    </Link>
                                    <Link
                                        href="/ppdb/afirmasi"
                                        className="block px-4 py-2 text-primary hover:bg-gray-100"
                                    >
                                        Jalur Afirmasi
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="hidden md:flex space-x-2">
                        <ButtonComponent
                            text="Login"
                            variant="outline-secondary"
                            size="md"
                            color="secondary"
                            link={"/login"}
                        />
                        <ButtonComponent
                            text="Register "
                            variant="outline-secondary"
                            size="md"
                            color="secondary"
                            link={"/register"}
                        />
                    </div>
                    <button
                        className="md:hidden text-primary"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <IconMenu2 className="h-8 w-8" />
                    </button>
                </div>
            </div>

            <div
                className={`fixed top-0 right-0 w-screen h-screen bg-white z-50 transform transition-transform duration-300 ${
                    sidebarOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <button
                    className="absolute top-4 right-4 text-gray-600"
                    onClick={() => setSidebarOpen(false)}
                >
                    <IconX className="h-6 w-6" />
                </button>
                <div className="flex flex-col items-center justify-center h-full space-y-6">
                    <Link
                        href="/"
                        className="text-primary text-lg font-semibold hover:text-gray-950"
                        onClick={() => setSidebarOpen(false)}
                    >
                        Beranda
                    </Link>
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center text-primary text-lg font-semibold hover:text-gray-950"
                        >
                            Daftar PPDB
                            <IconChevronDown className="ml-1 h-5 w-5" />
                        </button>
                        {dropdownOpen && (
                            <div className="mt-2 text-center">
                                <Link
                                    href="/ppdb/reguler"
                                    className="block text-primary hover:bg-gray-100 px-4 py-2"
                                    onClick={() => setSidebarOpen(false)}
                                >
                                    Jalur Reguler
                                </Link>
                                <Link
                                    href="/ppdb/afirmasi"
                                    className="block text-primary hover:bg-gray-100 px-4 py-2"
                                    onClick={() => setSidebarOpen(false)}
                                >
                                    Jalur Afirmasi
                                </Link>
                            </div>
                        )}
                    </div>
                    <ButtonComponent
                        text="Login"
                        variant="outline-secondary"
                        size="md"
                        color="secondary"
                        link={"/login"}
                    />
                    <ButtonComponent
                        text="Register "
                        variant="outline-secondary"
                        size="md"
                        color="secondary"
                        link={"/register"}
                    />
                </div>
            </div>
        </nav>
    );
}
