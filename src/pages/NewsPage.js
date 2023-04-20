import React from 'react';
import { useParams } from '../../node_modules/react-router-dom/dist/index';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = () => {
  // 카테고리 선택되지 않았으면 기본값 all로 사용
  let { category } = useParams();
  return (
    <>
      <Categories />
      <NewsList category={category ? category : 'all'} />
    </>
  );
};

export default NewsPage;
