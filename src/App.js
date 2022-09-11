import './App.css';
import 'antd/dist/antd.css';
import './index.css';
import React, { lazy, Suspense } from 'react'
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux"
import store from "./store"

const AppRouter = lazy(() => import('./routes'))

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div className={'text-center mt-3'}>Loading Please Wait....</div>}>
          <AppRouter />
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
