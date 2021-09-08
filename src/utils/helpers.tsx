import { CookieName, Credentials, SortOption, Server } from './index';

export class Cookie {
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

export class QueryApi {
  public static token = (credentials: Credentials, setAuthentication: Function): void => {
    fetch("https://playground.tesonet.lt/v1/tokens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(response => response.json())
      .then(response => {
        if (response.message === 'Unauthorized') {
          setAuthentication(true);
        } else {
          setAuthentication(false);
          Cookie.set(CookieName.TOKEN, response.token, 1);
        };
      })
      .catch(error => console.warn(error));
  };

  public static data = (setSorted: Function): void => {
    fetch("https://playground.tesonet.lt/v1/servers", {
      headers: {
        authorization: Cookie.getToken()
      }
    })
      .then(response => response.json())
      .then(data => {
        setSorted(Sort.object(SortOption.NAME, data));
      })
      .catch(error => console.warn(error));
  };
};

export class Sort {
  public static object = (type: SortOption.DISTANCE | SortOption.NAME, data: Array): Array<Server> => {
    let sortedArray: Array<Server> = [];

    if (type === SortOption.DISTANCE) {
      sortedArray = data.sort((a, b) => (a.distance - b.distance));
    };

    if (type === SortOption.NAME) {
      sortedArray = data.sort((a, b) => {
        let aName = a.name.toLowerCase();
        let bName = b.name.toLowerCase();

        if (aName < bName) return -1;
        if (aName > bName) return 1;
        return 0;
      });
    };

    return sortedArray;
  };
}
