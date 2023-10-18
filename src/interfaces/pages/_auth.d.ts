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
    created: string;
    id: number;
    status: string;
    username: string;
  }
}
