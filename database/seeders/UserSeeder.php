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
        User::factory()->create([
            'name' => 'BWC Admin',
            'username' => 'bwcadmin',
            'email' => 'bwcadmin@bwc.com', // dummy email, not used for login
            'password' => bcrypt('adminbwc123'),
            'user_role' => 'admin',
        ]);
    }
}
