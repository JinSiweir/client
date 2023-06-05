import type { LoginInfo, Token } from '@/api/model/userModel';
import { request } from '@/utils/request';

const Api = {
  login: '/auth/login',
  getUserInfo: '/auth/userinfo',
};

export function login(data: LoginInfo) {
  return {
    token: 'asdjkhxkzhad_15+=',
  };
  return request.post<Token>({
    url: Api.login,
    data,
  });
}

export function getUserInfo() {
  return {
    userInfo: {
      avatar: '',
    },
  };
  return request.get({ url: Api.getUserInfo });
}
