const crypto = require("crypto");

const base64URLEncode = (str) =>
  str
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");

const sha256 = (buffer) => crypto.createHash("sha256").update(buffer).digest();

const codeVerifier = base64URLEncode(crypto.randomBytes(32));

const codeChallenge = base64URLEncode(sha256(codeVerifier));
const state = Math.random().toString(36).substring(7);

console.log(`State: ${state}`);
console.log(`Code challenge: ${codeChallenge}`);
console.log(`Code verifier: ${codeVerifier}`);
console.log(
  `Full URL: https://www.etsy.com/oauth/connect?response_type=code&redirect_uri=https://1c7f-205-164-155-16.ngrok.io/callback&scope=email_r&client_id=uk855u6gacrhwkoc6e4f8lxr&state=${state}&code_challenge=${codeChallenge}&code_challenge_method=S256`
);
