///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import VNode from "../vdom/vnode.js";
import {prepareRender, getTemplate2VnodeMap, getVnode2TemplateMap} from "./render.js";
import {vmodel} from "./grammer/vmodel.js";
import {vforInit} from "./grammer/vfor.js";
import {mergeAttr} from "../util/ObjectUtil.js";


//-------------------------------------------------------------------------------------------------------------------//


function mount(vm, el) {

	// console.log('[begin mount]');

	/** create virtual dom-tree **/
	vm._vnode = constructVNode(vm, el, null);

	/** pre-render **/
	prepareRender(vm, vm._vnode);

	// console.log(getVnode2TemplateMap());
	// console.log(getTemplate2VnodeMap());
}

function initMount(Due) {

	Due.prototype.$mount = function (el) {

		let vm = this,
			rootDom = document.getElementById(el);
		mount(vm, rootDom);
	};
}

function constructVNode(vm, el, parent) {

	let vnode = analysisAttr(vm, el, parent),
		childNodes,
		childs;

	if (vnode == null) {

		let children = [],
			text = getNodeText(el),
			data = null,
			nodeType = el.nodeType,
			tag = el.nodeName,
			key = null;

		vnode = new VNode(tag, el, children, text, data, parent, nodeType, key);

		console.log(vnode);

		if (el.nodeType === 1 && el.getAttribute('env')) {

			// console.log(el);

			// console.log(vnode.env);

			vnode.env = mergeAttr(vnode.env, JSON.parse(el.getAttribute('env')));

			// console.log(vnode.env);

		} else {

			// console.log(el);

			// console.log(vnode.env);

			vnode.env = mergeAttr(vnode.env, parent ? parent.env : {});

			// console.log(vnode.env);
		}
	}

	// console.log(vnode.el.childNodes);
	childs = vnode.el.childNodes;

	childs.forEach(val => {

		childNodes = constructVNode(vm, val, vnode);

		if (childNodes instanceof VNode) {

			vnode.children.push(childNodes);

		} else {

			vnode.children = vnode.children.concat(childNodes);
		}
	});

	return vnode;
}

function getNodeText(el) {

	if (el.nodeType === 3) {

		return el.nodeValue;

	} else {

		return "";
	}
}

function analysisAttr(vm, el, parent) {

	if (el.nodeType === 1) {

		let attrNames = el.getAttributeNames();

		if (attrNames.indexOf('v-model') > -1) {

			// console.log('vm: ', vm);
			// console.log('el: ', el);
			// console.log('val: ', el.getAttribute('v-model'));

			return vmodel(vm, el, el.getAttribute('v-model'));
		}

		if (attrNames.indexOf('v-for') > -1) {

			return vforInit(vm, el, parent, el.getAttribute('v-for'));
		}
	}
}


//-------------------------------------------------------------------------------------------------------------------//


export {
	mount,
	initMount,
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
