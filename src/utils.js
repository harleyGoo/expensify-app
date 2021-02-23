console.log('util.js is running');

// export type1) in line
//export const square = (x) => x * x;
const square = (x) => x * x;

// export const add = (a, b) => a + b;
const add = (a, b) => a + b;

// export const subtract = (a, b) => a- b;
const subtract = (a, b) => a- b;
// inline형식으로 디폴트 export를 하려면
// export default subtract;
// 혹은
// export default (a, b) => a - b;
// 라고 쓰고 import subtract하면 된다.

// export type2) default export - named exports
export { square, add, subtract as default }; // This is not am object