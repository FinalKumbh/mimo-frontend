const CLIENT_ID = "xWfAwX1EXpNzJNjnP5Na8DAHYVTFTBHj";
const REDIRECT_URI =  "http://localhost:3000/pages/callback/kakao";
 

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id={REST_API_KEY}&redirect_uri={REDIRECT_URI}
`;