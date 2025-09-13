<?php

use App\Models\User;

test('guests are redirected to the login page', function () {
    $this->get(route('admin.dashboard'))->assertRedirect(route('login'));
});

test('authenticated users  redirect to the dashboard', function () {
    $this->actingAs($user = User::factory()->create());

    $this->get(route('dashboard'))->assertOk();
});


test('authenticated users can visit the admin dashboard', function () {
    $this->actingAs($user = User::factory()->create([
        'role' => 'admin'
    ]));

    $this->get(route('admin.dashboard'))->assertOk();
});
