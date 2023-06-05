export interface LoginInfo {
  username: string;
  password: string;
}
export interface Token {
  token: string;
}

export interface CreateAdmin {
  username: string;
  password: string;
  confirmPassword: string;
}

export interface UpdateAdmin {
  id: number;
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export interface AdminListResult {
  list: Array<Admin>;
  total: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
}
export interface Admin {
  id: number;
  username: string;
  superAdmin: boolean;
  active: boolean;
  createTime: string;
  updateTime: string;
  role: string;
}
