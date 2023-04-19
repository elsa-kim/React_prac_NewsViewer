import React from 'react';
import { Route } from '../node_modules/react-router-dom/dist/index';
import NewsPage from './pages/NewsPage';

const App = () => {
  // /:category?와 같이 맨 뒤 물음표 문자 들어가있으면 category값이 선택적이라는 의미
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
