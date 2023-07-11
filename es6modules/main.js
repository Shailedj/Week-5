import {
    hello,
    funcs,
    f1,
    // f2
} from "./module.js";

// const funcs = {
//     foo: function () {
//       alert("foo");
//     },
//     bar: function () {
//       alert("bar");
//     },
//   };
//   const f1 = function (s) {
//     alert(s);
//   };
//   const f2 = function (s) {
//     alert(s);
//   };
//   const hello = "<h1>hello </h1>";
//   export {
//     hello,
//     funcs,
//     f1,
//     f2
//   };

document.getElementById("app").innerHTML = hello;
funcs.foo();
funcs.bar();
f1("dinner");
// f2('Good morning');