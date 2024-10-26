import { Model } from "mongoose";

type TRole = "admin" | "user";

export interface TUser {
  name: string;
  email: string;
  password: string;
  role: TRole;
}

export interface AuthStaticMethods extends Model<TUser> {
  isUserExist(email: string): Promise<TUser>;
  isPasswordMatch(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
