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
const fazz1 = 13;
export { fazz1 as num13 };

// ex6.変数の情報をexport
const fizz1 = "FIZZ";
export type { fizz1 };
// 注意: 「 export type fizz 」 とすると`type fizz = any 型が必要です。`というエラーが発生する

// ex7.変数の型だけをexport
const fuzz1 = "FUZZ";
export type fuzz1 = typeof fuzz1;

// 関数のexport
// 匿名関数はnamed exportできない。export defaultになる。
// ex1.関数の定義と同時にexport
export function func1() {
  console.log("func1実行");
}
export const func2 = () => {
  console.log("func2実行");
};

// ex2.関数の定義とexportを分ける
function func3() {
  console.log("func3実行");
}
export { func3 };
const func4 = () => {
  console.log("func4実行");
};
export { func4 };

// 配列のexport
// ex1.配列の定義と同時にexport
export const arr1 = [1, 2, 3];
// ex2.タプル型としてexport
export const arr2 = [1, "hello", true] as const;
// ex3.分割代入しながらexport
const arr3 = [1, 2, 3];
export const [num14, num15, num16] = arr3;
// ex4.配列を要素と余剰部分に分けながらexport
const arr4 = [1, 2, 3];
export const [num17, ...numArr1] = arr4;
// 実質
// export const num17 = arr4[0]
// export const numArr = [arr4[1],arr4[2]]

// オブジェクトのexport
// ex1.オブジェクトの定義と同時にexport
export const obj1 = { fazz: 1, fizz: 2 };
// ex2.型の制約をしつつexport
export const obj2 = { fazz: 1 as const, fizz: 2 };
export const obj3 = { fazz: 1, fizz: 2 } as const;
// ex3.分割代入しながらexport
const obj4 = { fazz2: 1, fizz2: 2 };
export const { fazz2, fizz2 } = obj4;
// ex4.分割代入と名前変更しながらexport
const obj5 = { fazz3: 1, fizz3: 2 };
export const { fazz3: reFazz3, fizz3: reFizz3 } = obj5;
// ex5.分割代入と余剰パターンに分けながらexport
const obj6 = { fazz4: 1, fizz4: 2, fuzz4: 3 };
export const { fazz4, ...reObj } = obj6;

// クラスのexport
// ex1.クラスの定義と同時にexport
export class Class1 {}
// ex2.クラスの定義とexport分ける
class Class2 {}
export { Class2 };
// ex3.クラスの型だけexport
class Class3 {}
export type { Class3 };
// ex4.匿名クラスのexport
export const AnonymousClass = class {};
// ex5.インスタンスのexport
export const instance1 = new Class1();
// ex6.匿名クラスのインスタンスのexport
export const instance2 = new (class {})();

// インターフェースのexport
// ex1.インターフェースの定義と同時にexport
export interface Interface1 {}
// ex2.インターフェースの定義とexport分ける
interface Interface2 {}
export { Interface2 };
// ex3.別名でexport
interface Interface3 {}
export { Interface3 as Interface4 };

// 型エイリアスのexport
// ex1.型エイリアスの定義と同時にexport
export type Type1 = "OK" | "NG";
// ex2.型エイリアスの定義とexport分ける
type Type2 = "OK" | "NG";
export { Type2 };
// ex3.型エイリアスを別名でexport
type Type3 = "OK" | "NG";
export { Type3 as Type4 };
