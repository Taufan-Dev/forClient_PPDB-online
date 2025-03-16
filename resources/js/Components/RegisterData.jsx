import ButtonComponent from "./Button";

export default function UploadDataPribadi() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-3xl p-6 bg-white shadow-md rounded-lg border border-secondary text-primary">
                <h2 className="text-center text-xl font-semibold mb-6">
                    Upload Data Pribadi
                </h2>
                <form className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium mb-1">Nama Ayah</label>
                        <input type="text" placeholder="Nama Ayah" className="w-full p-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Nama Ibu</label>
                        <input type="text" placeholder="Nama Ibu" className="w-full p-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">No Hp Ayah</label>
                        <input type="text" placeholder="No Hp Ayah" className="w-full p-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">No Hp Ibu</label>
                        <input type="text" placeholder="No Hp Ibu" className="w-full p-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Pekerjaan Ayah</label>
                        <select className="w-full p-2 border rounded-md">
                            <option>Pilih Salah Satu</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Pekerjaan Ibu</label>
                        <select className="w-full p-2 border rounded-md">
                            <option>Pilih Salah Satu</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Upah Ayah</label>
                        <select className="w-full p-2 border rounded-md">
                            <option>Pilih Salah Satu</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Upah Ibu</label>
                        <select className="w-full p-2 border rounded-md">
                            <option>Pilih Salah Satu</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Jarak Rumah Ke Sekolah (KM)</label>
                        <input type="text" placeholder="Jarak Rumah Ke Sekolah (KM)" className="w-full p-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Alamat Rumah</label>
                        <textarea placeholder="Alamat Rumah" className="w-full p-2 border rounded-md h-24"></textarea>
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium mb-1">Asal Sekolah</label>
                        <input type="text" placeholder="Asal Sekolah" className="w-full p-2 border rounded-md" />
                    </div>
                    <div className="col-span-2 flex justify-between mt-4">
                        <ButtonComponent
                            text="Kembali"
                            variant="secondary"
                            size="lg"
                            color="white"
                        />
                        <ButtonComponent
                            text="Daftar Sekarang"
                            variant="secondary"
                            size="lg"
                            color="white"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
