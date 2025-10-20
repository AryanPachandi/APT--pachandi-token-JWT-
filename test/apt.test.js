import { APT } from "../index.js";

const secret = "aryan";
const token =  APT.sign({"1": " example"} , secret);
const verify = APT.verify(token , secret);
const decode = APT.decode(token);

console.log(token);
console.log(verify);
console.log(decode);



