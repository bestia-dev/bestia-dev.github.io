/* tslint:disable */
/* eslint-disable */
/**
* @param {any} _pos
* @param {any} index
* @param {any} _dir
* @returns {any}
*/
export function swipe_callback_input(_pos: any, index: any, _dir: any): any;
/**
* @param {any} _pos
* @param {any} index
* @param {any} _dir
* @returns {any}
*/
export function swipe_callback_output(_pos: any, index: any, _dir: any): any;
/**
* To start the Wasm application, wasm_bindgen runs this functions
*/
export function wasm_bindgen_start(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly swipe_callback_input: (a: number, b: number, c: number) => number;
  readonly swipe_callback_output: (a: number, b: number, c: number) => number;
  readonly wasm_bindgen_start: () => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__Fn_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h9cd8e100b85e3157: (a: number, b: number) => void;
  readonly _dyn_core__ops__function__Fn__A_B_C_D___Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h29f9fa552eec9909: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hba4513ec1f00e0a0: (a: number, b: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hbacde019c8f440ff: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h025b1fcf23cba938: (a: number, b: number, c: number, d: number) => void;
  readonly __wbindgen_start: () => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
        