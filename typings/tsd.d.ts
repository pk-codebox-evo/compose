/// <reference path="node/node.d.ts" />
/// <reference path="../node_modules/dojo-core/typings/dojo-core/dojo-core-2.0.0-alpha.4.d.ts" />
/// <reference path="../node_modules/dojo-core/typings/symbol-shim/symbol-shim.d.ts" />
/// <reference path="../node_modules/dojo-loader/typings/dojo-loader/dojo-loader-2.0.0-beta.2.d.ts" />
/// <reference path="../node_modules/@reactivex/rxjs/typings/main/ambient/es6-shim/index.d.ts" />

declare module 'rxjs/Rx' {
	export * from 'node_modules/@reactivex/rxjs/dist/cjs/Rx';
}
