import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';

const SERVICE_ACCOUNT_EMAIL =
  'andres@vault-591916251577.utilaserviceaccount.io';
const SERVICE_ACCOUNT_PRIVATE_KEY = fs.readFileSync(
  './private_key.pem',
  'utf8'
);

function getAccessToken() {
  const options = <jwt.SignOptions>{
    subject: SERVICE_ACCOUNT_EMAIL,
    audience: 'https://api.utila.io/',
    expiresIn: '1h',
    algorithm: <jwt.Algorithm>'RS256',
  };

  try {
    // const token = jwt.sign(options, SERVICE_ACCOUNT_PRIVATE_KEY, { algorithm: 'RS256' });
    const token = jwt.sign({}, SERVICE_ACCOUNT_PRIVATE_KEY, options);
    return token;
  } catch (error) {
    console.error('Error generating token:', error);
  }
}

export default getAccessToken;
