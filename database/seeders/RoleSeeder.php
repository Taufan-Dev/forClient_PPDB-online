<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminRole = Role::firstOrCreate(['name' => 'admin']);
        $userRole = Role::firstOrCreate(['name' => 'student']);

        $admin = User::where('name', 'Admin')->first();
        $user1 = User::where('name', 'User 1')->first();
        $user2 = User::where('name', 'User 2')->first();

        $admin->assignRole($adminRole);
        $user1->assignRole($userRole);
        $user2->assignRole($userRole);
    }
}
