///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {getValue} from "../util/ObjectUtil.js";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * ele.nodeType
 *
 *
 * 1: 标签
 * 2: 属性
 * 3: 文本
 * 8: 注释
 *
 * 9: Document
 * 10: DocumentType
 * 11: DocumentFragment
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 约定俗称
 *
 * 2 === 'To'
 * 4 === 'For'
 */

let template2Vnode = new Map(),
	vnode2template = new Map();

/**  **/

function prepareRender(vm, vnode) {

	if (vnode === null) {

		return;
	}

	if (vnode.nodeType === 3) {                     // 文本

		analysisTemplateString(vnode);
	}

	analysisAttr(vm, vnode);

	if (vnode.nodeType === 1) {                     // 标签

		vnode.children.forEach(val => {

			prepareRender(vm, val);
		});
	}
}

function analysisTemplateString(vnode) {

	let templateStringList = vnode.text.match(/{{[a-zA-Z0-9_.\s]+}}/g);

	// console.log(templateStringList);

	templateStringList && templateStringList.forEach(val => {

		setTemplate2Vnode(val, vnode);
		setVnode2Template(val, vnode);
	});
}

/**  **/

function setTemplate2Vnode(template, vnode) {

	let templateName = getTemplateName(template),
		vnodeSet = template2Vnode.get(templateName);

	if (vnodeSet) {

		vnodeSet.push(vnode);

	} else {

		template2Vnode.set(templateName, [vnode]);
	}
}

function setVnode2Template(template, vnode) {

	let templateName = getTemplateName(template),
		templateSet = vnode2template.get(vnode);

	if (templateSet) {

		templateSet.push(templateName);

	} else {

		vnode2template.set(vnode, [templateName]);
	}
}

function getTemplateName(template) {

	if (template.substring(0, 2) === '{{' && template.substring(template.length - 2, template.length) === '}}') {

		let tem = template.replace(/^[{{/s]+/g, '');
		tem = tem.replace(/[/s}}$]+}/g, '');

		// console.log(tem);

		return tem;

	} else {

		return template;
	}
}

/**  **/

function renderMixin(Due) {

	Due.prototype._render = function () {

		// console.log(this._vnode);
		renderNode(this, this._vnode);
	};
}

function renderNode(vm, vnode) {

	if (vnode.nodeType === 3) {

		let templates = vnode2template.get(vnode);

		if (templates) {

			let result = vnode.text;

			for (let i = 0; i < templates.length; i ++) {

				let templateValue = getTemplateValue([vm._data, vnode.env], templates[i]);

				// console.log(templateValue);

				if (templateValue) {

					result = result.replace('{{' + templates[i] + '}}', templateValue);
				}
			}

			vnode.el.nodeValue = result;
		}

	} else if (vnode.nodeType == 1 && vnode.tag == 'INPUT') {

		let templates = vnode2template.get(vnode);

		if (templates) {

			for (let i = 0; i < templates.length; i++) {

				let templateValue = getTemplateValue([vm._data, vnode.env], templates[i]);

				if (templateValue) {

					vnode.el.value = templateValue;
				}
			}
		}

	} else {

		for (let i = 0; i < vnode.children.length; i++) {

			renderNode(vm, vnode.children[i]);
		}
	}
}

function getTemplateValue(objs, templateName) {

	// console.log(objs);

	for (let i = 0; i < objs.length; i++) {

		let temp = getValue(objs[i], templateName);

		if (temp !== null) {

			return temp;
		}
	}

	return null;
}

/**  **/

function renderData(vm, data) {

	let vnodes = template2Vnode.get(data);

	if (vnodes != null) {

		// console.log(vnodes);

		for (let i = 0; i < vnodes.length; i++) {

			// console.log(vnodes[i]);

			renderNode(vm, vnodes[i]);
		}
	}
}

/**  **/

function analysisAttr(vm, vnode) {

	if (vnode.nodeType != 1) {

		return;
	}

	let attrNames = vnode.el.getAttributeNames();

	if (attrNames.indexOf('v-model') > -1) {

		setTemplate2Vnode(vnode.el.getAttribute('v-model'), vnode);
		setVnode2Template(vnode.el.getAttribute('v-model'), vnode);
	}
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** test methods **/

function getTemplate2VnodeMap() {

	return template2Vnode;
}

function getVnode2TemplateMap() {

	return vnode2template;
}


//-------------------------------------------------------------------------------------------------------------------//


export {
	prepareRender,
	renderMixin,
	getTemplate2VnodeMap,
	getVnode2TemplateMap,
	renderData,
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
1