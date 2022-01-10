# Easy Adyen Encryption
Easily encrypt card information using Adyen in one function.
## Usage
```js
const easyAdyen = require("easy-adyen-encrypt");
var version = 18; //Adyen Version
var key = "KEY"; //Adyen Encryption Key
var card = "4444 4444 4444 4444" //Card Number, must be in XXXX XXXX XXXX XXXX format
var month = "01" //Card Expiration Month, must be in MM format
var year = "2024" //Card Expiration Year, must be in YYYY format
var cvv = "123" //Card CVV, must be in XXX format
var encryptedCard = easyAdyen.encryptCard(version, key, card, month, year, cvv)
console.log(encryptedCard)
```
Returns an `encryptedCard` object
```json
{
   cardNumber:"encryptedCardNumber",
   cardMonth: "encryptedCardMonth",
   cardYear: "encryptedCardYear",
   cvv: "encryptedCVV"
}
```