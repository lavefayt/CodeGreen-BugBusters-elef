export interface UserLogin {
  email: string;
  password: string;
}

export interface User {
  accessToken: string;
  isAdmin: boolean;
}

export interface AuthContextType {
  auth?: User | undefined;
  setAuth?: React.Dispatch<React.SetStateAction<{}>> | undefined;
}
