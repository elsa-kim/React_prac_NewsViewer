#### 전체 뉴스 불러오기

GET https://newsapi.org/v2/top-headlines?country=kr&apiKey=0e4ecf0e4f3f4dff946d9081ab3f2135

#### 특정 카테고리 뉴스 불러오기

GET https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=0e4ecf0e4f3f4dff946d9081ab3f2135

- 카테고리 : business, entertainment, health, science, sports, technology 중 골라서 사용
- 카테고리 생략 시 모든 카테고리의 뉴스 불러옴

### 컴포넌트

- NewsItem : 각 뉴스 정보 보여주는 컴포넌트
- NewsList : API 요청하고 뉴스 데이터가 들어 있는 배열을 컴포넌트 배열로 변환해 렌더링 해주는 컴포넌트

---

## 책과 달라진 내용들

- Route는 Routes로 감싸줘야 함
- component={NewsPage}가 element={<NewsPage />}로 변경됨
- 책에는 const NewsPage = ({match}) => {const category=match.params.category ...} 로 써있는데 useParams()로 params 받아오게 바꿔줌
