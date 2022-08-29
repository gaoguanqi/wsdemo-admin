export type RoleType = "" | "*" | "admin" | "user";
export interface UserState {
  userId?: string;
  phone?: string;
  userName?: string;
  nikeName?: string;
  avatar?: string;
  token?: string;
  role?: RoleType;
}
