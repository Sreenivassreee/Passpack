
import CryptoJS from "crypto-js";

export const encription = ({ text, password }: { text: string, password: string }) => {
    var ciphertext = CryptoJS.AES.encrypt(text, password).toString();
    return ciphertext;

}
export const decription = ({ etext, password }: { etext: string, password: string }) => {
    try {
        console.log("COMING",{ etext, password })
        var bytes = CryptoJS.AES.decrypt(etext, password);
        var originalText = bytes.toString(CryptoJS.enc.Utf8);
        if(!originalText){
            return false
        }
        return originalText;
    } catch (error) {
        return false
    }

}








// function encrypt(text, password) {
//     var ciphertext = CryptoJS.AES.encrypt(text, password).toString();
//     return ciphertext;
// }

// function decrypt(ciphertext, password) {
//     var bytes = CryptoJS.AES.decrypt(ciphertext, password);
//     var originalText = bytes.toString(CryptoJS.enc.Utf8);
//     return originalText;
// }

// // Example usage:
// const originalText = "This is a secret message.";
// const password = "MySuperSecretPassword";

// // Encrypt the text
// const encryptedText = encrypt(originalText, password);
// console.log('Encrypted:', encryptedText);

// // Decrypt the text
// const decryptedText = decrypt(encryptedText, password);
// if(decryptedText){
// console.log('Decrypted:', decryptedText);
// }
