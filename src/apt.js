import { base64urlENCODE } from "./base64url.js";
import { base64urlDECODE } from "./base64url.js";
import {hmacSHA256} from "./utlis.js";


export class APT{


  static sign(payload, secret){
     const header ={
      "alg": "HS256",
      "typ" : "APT"
     }
 const encodedHeader = base64urlENCODE(JSON.stringify(header));
const encodedPayload = base64urlENCODE(JSON.stringify(payload));

     const data = `${encodedHeader}.${encodedPayload}`
     const secHASH = hmacSHA256(data ,secret);
     const token = `${data}.${secHASH}`

     return token;
  }
 static verify(token, secret){
    const [header , payload , signature ]  = token.split(".");
    const data  = `${header}.${payload}`
    const expectedsign = hmacSHA256(data , secret);

    if(expectedsign != signature){
      return false;
    }

    return true;
  }
  static decode(token){
      const [header , payload] = token.split(".")
      return {
        header : JSON.parse(base64urlDECODE(header)),
        payload : JSON.parse(base64urlDECODE(payload))
      }
    }
}
