# FDS 9기 해커톤 템플릿 프로젝트

이 프로젝트는 해커톤에서 템플릿으로 사용할 수 있는 프로젝트입니다. 빌드 도구로 [Parcel](https://parceljs.org/)을 사용하고 있으며, [create-react-app](https://github.com/facebook/create-react-app)에서 사용하는 [Babel](http://babeljs.io/) 프리셋인 [babel-preset-react-app](https://github.com/facebook/create-react-app/tree/master/packages/babel-preset-react-app)을 통해 여러 최신 문법을 사용할 수 있도록 설정되어 있습니다.

## 해커톤 주제

- 턴제 보드게임
  - [숫자야구](./docs/number-baseball.md)
  - [15 퍼즐](./docs/15-puzzle.md)
  - 오목

## 해커톤 채점 기준

- **버그**가 없는지
- 코드가 얼마나 **깔끔**한지 (코드 중복은 없는지, 파일이 잘 나뉘어져 있는지, 코드가 읽기 쉬운지...)
- **도움말**이 얼마나 친절한지
- **눈을 사로잡는 부분**이 있는지 (애니메이션!)
- **팀원 간 기여도**가 얼마나 비슷한지
- Git **커밋 메시지**가 얼마나 깔끔한지


## 프로젝트 관련 명령

- `npm install` - 프로젝트 실행에 필요한 파일을 설치하는 명령. 프로젝틑 최초 실행 시 반드시 실행해주어야 합니다.
- `npm start` - 개발용 서버를 실행시키는 명령
- `npm run build` - Netlify 등의 호스팅 서비스에서 사용할 수 있는 HTML, CSS, JS 파일을 생성해주는 명령. `dist` 폴더에 파일이 생성됩니다.

## 추가 과제

틱택토 혹은 구현하신 퍼즐을 풀이하는 **알고리즘**을 만들어보세요.
