///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {constructProxy} from "./proxy.js";
import {mount} from "./mount.js";


//-------------------------------------------------------------------------------------------------------------------//


let uid = 0;

function initMixin(Due) {

	// console.log('init');

	Due.prototype._init = function (options) {

		const vm = this;

		vm["uid"] = uid++;
		vm["_isDue"] = true;

		/** proxy data **/
		if (options && options.data) {

			vm["_data"] = constructProxy(vm, options.data, '');
		}

		/** mount vDom **/
		if (options && options.el) {

			let rootDom = document.getElementById(options.el);
			mount(vm, rootDom);
		}
	};
}


//-------------------------------------------------------------------------------------------------------------------//


export {

	initMixin
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
