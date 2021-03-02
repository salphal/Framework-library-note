///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {renderData} from "./render.js";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * constructProxy(vm, obj, namespace);
 *
 * @vm: Due对象
 * @obj: Due.data
 * @namespace 命名空间
 */
export function constructProxy(vm, obj, namespace) {

	let proxyObj = null;

	// console.log(obj);

	if (obj instanceof Array) {

		// console.log('[Due.data is array]');

		proxyObj = new Array(obj.length);

		for (let i = 0; i < obj.length; i++) {

			proxyObj[i] = constructProxy(vm, obj[i], namespace);
		}

		proxyObj = constructArrayProxy(vm, obj, namespace)

	} else if (obj instanceof Object) {

		// console.log('[Due.data is Object]');

		proxyObj = constructObjectProxy(vm, obj, namespace);

	} else {

		throw  new Error('obj must be Arrray or Object');
	}

	return proxyObj;
}

/** proxy object **/
function constructObjectProxy(vm, obj, namespace) {

	let proxyObj = {};

	for (let prop in obj) {

		/**
		 * Object.defineProperry(obj, prop, desc);
		 *
		 *
		 * @obj: 要定义属性的对象
		 * @prop: 要定义或修改属性的名称或Symbol
		 * @desc: 要定义或修改的属性描述符
		 *      - configurable: bool                // 是否允许属性或描描述符改变
		 *      - enumerable: bool                  // 是否允许对象的属性 枚举
		 *      - value: any                        // 该属性所对应的值，可以是任何类型( def: undefined )
		 *      - writable: bool                    // 是否允许 value 被 "赋值运算符( = )" 改变
		 *      - get: fn
		 *      - set: fn
		 */

		Object.defineProperty(proxyObj, prop, {

			configurable: true,
			// numerable: true,
			get() {
				// console.log(`[get ${prop}]`);
				return obj[prop];
			},
			set: function (newVal) {
				// console.log(`[set ${prop}, namespan: ${getNameSpace(namespace, prop)}]`);
				obj[prop] = newVal;
				renderData(vm, getNameSpace(namespace, prop));
			}
		});

		Object.defineProperty(vm, prop, {

			configurable: true,
			// numerable: true,
			get() {
				// console.log(`[get ${prop}]`);
				return obj[prop];
			},
			set: function (newVal) {
				console.log(`[set ${prop}, namespan: ${getNameSpace(namespace, prop)}]`);
				obj[prop] = newVal;
				renderData(vm, getNameSpace(namespace, prop));
			}
		});

		if (obj[prop] instanceof Object) {

			// console.log(namespace, prop, getNameSpace(namespace, prop));
			proxyObj[prop] = constructProxy(vm, obj[prop], getNameSpace(namespace, prop));
		}
	}

	// console.log(proxyObj);
	return proxyObj;
}

/** proxy array **/
const ARRAYPROTO = Array.prototype;
function constructArrayProxy(vm, arr, namespace) {

	let proxyArray = {
		eleType: 'Array',
		toString, push() {}, pop() {}, shift() {}, unshift() {},
	}, proxyArrayFuncKeys = ['push', 'pop', 'shift', 'unshift'];

	function toString() {

		let result = "";
		for (let i = 0; i <= arr.length - 1; i++) {
			result += `${arr[i]}, `;
		}
		return result.substr(0, arr.length - 2);
	}

	proxyArrayFuncKeys.forEach(val => {

		proxyArrayFunc.call(vm, proxyArray, val, namespace, vm);
	});

	// proxyArrayFunc.call(vm, proxyArray, 'push', namespace, vm);
	// proxyArrayFunc.call(vm, proxyArray, 'pop', namespace, vm);
	// proxyArrayFunc.call(vm, proxyArray, 'shift', namespace, vm);
	// proxyArrayFunc.call(vm, proxyArray, 'unshift', namespace, vm);

	arr.__proto__ = proxyArray;

	return arr;
}

function proxyArrayFunc(obj, func, namespace, vm) {

	Object.defineProperty(obj, func, {

		configurable: true,
		enumerable: true,
		value: function (...args) {

			let arrFuncOriginal = ARRAYPROTO[func];
			const poxyFunc = arrFuncOriginal.apply(this, args);

			console.log(getNameSpace(namespace, ''));
			renderData(vm, getNameSpace(namespace, ''));

			return poxyFunc;
		}
	});
}

/** get namespace **/
function getNameSpace(nowNameSpace, nowProp) {

	if (nowNameSpace === null || nowNameSpace === "") {

		// console.log('nowNameSpace is null');

		return nowProp;

	} else if (nowProp === null || nowProp === "") {

		// console.log('nowProp is null');

		return nowNameSpace;

	} else {

		// console.log(nowNameSpace, nowProp);

		return `${nowNameSpace}.${nowProp}`;
	}
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


















