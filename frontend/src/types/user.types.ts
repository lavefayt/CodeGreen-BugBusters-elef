export interface UserLogin {
  email: string;
  password: string;
}

export interface User {
  accessToken: string;
  isAdmin: boolean;
  id: string;
}

export interface AuthContextType {
  auth?: User | undefined;
  setAuth?: React.Dispatch<React.SetStateAction<{}>> | undefined;
}

export interface UserSignUp {
  last_name: string;
  first_name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface UserData {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  salt?: string;
  refresh_token?: string;
  created_at?: string;
  last_login?: string;
  is_admin?: boolean;
}
