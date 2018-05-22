# FDS 9기 중간 프로젝트 템플릿

이 저장소를 중간 프로젝트에서 템플릿으로 사용할 수 있습니다. 빌드 도구로 [Parcel](https://parceljs.org/)을 사용하고 있으며, [create-react-app](https://github.com/facebook/create-react-app)에서 사용하는 [Babel](http://babeljs.io/) 프리셋인 [babel-preset-react-app](https://github.com/facebook/create-react-app/tree/master/packages/babel-preset-react-app)을 통해 여러 최신 문법을 사용할 수 있도록 설정되어 있습니다.

## npm 명령

- `npm install` - 프로젝트 실행에 필요한 파일을 설치하는 명령. 프로젝틑 최초 실행 시 반드시 실행해주어야 합니다.
- `npm start` - 개발용 서버를 실행시키는 명령
- `npm run build` - Netlify 등의 호스팅 서비스에서 사용할 수 있는 HTML, CSS, JS 파일을 생성해주는 명령. `dist` 폴더에 파일이 생성됩니다.

## 저장소 복사하기

**Github의 fork 기능으로는 계정 당 저장소 하나밖에 복사하지 못합니다.** Fork 기능을 사용하지 않고 프로젝트를 복사하려면, 아래의 절차대로 해 주세요.

1. Github에서 비어있는 새 저장소를 만들어주세요.
1. 터미널에서 아래의 명령을 순서대로 실행해주세요. (여기서, `<old-user>/<old-repo>`를 복사하려고 하는 저장소 경로로, `<new-user>/<new-repo>`를 방금 생성한 저장소 경로로 바꿔주세요.)
  - `git clone --bare git@github.com:<old-user>/<old-repo>.git`
  - `cd <old-repo>.git`
  - `git push --mirror git@github.com:<new-user>/<new-repo>.git`
  - `cd ..`
  - `rm -rf <old-repo>.git`
1. 이제 Github에 저장소에 복사되었습니다. 위 절차를 반복해서 여러 개의 복사본을 만들 수 있습니다.
