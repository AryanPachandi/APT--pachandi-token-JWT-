import crypto from "crypto";

export function hmacSHA256(data , secret){
  return crypto
  .createHmac("sha256", secret)
    .update(data)
    .digest("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}
