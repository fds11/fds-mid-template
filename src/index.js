import "@babel/polyfill"; // 이 라인을 지우지 말아주세요!

document.querySelector('h1').addEventListener('click', async e => {
  alert('Hello World!');
});
