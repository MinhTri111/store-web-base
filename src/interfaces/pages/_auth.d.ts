declare namespace Auth {
  export interface LoginState {
    isLoading: boolean;
    getMeLoading: boolean;
    error: any;
    meInfo: MeInfo | null;
  }

  export interface LoginRequestData {
    username: string;
    password: string;
  }

  export interface ResponseRegister {
    id: number;
    created: string;
    password: string;
    status: string;
    username: string;
  }

  export interface LoginRequestPayload {
    data: LoginRequestData;
    callback?: () => void;
  }

  export interface MeInfo {
    address?: string | null;
    date?: string | null;
    education?: string | null;
    email?: string | null;
    gender?: number | null;
    isActive?: boolean | null;
    job?: string | null;
    name?: string | null;
    phoneNumber?: string | null;
    role?: number | null;
    _id?: string;
    token?: string;
    refresh_token?: string;
    isLogin?: boolean;
    isLoading?: boolean;
    error?: any;
  }
}
