///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//-------------------------------------------------------------------------------------------------------------------//


function getValue(obj, attr) {

	// console.log(obj);

	if (!obj) {

		return obj;
	}

	let attrList = attr.split('.'),
		temp = obj;

	for (let i = 0; i < attrList.length; i++) {

		if (temp[attrList[i]]) {

			temp = temp[attrList[i]];

		} else {

			return undefined;
		}
	}

	return temp;
}

function setValue(obj, attr, val) {

	if (!obj) {

		return;
	}

	let attrList = attr.split('.'),
		temp = obj;

	for (let i = 0; i < attrList.length - 1; i++) {

		if (temp[attrList[i]]) {

			temp = temp[attrList[i]];

		} else {

			return;
		}
	}

	if (temp[attrList[attrList.length - 1]] != null) {

		// console.log(temp[attrList[attrList.length - 1]]);

		temp[attrList[attrList.length - 1]] = val;
	}
}


function mergeAttr(obj1, obj2) {

	if (obj1 == null) {

		return clone(obj2);

	} else if (obj2 == null) {

		return clone(obj1);

	} else {

		let result = {},
			obj1Attrs = Object.getOwnPropertyNames(obj1),
			obj2Attrs = Object.getOwnPropertyNames(obj2);

		for (let i = 0; i < obj1Attrs.length; i++) {

			result[obj1Attrs[i]] = obj1[obj1Attrs[i]];
		}

		for (let i = 0; i < obj2Attrs.length; i++) {

			result[obj2Attrs[i]] = obj2[obj2Attrs[i]];
		}

		return result;
	}
}

function clone(obj) {

	if (obj instanceof Array) {

		console.log(cloneArray(obj));

		return cloneArray(obj);

	} else if (obj instanceof Object) {

		return cloneObject(obj);

	} else {

		return obj;
	}
}

function cloneObject(obj) {

	let result = {},
		names = Object.getOwnPropertyNames(obj);

	for (let i = 0; i < names.length; i++) {

		result[name[i]] = clone(obj[names[i]]);
	}

	return result;
}

function cloneArray(obj) {

	let result = new Array(obj.length);

	for (let i = 0; i < obj.length; i++) {

		result[i] = clone(obj[i]);
	}

	return result;
}

/** 无法合并代理对象 **/
function esayClone(obj) {

	JSON.parse(JSON.stringify(obj));
}




//-------------------------------------------------------------------------------------------------------------------//


export {
	getValue,
	setValue,
	mergeAttr
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
