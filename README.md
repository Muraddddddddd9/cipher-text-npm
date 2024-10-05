# **TextCipher**

[Link to npm](https://www.npmjs.com/package/cipher-text "GO NPM")
-----------

### **Create an object with data *char*, *number*, *specialChar*, *size*** 

```js
    const {Data_Object_Name} = {
        char: "{your letters}", // Required variable
        number: "{your numbers}", // Required variable
        specialChar: "{your special characters}", // Optional variable
        size: {your size} // Required variable
    };
```
-----------

### **To generate text, use the function *createRandomText()*** 

```js
    const textRandom = createRandomText(
        {Data_Object_Name}.char, // Required variable
        {Data_Object_Name}.number, // Required variable
        {Data_Object_Name}.specialChar, // Optional variable
        {Data_Object_Name}.size // Required variable
    )
```
-----------

### **Create a variable to store steps** 

Steps must be greater than 0 and not exceed half the length of the generated text (textRandom.size / 2).
```js
    const steps = {your steps}
```
-----------

### **To encrypt text, use the function *encryptionText()***

```js
    const encryption = encryptionText(
        textRandom, // Generated text
        steps, // Steps
        {Data_Object_Name}
    )
```
-----------

### **To decrypt text, use the function *deEncryptionText()***

```js
    const deEncryption = deEncryptionText(
        encryption, // Encrypted text
        steps, // Steps
        {Data_Object_Name}
    );
```
