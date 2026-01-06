<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth.strore'
import { loginRequest } from '@/services/api'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref('')
const auth = useAuthStore()
const router = useRouter()

async function login() {
  try {
    const result = await loginRequest(username.value, password.value)
    auth.login(result.token)
    router.push('/dashboard')
  } catch {
    error.value = 'Login failed'
  }
}
</script>

<template>
  <div>
    <h2>Login</h2>

    <input v-model="username" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />

    <button @click="login">Login</button>

    <p v-if="error">{{ error }}</p>
  </div>
</template>
