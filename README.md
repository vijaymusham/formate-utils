> This package is use for React formate utils for TitleCase Formate, India Rupee Price Formate, Comma Formate, Ordinal/Order, Prevent Negative Number, Prevent Special Characters, Sort List

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
['\'', ',', '`', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '
[', ']', '^', '_', '\\', '{', '|', '}', '~']

**Sort List of Objects**

```js
  const singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Stevie Nicks', band: 'Fleetwood Mac', born: 1948 },
  ];
  
  // array is sorted by band, in ascending order by default
        sortList(singers,band'));

// array is sorted by band in descending order
        sortList(singers,'band', 'desc'));

// array is sorted by name in ascending order
        sortList(singers,'name'));

// array is sorted by date if birth in descending order
        sortList(singers,'born', 'desc'));
```
## Peer Dependencies
**react, react-dom**
