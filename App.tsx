import {Provider} from 'react-redux';
import store from './Redux/store';
import Home from './Components/Home';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
