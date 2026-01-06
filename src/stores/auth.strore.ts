import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') as string | null,
    isAuthenticated: !!localStorage.getItem('token')
  }),

  actions: {
    login(token: string) {
      this.token = token
      this.isAuthenticated = true
      localStorage.setItem('token', token)
    },

    logout() {
      this.token = null
      this.isAuthenticated = false
      localStorage.removeItem('token')
    }
  }
})
