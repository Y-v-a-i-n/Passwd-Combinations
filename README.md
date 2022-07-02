<h1>Passwd-Combinations Module</h1>

**How to use the module :**

```js
const passwdCombinations=require("../index.js");
var password="QKi8wXyD9TuKXfJL";
var result=passwdCombinations.check(password);
if(result<218340105584896){
    console.log("the password is very weak");
}else if(result<4.767240170682353e+28){
    console.log("the password is weak");
}else if(result<2.2726578844967515e+57){
    console.log("the password is strong");
}else{
    console.log("the password is verry strong");
};
```