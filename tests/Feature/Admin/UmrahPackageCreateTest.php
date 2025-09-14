<?php

use App\Models\User;

it('guest cannot visit umrah create page', function () {
    $this->get(route('admin.umrah.create'))->assertRedirect(route('login'));
});

it('user cannot visit umrah create page', function () {
    $this->get(route('admin.umrah.create'))->assertRedirect(route('login'));
});

it('admin can visit umrah create page', function () {
    $this->actingAs($user = User::factory()->create([
        'role' => 'admin'
    ]));

    $this->get(route('admin.umrah.create'))->assertOk();
});
