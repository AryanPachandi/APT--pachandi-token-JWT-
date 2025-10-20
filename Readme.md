# PachandiToken (APT) – Minimal JWT Library in JavaScript

A simple JWT library in JavaScript for signing, verifying, and decoding tokens using **HS256**.

---

## Installation

```bash
npm install pachanditoken
```

---

## Usage

```js
import { APT } from "pachanditoken";

// 1️⃣ Sign a payload
const token = APT.sign({ user: "Aryan" }, "mysecret");
console.log("Token:", token);

// 2️⃣ Verify the token
const isValid = APT.verify(token, "mysecret");
console.log("Valid:", isValid);

// 3️⃣ Decode the token (without verifying)
const decoded = APT.decode(token);
console.log("Decoded:", decoded);
```

---

## Features

* Sign payloads with HS256
* Verify JWT tokens
* Decode JWT tokens (header & payload)
* Small, lightweight, and ES module compatible

---

## Notes

* This library is **for learning and small projects**.
* Do **not use in production** without proper auditing for security.
* Tokens generated are **HS256 only**.


