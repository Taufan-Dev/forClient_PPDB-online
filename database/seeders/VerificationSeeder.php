<?php

namespace Database\Seeders;

use App\Models\Verification;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VerificationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $verifications = [
            [
                'document_id' => 1,
                'admin_id' => 1,
                'status' => 'diverifikasi',
                'message' => 'Dokumen sudah sesuai',
                'verified_at' => now(),
            ],
            [
                'document_id' => 2,
                'admin_id' => 1,
                'status' => 'ditolak',
                'message' => 'Dokumen tidak sesuai',
                'verified_at' => now(),
            ],
        ];

        foreach ($verifications as $verification) {
            Verification::create($verification);
        }
    }
}
