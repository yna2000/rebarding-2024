function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict`;
}

function getCookie(name) {
    const keyValue = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return keyValue ? keyValue[2] : null;
}

function checkCookiesAccepted() {
    return getCookie('cookiesAccepted') === 'true';
}

function showCookiesPopup() {
    const cookiesPopup = document.getElementById('cookies-popup');
    cookiesPopup.classList.remove('hide');
    cookiesPopup.classList.add('show');
}

