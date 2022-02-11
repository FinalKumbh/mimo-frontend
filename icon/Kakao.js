const {
  Kakao
} = window;
Kakao.Auth.authorize({
  redirectUri: 'http://localhost:3000/kakao'
});