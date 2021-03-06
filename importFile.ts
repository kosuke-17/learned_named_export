// 変数のexport
// ex1.変数の定義と同時にexport
import { num1, num2, num3 } from "./exportFile";
console.log({ num1, num2, num3 });
// ex2.変数の定義とexportを分ける
import { num4, num5, num6 } from "./exportFile";
console.log({ num4, num5, num6 });
// ex3.1つのexportで全ての変数をexport・・・ エクスポートリストと呼ばれてる
import { num7, num8, num9 } from "./exportFile";
console.log({ num7, num8, num9 });
// ex4.複数の変数定義と、1つのexport
import { num10, num11, num12 } from "./exportFile";
console.log({ num10, num11, num12 });
// ex5.別の変数名としてexport
import { num13 } from "./exportFile";
console.log(num13);
// ex6.変数の情報をexport
import { fizz1 } from "./exportFile";
let okFizz: typeof fizz1;
// ex7.変数の型だけをexport
import { fuzz1 } from "./exportFile";
let okFuzz: fuzz1;

// 関数のexport
// ex1.関数の定義と同時にexport
import { func1, func2 } from "./exportFile";
func1();
func2();
// ex2.関数の定義とexportを分ける
import { func3, func4 } from "./exportFile";
func3();
func4();

// 配列のexport
// ex1.配列の定義と同時にexport
import { arr1 } from "./exportFile";
console.log(arr1);

// ex2.タプル型としてexport
import { arr2 } from "./exportFile";
console.log(arr2);
// ex3.分割代入しながらexport
import { num14, num15, num16 } from "./exportFile";
console.log({ num14, num15, num16 });
// ex4.配列を要素と余剰部分に分けながらexport
import { num17, numArr1 } from "./exportFile";
console.log(num17);
console.log(numArr1);

// オブジェクトのexport
// ex1.オブジェクトの定義と同時にexport
import { obj1 } from "./exportFile";
console.log(obj1);

// ex2.型の制約をしつつexport
import { obj2, obj3 } from "./exportFile";
console.log(obj2);
console.log(obj3);
// ex3.分割代入しながらexport
import { fazz2, fizz2 } from "./exportFile";
console.log(fazz2);
console.log(fizz2);
// ex4.分割代入と名前変更しながらexport
import { reFazz3, reFizz3 } from "./exportFile";
console.log(reFazz3);
console.log(reFizz3);

// ex5.分割代入と余剰パターンに分けながらexport
import { fazz4, reObj } from "./exportFile";
console.log(fazz4);
console.log(reObj);

// クラスのexport
// ex1.クラスの定義と同時にexport
import { Class1 } from "./exportFile";
console.log(Class1);
// ex2.クラスの定義とexport分ける
import { Class2 } from "./exportFile";
console.log(Class2);
// ex3.クラスの型だけexport
import { Class3 } from "./exportFile";
let cla: Class3;
// ex4.匿名クラスのexport
import { AnonymousClass } from "./exportFile";
console.log(AnonymousClass);
// ex5.インスタンスのexport
import { instance1 } from "./exportFile";
console.log(instance1);
// ex6.匿名クラスのインスタンスのexport
import { instance2 } from "./exportFile";
console.log(instance2);

// インターフェースのexport
// ex1.インターフェースの定義と同時にexport
import { Interface1 } from "./exportFile";
// ex2.インターフェースの定義とexport分ける
import { Interface2 } from "./exportFile";
// ex3.別名でexport
import { Interface4 } from "./exportFile";

// 型エイリアスのexport
// ex1.型エイリアスの定義と同時にexport
import { Type1 } from "./exportFile";
// ex2.型エイリアスの定義とexport分ける
import { Type2 } from "./exportFile";
// ex3.型エイリアスを別名でexport
import { Type4 } from "./exportFile";

// 名前空間のexport
// ex1.名前空間を定義しつつ、export
import { FizzSpace1 } from "./exportFile";
// ex2.名前空間とexport分ける
import { FizzSpace2 } from "./exportFile";

// re-export(再エクスポート)
// ex1.全てをimportしつつ、全てをexport
import { reValue, reFunc, reClass } from "./re-export";
// ex.2特定のものだけre-export
import { reReValue, reReFunc } from "./re-export";
// ex3.importした全てを一つのオブジェクトに束ねてre-exportする
import { reModule } from "./re-export";
// ex4.特定のものをオブジェクトにまとめてre-exportする
import { reReModule } from "./re-export";
