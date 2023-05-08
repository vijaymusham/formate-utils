> This package is use for React formate utils for TitleCase Formate, India Rupee Price Formate, Comma Formate, Ordinal/Order, Prevent Negative Number, Prevent Special Characters

- **💪🏻 2 Peer Dependencies**
- **✅ Inmutable**
- **🎯 Function First**
- **⚡️ Only supported ES6+**

---

## Installation
**Using NPM**
```bash
    npm install formate-utils
```
## Usage

**TitleCase Formate**
```jsx
    <input  type="text"  value={value}  onChange={(e) => { setValue(toTitleCase(e)); }}  />
```
**India Rupee Price Formate**
```jsx
    <PriceFormater  price={2000}  />
```
**Comma Formate**
```jsx
    <CommaFormater  number={2000}  />
```
**Ordinal/Order**
```js
ordinal(2)
```
Output: 2nd

**Prevent Negative Number**
```jsx
    <input  type="number"  value={value}  onKeyDown={preventNegativeValues}  />
```
**Prevent Special Characters**
```jsx
    <input  type="text"  value={value}  onKeyDown={preventSpecialChars}  />
```
Prevent following Special Characters
['\'', ',', '`', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '\\', '{', '|', '}', '~']

## Peer Dependencies
**react, react-dom**
