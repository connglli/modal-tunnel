import dva from 'dva';
import ModalModel from './modal-tunnel/model/index';
import ExampleModel from './models/example';
import RouterConfig from './router';
import './index.scss';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(ModalModel);
app.model(ExampleModel);

// 4. Router
app.router(RouterConfig);

// 5. Start
const App = app.start();

export default App;
