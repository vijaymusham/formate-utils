React formate utils

## Install

    npm install formate-utils

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