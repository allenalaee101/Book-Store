<script setup lang="ts">
import { useAuthStore } from '@/stores/auth.strore'
const auth = useAuthStore()
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <button @click="auth.logout()">Logout</button>
  </div>
</template>
