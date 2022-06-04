// re-rexport.ts
// ex1.全てをimportしつつ、全てをexport
export * from "./exportFile";
// ex.2特定のものだけre-export
export { reValue as reReValue, reFunc as reReFunc } from "./exportFile";
// ex3.importした全てを一つのオブジェクトに束ねてre-exportする
export * as reModule from "./exportFile";
// ex4.特定のものをオブジェクトにまとめてre-exportする
import { reValue, reFunc } from "./exportFile";
export const reReModule = { reValue, reFunc };
