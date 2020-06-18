import React from 'react';
import {Provider} from 'react-redux'
import {ConfigureStore} from '../src/redux/store'
import Main from '../src/components/main';
import './App.css';
const store = ConfigureStore();
function App() {
  return (
    <Provider store={store}>
        <div className="App">
      <Main />
      </div>
    </Provider>
  
  );
}

export default App;
