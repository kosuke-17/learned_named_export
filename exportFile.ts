// 変数のexport

// ex1.変数の定義と同時にexport
export const num1 = 1;
export let num2 = 2;
export var num3 = 3;

// ex2.変数の定義とexportを分ける
const num4 = 4;
const num5 = 5;
const num6 = 6;
export { num4 };
export { num5 };
export { num6 };
// 注意: 「 export num4 」 とすると`宣言またはステートメントが必要です。`というエラーが発生する

// ex3.1つのexportで全ての変数をexport
const num7 = 7;
const num8 = 8;
const num9 = 9;
export { num7, num8, num9 };

// ex4.複数の変数定義と、1つのexport
// const num10 = 10,num11 = 11,num12 = 12
export const num10 = 10,
  num11 = 11,
  num12 = 12;

// ex5.別の変数名としてexport
const fazz = 13;
export { fazz as num13 };

// ex6.変数の情報をexport
const fizz = "FIZZ";
export type { fizz };
// 注意: 「 export type fizz 」 とすると`type fizz = any 型が必要です。`というエラーが発生する

// ex7.変数の型だけをexport
const fuzz = "FUZZ";
export type fuzz = typeof fuzz;
