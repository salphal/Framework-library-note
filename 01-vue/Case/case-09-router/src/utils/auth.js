function isLogin() {

    return document.cookie.includes('login=true');
}

function login() {

    const expireDay = 147,
        date = new Date();

    date.setTime(date.getTime() + expireDay * 1000 * 24 * 60 * 1000);

    document.cookie = `login=true; expires=${date.toGMTString()}`;
}

function cancelLogin() {

    const date = new Date();

    date.setTime(date.getTime() - 10000000);

    document.cookie = `login=true; expires=${date.toGMTString()}`;
}

export default {

    isLogin,
    login,
    cancelLogin
}