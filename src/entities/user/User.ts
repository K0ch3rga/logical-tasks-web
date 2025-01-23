export type User = {
  firstName: string
  lastName: string
  email: string
  password: string
}

export type JwtUser = {
  role: string
  id: string
  email: string
}
