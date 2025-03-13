<?php

namespace Database\Seeders;

use App\Models\UserDetail;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $userDetails = [
            [
                'user_id' => 2,
                'father_name' => 'User 1',
                'mother_name' => '',
                'phone_number' => '081234567890',
                'father_job' => 'pegawai',
                'mother_job' => 'IRT',
                'parent_salary' => 5000000,
                'school_origin' => 'SMPN 1',
                'school_expense' => 5000,
                'distance' => 5,
                'address' => 'Jl. Jendral Sudirman No. 1',
            ],
            [
                'user_id' => 3,
                'father_name' => 'User 2',
                'mother_name' => '',
                'phone_number' => '081234567890',
                'father_job' => 'pegawai',
                'mother_job' => 'IRT',
                'parent_salary' => 5000000,
                'school_origin' => 'SMPN 1',
                'school_expense' => 5000,
                'distance' => 5,
                'address' => 'Jl. Jendral Sudirman No. 1',
            ],
        ];

        foreach ($userDetails as $userDetail) {
            UserDetail::create($userDetail);
        }
            
    }
}
