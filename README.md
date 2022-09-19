<br>

# 💕 웹 포트폴리오 (by Anne)
프론트엔드 개발자로서의 첫 걸음! 포트폴리오 웹페이지
<br>

완성작 보러가기 🔍
<h3> https://anne-hyeyeon.github.io/portfolio_anne </h3>

<br />

## ✔️ 프로젝트 개요
### `진행 동기` 
- 원래는 9월까지 노마드코더 마스터클래스 강의를 완강하려고 했다. 
- 하지만 주변 개발자 분들이 '신입 개발자는 모든 게 완벽하려는 욕심부터 내려놓아야 한다.'라는 조언을 많이 해주셨다. 난 아직 준비가 안 된 것 같은데... 😞
- 그러나... 알고 있었다. 준비가 안 된 것 같다고 죽을 때까지 인강만 들을 수 없다는 사실을.
- 리액트 + 스타일 컴포넌트와 타입스크립트 기초 공부까지는 완료한 상태. 이 상황에서 강의를 완강할지, 어떻게든 준비해서 입사지원을 시작할지 고민이 되었다.
- 그러던 도중 선배 개발자님께서 입사 지원의 기회를 주셨다! 이건 포트폴리오를 어떻게든 만들어보라는 하나님의 계시 🤩
- 하지만 주어진 시간은 단 3일... 시간이 없는 만큼 노션으로 포트폴리오를 만들어볼까? 고민도 했지만...
- <h4> 마!!! 프론트엔드 개발자인데 포트폴리오 웹페이지 정도는 스스로 만들어야지!!! </h4> 라는 생각에 제작 강행 👍 후회는 없다.


### `진행 기간`
2022.09.10 ~ 2022.09.13 (해피추석)

### `작업자`
김혜연😜

### `사용 기술 및 개발환경`
- 개발환경 : PC (Mac)
- 개발도구 : VSC
- 개발언어 및 라이브러리, 프레임워크 : HTML, CSS, javascript, REACT, Material UI

<br />

## ✔️ Point
🌸 김혜연을 궁금하게 만드는, 깔끔한 포트폴리오를 만드는 게 목표 🌸
🌸 모바일 반응형 🌸


### `컨셉, 방향성`
- 회색, 네이비색 조합으로 `깔끔한` 포트폴리오 완성
- `MUI` (내가 가장 좋아하는 디자인 라이브러리) 컴포넌트 최대한 활용하기
- But 템플릿을 그대로 이용하면, 정적인 홈페이지가 되므로 `동적인 효과`를 과하지 않은 선에서 넣어본다.
- 프론트엔드 개발자로서의 역량(`디자인 감각`, `배우고자 하는 자세`, `문제 해결 능력`) 이 잘 드러나게끔 만들기
- 비전공자에다가 개발 업무 경험이 없지만 `안 데려가면 후회할` 나라는 인재를, 최대한 돋보일 수 있는 포트폴리오 만들기 👊 

<br />

### `사용한 라이브러리`
- React Slick (strong point)
- React Reveal (스크롤 효과)
- React scroll section (클릭시 스크롤 이동)
- prop-types (타입 체크)
- material UI (디자인, 컴포넌트, 테마)

<br />

## ✔️ 오류 수정
### `오류 1.` index.js:1 Warning: Received 'true' for a non-boolean attribute `d`.
- 해석해보면, 불리언을 받을 수 없는 attr 'd'에 true가 와 있음. 
1) 해당 오류가 일어난 부분 찾기 -   at ExampleCard  보고 ExampleCard 컴포넌트가 사용된 파일 찾아냄
2) ExampleCard 가 사용된 파일은 Projects.js밖에 없음
3) Projects.js 안에 들어가보니
```js
<ExampleCard image={image} name={name} display="grid" minHeight="auto" d />
```
이렇게 맨 뒤에 d라는 오타가 들어가 attr로 인식되고 있는 걸 확인함!

4) 삭제..문제 해결

<br />

### `오류 2.` validateDOMNesting(...) : div cannot appear as a descendant of p.

 - div는 p의 자식 요소로 들어갈 수 없음
  
at Stack (http://localhost:3000/portfolio_anne/static/js/vendors~main.chunk.js:283849:91)
at p
at Typography (http://localhost:3000/portfolio_anne/static/js/vendors~main.chunk.js:293632:91)
  

1) 처음에 이거 보고 Stacks.js에서 오류가 일어났나? 했는데.. MUI의 Stack 컴포넌트였다. (바보)
2) 해당 오류가 일어난 Projects 파일로 이동!
3)
```js
<MKTypography variant="body2" mt={1}>
  {description}
</MKTypography>
```
  
해당 파일에서 stack 컴포넌트 쓰고 있는 부분은 이 부분 뿐인데...아니나 다를까 저 부분을 삭제해보니 해당 오류 안 일어남!
  
data파일의 description 정보 안에 있는 Stack 컴포넌트 (div)가 description을 감싸고 있는 Typography 컴포넌트 (p)와 충돌한 것
  
4) Typography를 Box (div)로 바꾸니 해결~! 오예 

* 비슷한 오류로 validateDOMNesting(...): h5 cannot appear as a descendant of p. 가 있었음; 타이포그라피 안에 쓰잘데기 없는 거 제발 넣지말자!!

<br />
<br />

 
### `오류 3.` index.js:1 Warning: Received 'true' for a non-boolean attribute 'container'.
- 불리언이 아닌 attr 'container'에 true 값이 감지되었다!!
1) 오류 발생한 부분 찾기 (StrongPoints.js)
2) 단독으로 덩그러니 들어가 있는 container attr 찾기 (왜냐하면, 불리언 값이 아닌데 true 가 잡혔다는 오류가 떴기 때문! 단독으로 오면 안되는 attr 하나가 덩그러니 있을 가능성이 큼)
3) Box안에 있는 container attr 지움
4) 삭제 -> 문제 해결됨

<br />
 
### `오류 4.` Failed prop type: The prop 'description' is marked as required in 'DefaultInfoCard', but its value is 'undefined'.
 - DefaultInfoCard 컴포넌트에는 prop 'description'이 필요하나, undefined다.
 
 이 오류는... 내가 DefaultInfoCard의 desc 부분을 쓸 때 - 줄바꿈이 안 되는 걸 확인하고 사용하지 않기로 결심. desc prop을 제거한 게 원인이 되어 일어났다. 

 1) DefaultInfoCard의 컴포넌트 원본파일 들어감
 2) description이 출력되는 부분 모두 삭제함. 따라서 이 컴포넌트는 description이 필수 props가 아니게 됨. 
 3) 오류 해결 
 
 * 그냥 아이콘 + 타이포그래피 사용하면 될 걸 굳이 카드 컴포넌트를 가져와서 이 사단이 났다...

 <br />
 <br />
  
## ✔️ 사용한 기술, 프로젝트를 통해 얻은 지식
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- 사실 포폴 사이트 구성 자체는 정말 간단해 보이지만... 심각할 정도로 많은 `문제`들에 봉착했었다.
- 우선... 디자인 라이브러리가 현재 리액트 버전과 계속 충돌해서 오류 수정을 엄청나게 했다. (업그레이드가 얼마나 무서운(?) 건지 요즘들어 더 체감하는 중)
- 무엇보다 `디자인`에 매우 매우 x10000 신경써야 하는, 포폴 프로젝트인 만큼 가운데 정렬과 마진 하나하나가 다 신경 쓰이는데! 생각보다 이거 맞추는 게 너무 어려웠다. 기본기의 중요성을 다시 한 번 깨닫고 눈물을...
- 내가 몰랐던 다양한 `라이브러리`를 사용해 볼 수 있어서 좋았다. 특히 Slick, Reveal 같은 건 아주 대중적으로 사용되는 거라 미리 익혀놓으면 좋을 것 같다.
- 내가 사용했던 Mui kit 에 `eslint`와 `prettier`가 적용되어 있어... 이 두 친구들의 무서움을 미리 맛보게 되었다. (물론 중요성도.) 부끄럽지만 이렇게 깔끔하게 코드 쓴 건 처음이다...
- github pages로 배포하면서 npm build, deploy 에 대한 지식을 얻게 되었다.



회사를 다니면서, 시간이 날 때 (강의에서 만드는 작품 말고) 개인 프로젝트를 꼭 진행해야겠다고 다짐했었다. 하지만 현실은.... 과제 따라가기도 벅참.
수많은 프로젝트를 통해 내 실력을 딱! 증명하는 포트폴리오가 아닌 점은 아쉽지만, 신입 개발자로서 최선을 다했다.
그리고 나는 내 스토리가 가진 힘을 믿는다.
이 포트폴리오를 통해 나와 꼭 맞는 회사를 찾을 수 있을 거라고 확신한다.

<br />
<br />
