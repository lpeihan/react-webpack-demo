export function leftpad(str, len, ch = ' ') {
  str = `${str}`;

  for (let i = str.length; i < len; i++) {
    str = ch + str;
  }

  return str;
};

export const cookie = {
  set(name, value, date) {
    const expirey = date instanceof Date ? '; expires=' + date : null;
    const cookie = [
      name,
      '=',
      JSON.stringify(value),
      '; domain_.',
      window.location.host.toString(),
      '; path=/;',
      expirey
    ].join('');
    document.cookie = cookie;
  },
  get(name) {
    let result = document.cookie.match(new RegExp(name + '=([^;]+)'));
    return result !== null ? JSON.parse(result[1]) : null;
  },
  remove(name) {
    document.cookie = [
      name,
      '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain.',
      window.location.host.toString()
    ].join('');
  }
};
