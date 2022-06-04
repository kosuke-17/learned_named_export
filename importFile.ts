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
import { fizz } from "./exportFile";
let okFizz: typeof fizz;
// ex7.変数の型だけをexport
import { fuzz } from "./exportFile";
let okFuzz: fuzz;

// 関数のexport
// ex1.関数の定義と同時にexport
import { func1, func2 } from "./exportFile";
func1();
func2();
// ex2.関数の定義とexportを分ける
import { func3, func4 } from "./exportFile";
func3();
func4();
