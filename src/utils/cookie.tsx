import { CookieName } from '../enums/index';

export default class Cookie {
  public static set = (name: string, value: string, expiry: number): void => {
    const date = new Date();
    date.setTime(date.getTime() + (expiry * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  };

  public static get = (name: string): string => {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(';');
    let cookie: string = '';

    cookies.forEach(item => {
      if (item.substring(0, cookieName.length) === cookieName) {
        cookie = item;
      };
    });

    return cookie;
  };

  public static getToken = (): string => {
    let token = Cookie.get(CookieName.TOKEN);
    return token.substring(CookieName.TOKEN.length + 1, token.length);
  };
};
