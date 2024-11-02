# 🔐 Caesar Cipher Encryptor

### Description
This JavaScript implementation of the **Caesar Cipher** shifts each letter in a given string by a specified number of positions. The Caesar Cipher is a classic encryption method where each letter in the text is shifted a fixed number of positions down the alphabet. This function wraps the alphabet if the shift moves past the letter 'z'.

---

## Function Signature


	function caesarCipherEncryptor(string, key) {
	  // function implementation
	}

**Parameters**

1. string (String): The input string to be encrypted. Only lowercase letters are used.
2. key (Number): The number of positions to shift each character in the string.

**Returns**: The encrypted string after applying the Caesar Cipher.


**Time and Space Complexity**

1. Time Complexity: O(n), where n is the length of the input string. Each character is processed once in the loop.
2. Space Complexity: O(n), since a new array is created to store the shifted characters before joining them into a final string.

**How the Algorithm Works**

1. Key Normalization: The key is reduced to a value within the range of the alphabet (0–25) by calculating key % 26.
2. Character Shifting: For each character in the string, its ASCII code is shifted by the key.
3. If the new character code exceeds 'z', it wraps back to the start of the alphabet.
4. Return: The shifted characters are combined into a single encrypted string.

Example 1

	const string = "xyz";
	const key = 2;
	console.log(caesarCipherEncryptor(string, key));
	// Output: "zab"
 
Example 2


	const string = "hello";
	const key = 5;
	console.log(caesarCipherEncryptor(string, key));
	// Output: "mjqqt"
 
**Edge Cases**
1. Large Key Values: If the key is larger than 26, it wraps within the alphabet to stay in the 0–25 range.
2. Empty String: If the input string is empty, the function will return an empty string.
3. Already at Maximum Shift: Characters near the end of the alphabet will correctly wrap around to the start of the alphabet.

**License**: This code is available under the MIT License.
