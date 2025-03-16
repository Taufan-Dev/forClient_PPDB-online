import {
    IconMapPin,
    IconPhoneCall,
    IconBrandTwitter,
} from "@tabler/icons-react";

export default function Footer() {
    return (
        <footer className="text-white border-t-4 border-yellow-500 bg-secondary">
            <div className="container mx-auto">
                <div className="px-10 py-8 flex flex-col md:flex-row justify-between gap-8">
                    <div className="md:w-1/3 px-5">
                        <h2 className="text-lg font-semibold">MTs LA TAHZAN</h2>
                        <p className="text-sm leading-relaxed">
                            Madrasah Tsanawiyah berakreditasi B yang berkomitmen
                            mencetak generasi islami yang cerdas, berakhlak, dan
                            siap menghadapi tantangan masa depan dengan ilmu dan
                            iman.
                        </p>
                    </div>
                    <div className="md:w-1/5 px-5">
                        <h3 className="font-semibold text-sm underline underline-offset-4 decoration-white decoration-2 mb-4">
                            Links
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="#beranda"
                                    className="transition-colors hover:text-yellow-500"
                                >
                                    Beranda
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#daftar-reguler"
                                    className="transition-colors hover:text-yellow-500"
                                >
                                    Daftar Jalur Reguler
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#daftar-afirmasi"
                                    className="transition-colors hover:text-yellow-500"
                                >
                                    Daftar Jalur Afirmasi
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/3 px-5">
                        <h3 className="font-semibold text-sm underline underline-offset-4 decoration-white decoration-2 mb-4">
                            Kontak
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-2">
                                <IconMapPin className="w-5 h-5 text-white" />
                                <p className="text-sm leading-relaxed">
                                    KP. Nyompok RT. 07/008 Carenang <br />
                                    Kec. Cisoka Kab. Tangerang Banten
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <IconPhoneCall className="w-5 h-5 text-white" />
                                <p className="text-sm">+62812-1234-1234</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <IconBrandTwitter className="w-5 h-5 text-white" />
                                <p className="text-sm">@MTs La Tahzan</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-10 pb-4">
                    <p className="text-center text-xs text-white mt-4">
                        © 2025 MTs La Tahzan. Semua Hak Dilindungi.
                    </p>
                </div>
            </div>
        </footer>
    );
}
