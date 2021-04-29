let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3500';
        break;
    case 'blue-badge-agora-server.herokuapp.com':
        APIURL = 'https://blue-badge-agora-server.herokuapp.com'
}

export default APIURL;