<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'Admin',
                'email' => 'admin@gmail.com',
                'password' => bcrypt('foobarrr'),
            ],
            [
                'name' => 'User 1',
                'email' => 'user1@gmail.com',
                'nisn' => '1234567890',
                'password' => bcrypt('foobarrr'),
            ],
            [
                'name' => 'User 2',
                'email' => 'user2@gmail.com',
                'nisn' => '0987654321',
                'password' => bcrypt('foobarrr'),
            ],
        ];

        foreach ($users as $user) {
            User::create($user);
        }
    }
}
