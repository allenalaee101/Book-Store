export async function loginRequest(username: string, password: string) {
  const response = await fetch('https://localhost:5001/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })

  if (!response.ok) {
    throw new Error('Invalid credentials')
  }

  return response.json()
}
