import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '@/store/index'
import { Redirect } from '@/hook/Redirect';

const Register = lazy(() => import('@/views/Register'));
const Login = lazy(() => import('@/views/Login'));
const Home = lazy(() => import('@/views/Home'));
const About = lazy(() => import('@/views/About'));

const App = () => (
  <Provider store = { store }>
    <Router>
      <Suspense fallback={<div>Loading。。。</div>}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Redirect to='/home' replace />} />
        </Routes>
      </Suspense>
    </Router>
  </Provider>
);

export default App;