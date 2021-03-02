///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//-------------------------------------------------------------------------------------------------------------------//


export default class VNode {

	/**
	 * constructor(tag, el, children, text, data, parent, nodeType);
	 *
	 *
	 * @tag: 标签类型( DIV, SPAN, INPUT, #TEXT ... )
	 * @el: 当前虚拟节点对应的 "真实节点"
	 * @text: 当前虚拟节点中的 "文本"
	 * @children: 当前虚拟节点的 "子节点"
	 * @parent: 当前虚拟节点的 "父节点"
	 * @data:
	 * @nodeType: 当前虚拟节点的 "节点类型"
	 */

	constructor(tag, el, children, text, data, parent, nodeType) {

		this.tag = tag;
		this.el = el;
		this.children = children;
		this.parent = parent;
		this.data = data;
		this.nodeType = nodeType;
		this.text = text;

		this.env = {};                      // 当前节点的 环境变量
		this.instructions = null;           // 存放指令
		this.template = [];                 // 当前节点涉及到的模版
	}
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
