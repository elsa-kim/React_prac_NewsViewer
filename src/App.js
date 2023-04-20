import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  // /:category?와 같이 맨 뒤 물음표 문자 들어가있으면 category값이 선택적이라는 의미
  return (
    <Routes>
      <Route path="/:category?" element={<NewsPage />} />;
    </Routes>
  );
};

export default App;
