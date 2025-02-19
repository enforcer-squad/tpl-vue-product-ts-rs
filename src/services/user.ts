import { client } from '@/utils';
import type { User } from '@/services/types/user';

const login = (): Promise<User> => {
  // client({
  //   url: `/v1/user/login`,
  //   method: 'post',
  //   data: params,
  // });
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ name: 'admin', role: 1, status: 1, userId: 1 });
    }, 1000);
  });
};

const checkLogin = (): Promise<User> => {
  // return client({
  //   url: `/v1/user/checkLogin`,
  //   method: 'get',
  // });
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ name: 'admin', role: 1, status: 1, userId: 1 });
    }, 1000);
  });
};

const logout = () =>
  client({
    url: `/v1/user/logout`,
    method: 'get',
  });

export { login, checkLogin, logout };
