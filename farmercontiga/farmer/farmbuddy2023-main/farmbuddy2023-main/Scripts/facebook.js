window.onload = function () {
    google.accounts.id.initialize({
        client_id: 'YOUR_GOOGLE_CLIENT_ID',
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.querySelector('.g_id_signin'),
        { theme: 'outline', size: 'large' }
    );
    google.accounts.id.prompt();
};
function handleCredentialResponse(response) {
    console.log('Google ID token: ' + response.credential);
}
