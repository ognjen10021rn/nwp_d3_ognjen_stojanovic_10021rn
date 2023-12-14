export interface User {
  userId: number,
  username: string,
  can_read_users: boolean,
  can_create_users: boolean,
  can_update_users: boolean,
  can_delete_users: boolean,
}

export interface Jwt {
  jwt: string
}
