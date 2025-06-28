const name = "soumik";

// Binary representation of each character in "soumik":
// s => 01110011
// o => 01101111
// u => 01110101
// m => 01101101
// i => 01101001
// k => 01101011

// ========== Different Encoding Formats ==========

// 1. ASCII:
//    - Standard 7-bit encoding for English letters and digits.
 //    - "s" = 115 in decimal, = 0x73 in hex.

// 2. HEX (Hexadecimal):
//    - Each ASCII char → 1 byte → 2 hex digits.
//    - "soumik" → "736f756d696b"

// 3. UTF-8:
//    - Standard web encoding.
//    - ASCII characters are unchanged.
//    - Supports emojis and other languages (multi-byte).
//    - "soumik" → same as ASCII (since all are plain characters).

// 4. Base64:
//    - Converts binary data into text using 64 printable characters.
//    - Useful for transmitting data over JSON, email, URLs.
//    - "soumik" → "c291bWlr"
//    - Base64 chars: A-Z, a-z, 0-9, +, / (plus = padding =)

// 5. Base58:
//    - Like Base64, but removes similar-looking characters:
//        ✗ 0 (zero), O (capital o), I (capital i), l (lower L), +, /
//    - We Use 6 bits to get a 1 character  
//    - Safer for human-readable IDs (e.g. wallet addresses)
//    - Common in: **Bitcoin**, **Solana**, **IPFS**
//    - Example use:
//         - Input: Buffer.from("soumik")
//         - Output: "7o3e6oD"  ← (actual result may vary depending on lib)

// 6. Unicode Code Points:
//    - Each character has a unique code number:
//        's' → U+0073
//        '🚀' → U+1F680
//    - Used in UTF-8/UTF-16 as building blocks.

// ==================================================
