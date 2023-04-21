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

### 책과 달라진 내용들

- Route는 Routes로 감싸줘야 함
- component={NewsPage}가 element={<NewsPage />}로 변경됨
- 책에는 const NewsPage = ({match}) => {const category=match.params.category ...} 로 써있는데 useParams()로 params 받아오게 바꿔줌

---

## 비동기 작업

- 웹 애플리케이션 만들다 보면 처리할 때 시간 걸리는 작업 동기적으로 처리하면 요청 끝날 때까지 기다리는 동안 중지 상태 됨 => 비동기적으로 처리하면 웹 애플러케이션 멈추지 않고 동시에 여러가지 요청 처리할 수 있고, 기다리는 동안 다른 함수 호출 가능

### 콜백함수

- 함수 자체를 인자로 전달
- 여러번 중첩시 코드의 가독성 나빠짐

### Promise

- 콜백 지옥 형성 방지 ES6에 도입된 기능
- 3가지 상태 가짐(State) : promise의 처리 과정 의미
  - pending(대기) : 비동기 로직 처리의 미완료 상태
    - new Promise();와 같이 Promise 객체 생성하면 대기 상태 됨
    - new Promise((resolve,reject)=>{});와 같이 new Promise() 메서드 호출 시 콜백 함수 선언 가능, 인자는 resolve와 reject
  - Fulfilled(이행) : 비동기 로직 처리가 완료된 상태로 Promise 결과값 반환 상태
    - 콜백 함수 인자인 resolve 실행하면 이행된 상태(완료된 상태) 됨
    - 이행 상테 되면 then() 활용해 결과값 받을 수 있음
    - then() 메서드 호출되면 새로운 Promise 객체 반환, then() 메서드 활용 개수 제한 없음
  - Rejected(실패) : 비동기 로직 처리의 실패 또는 오류 상태
    - Promise 객체의 인자 reject 호출 시 실패 상태 됨
    - 실패 상태 되면 catch() 활용해 결과값 받고 예외처리 할 수 있음

### async / await

- Promise 더 쉽게 사용할 수 있도록 해주는 ES8 문법
- 함수 앞부분에 ssync 키워드 추가, 해당 함수 내부에서 Promise 앞부분에 await 키워드 추가해 Promise가 끝날 때까지 기다리고, 결과값을 특정 변수에 담을 수 있음
- try/catch로 에러 핸들링
