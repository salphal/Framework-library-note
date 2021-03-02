///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import VNode from "../../vdom/vnode.js";
import {getValue} from "../../util/ObjectUtil.js";


//-------------------------------------------------------------------------------------------------------------------//


function vforInit(vm, el, parent, instructions) {

	let virtualNode = new VNode(el.nodeName, el, [], "", getVirtualNodeData(instructions)[2], parent, 0);

	virtualNode.instructions = instructions;

	parent.el.removeChild(el);
	parent.el.appendChild(document.createTextNode(''));

	let resultSet = analysisInstructions(vm, el, parent, instructions);

	return virtualNode;
}

function getVirtualNodeData(instructions) {

	let insSet = instructions.trim().split(' ');

	if (insSet.length !== 3 || insSet[1] !== 'in' && insSet[1] !== 'of') {

		throw new Error('error');
	}

	return insSet;
}

function analysisInstructions(vm, el, parent, instructions) {

	let insSet = getVirtualNodeData(instructions),
		dataSet = getValue(vm._data, insSet[2]),
		resultSet = [];

	console.log(insSet);

	if (!dataSet) {

		throw new Error('error');
	}

	for (let i = 0; i < dataSet.length; i++) {

		let tempDom = document.createElement(el.nodeName);
		tempDom.innerHtml = el.innerHtml;

		let env = analysisKV(insSet[0], dataSet[i], i);
		tempDom.setAttribute('env', JSON.stringify(env));

		parent.el.appendChild(tempDom);
		resultSet.push(tempDom);
	}

	console.log(resultSet);

	return resultSet;
}

function analysisKV(instructions, val, idx) {

	if (/([a-zA-Z0-9_$]+)/.test(instructions)) {

		instructions = instructions.trim();
		instructions = instructions.substring(1, instructions.length - 1);
	}

	let keys = instructions.split(','),
		obj = {};

	if (keys.length === 0) {

		throw new Error('error');

	} else if (keys.length === 1) {

		obj[keys[0].trim()] = val;

	} else if (keys.length === 2) {

		obj[keys[1].trim()] = idx;
	}

	return obj;
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {
  
	vforInit
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
