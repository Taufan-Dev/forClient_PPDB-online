<?php

namespace Database\Seeders;

use App\Models\Registration;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RegistrationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $registrations = [
            [
                'user_id' => 2,
                'registration_path' => 'reguler',
                'status' => 'diterima',
            ],
            [
                'user_id' => 3,
                'registration_path' => 'afirmasi',
                'status' => 'ditolak',
            ],
        ];

        foreach ($registrations as $registration) {
            Registration::create($registration);
        }
    }
}
