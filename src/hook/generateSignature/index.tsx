import CryptoJS from 'crypto-js';

export const generateSignature = (
  method: string,
  path: string,
  body?: any,
  secret?: string
) => {
  const signstr = method + path + JSON.stringify(body) + secret;

  return CryptoJS.MD5(signstr).toString();
};
export const generateSign = (method: string, path: string, secret?: string) => {
  const signstr = method + path + secret;

  return CryptoJS.MD5(signstr).toString();
};
