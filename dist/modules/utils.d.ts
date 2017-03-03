import { Middleware } from './router';
export declare type AsyncCallback = (done?: Function) => void | Promise<any>;
export { default as isPlainObject } from 'is-plain-object';
export declare function isArray(arr: any): boolean;
export declare function isBool(x: any): boolean;
export declare function isString(x: any): boolean;
export declare function isFunction(x: any): boolean;
export declare function isUndefined(x: any): boolean;
export declare function flatMap(arr: any, fn: any): any;
export declare function runMiddleware(middleware: Array<Middleware>, ...args: any[]): [Promise<any>, () => Promise<any>];
export declare function sequence(callbacks: Array<AsyncCallback>, ...args: any[]): Promise<boolean>;
