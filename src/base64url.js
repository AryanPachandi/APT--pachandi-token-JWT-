export function base64urlENCODE(input){
    return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

export function base64urlDECODE(input) {
  if (!input || typeof input !== "string") {
    throw new Error("Invalid input for base64url decode");
  }

  input = input.replace(/-/g, "+").replace(/_/g, "/");
  while (input.length % 4) {
    input += "=";
  }

  return Buffer.from(input, "base64").toString();
}
