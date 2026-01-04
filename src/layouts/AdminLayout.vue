<template>
    <div class="admin-layout">
        <header>
            <h2>
                Admin Panel
            </h2>
            <nav>
                <router-link to="/">Dashboard</router-link>
            </nav>
        </header>
        
        <main>
            <router-view />
        </main>
    </div>
</template>