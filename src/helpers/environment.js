let REACT_APP_API_URL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        REACT_APP_API_URL = 'http://localhost:3500';
        break;
    case 'blue-badge-agora-server.herokuapp.com':
        REACT_APP_API_URL = 'https://blue-badge-agora-server.herokuapp.com'
}

export default REACT_APP_API_URL;