import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
// import App from './containers/App';
import routes from './routes.js';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();