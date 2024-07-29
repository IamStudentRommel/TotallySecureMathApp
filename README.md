# Totally Secure Math App

### Getting Started

Make sure to install all the dependencies

```bash
yarn install
```

# Security Vulnerabilities and Remediations

### - Insecure Code Practices

##### Vulnerabilities:

Use of non-encrypted local storage. Embedded sensitive credentials within the codebase. Insufficient exception handling

##### Remediations:

Encrypted data prior to storage. Moved to secure credential storage mechanisms. Instituted robust error handling throughout the application.

### - Insufficient Input Validation

##### Vulnerabilities:

Input fields were susceptible to malicious inputs.

##### Remediations:

Implemented regex-based validation to sanitize and validate input fields, safeguarding against harmful inputs.

### - Code Injection

##### Vulnerabilities:

eval() function used in the app posed a risk of code injection attacks.

##### Remediations:

Replaced eval() with mathjs, ensuring the safe evaluation of mathematical expressions. npm install mathjs

### - Improper Authentication

##### Vulnerabilities:

Hardcoded credentials presented a severe security risk.

##### Remediations:

Switched to @react-native-keychain/react-native-keychain to securely store and manage user credentials. npm install @react-native-keychain/react-native-keychain

### - Insecure Data Storage

##### Vulnerabilities:

Plaintext storage of sensitive data within the device's local storage.

##### Remediations:

Use react-native-encrypted-storage to ensure that all notes are securely encrypted before they hit the device's storage.

# Conclusion

The security enhancements implemented in the Totally Secure Math App substantially reduce the risk of data breaches and unauthorized access. By identifying and addressing core vulnerabilities, we have fortified the app's defenses, ensuring that sensitive user data remains protected. We have employed industry best practices, including robust encryption protocols, multi-factor authentication, and regular security audits, to create a safer environment for our users. These measures not only safeguard user information but also enhance the overall trust in the app's security framework, demonstrating our commitment to maintaining the highest standards of data protection and user privacy.
