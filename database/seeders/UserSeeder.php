<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::updateOrCreate(
            [
                'email' => 'bwcadmin@bwc.com',
            ],
            [
                'name' => 'BWC Admin',
                'username' => 'bwcadmin',
                'password' => bcrypt('adminbwc123'),
                'user_role' => 'admin',
            ]
        );
    }
}
