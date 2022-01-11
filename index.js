module.exports = {
    encryptCard (adyenVersion, adyenkey, cardNumber, cardMonth, cardYear, cardCVV) {
        const adyenEncrypt = require("node-adyen-encrypt")(adyenVersion);
        const adyenKey = adyenkey;
        const options = {};
        const cardData = {
          number: cardNumber,
          generationtime: new Date().toISOString(),
        };
        const cseInstance = adyenEncrypt.createEncryption(adyenKey, options);
        cseInstance.validate(cardData);
        const dataEncrypted = cseInstance.encrypt(cardData);

        const cardData2 = {
          expiryMonth: cardMonth,
          generationtime: new Date().toISOString(),
        };
        const cseInstance2 = adyenEncrypt.createEncryption(adyenKey, options);
        cseInstance2.validate(cardData2);
        const dataEncrypted2 = cseInstance2.encrypt(cardData2);

        const cardData3 = {
          expiryYear: cardYear,
          generationtime: new Date().toISOString(),
        };
        const cseInstance3 = adyenEncrypt.createEncryption(adyenKey, options);
        cseInstance3.validate(cardData3);
        const dataEncrypted3 = cseInstance3.encrypt(cardData3);

        const cardData4 = {
          cvc: cardCVV, //'xxx'
          generationtime: new Date().toISOString(),
        };
        const cseInstance4 = adyenEncrypt.createEncryption(adyenKey, options);
        cseInstance4.validate(cardData4);
        const dataEncrypted4 = cseInstance4.encrypt(cardData4);

        var encryptedCard = {
          cardNumber: dataEncrypted,
          cardMonth: dataEncrypted2,
          cardYear: dataEncrypted3,
          cvv: dataEncrypted4
        };

        return encryptedCard;
    }
}