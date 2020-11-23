# React Advance

## defaultProps & propTypes

#### defaultProps

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * defaultProps                 // 静态属性
 * 
 * 
 * 在运行函数 或 构造函数之前，就将 "默认属性" 和 "传递的属性" 混合
 */


//-------------------------------------------------------------------------------------------------------------------//


/** function_component-default_props **/


function FnDefaultProps(props) {

    console.log('[FnDefaultProps]: ',props);             // 此时已完成 默认属性 和 传递属性 的混合

    return (

        <div>
            a: {props.a}, b: {props.b}, c: {props.c}
        </div>
    );
}

/** 设置函数静态默认属性值 **/
FnDefaultProps.defaultProps = {

    a: 1,
    b: 2,
    c: 3
};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** class_component-default_props **/


class ClsDefaultProps extends Component {

    /** methods-2 **/
    static defaultProps = {
        a: 1,
        b: 2,
        c: 3
    };

    constructor(props) {

        console.log('[ClsDefaultProps]: ', props);

        super(props);

        this.state = {};
    }

    render() {

        return (

            <div>
                a: {this.props.a}, b: {this.props.b}, c: {this.props.c}
            </div>
        );
    }
}

/** methods-1 **/
// ClsDefaultProps.defaultProps = {
//     a: 1,
//     b: 2,
//     c: 3
// };


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### propTypes

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * prop-types
 * 
 * 
 * 对于未使用脚手架的项目，需额外引入该库
 */

yarn add prop-types


//-------------------------------------------------------------------------------------------------------------------//


class ClsPropTypes extends Component {

    /** 先混合 **/
    static defaultProps = {

        bool: false
    };

    /** 再调用相应的函数进行验证 **/
    static propTypes = {                        // 仅在 开发阶段报错提示，不会影响编译，仅作为提示

        /** isRequired: 必填项 **/

        /** basic_type **/
        num: PropTypes.number,                  // 数字类型
        str: PropTypes.string,                  // 字符串类型
        bool: PropTypes.bool,                   // 布尔类型

        arr: PropTypes.array,                   // 数组类型
        obj: PropTypes.object,                  // 对象类型
        func: PropTypes.func,                   // 函数类型
        symbol: PropTypes.symbol,               // 符号类型

        any: PropTypes.any.isRequired,          // 任意类型

        /** advance_type **/
        node: PropTypes.node,                   // 必须是一个可以渲染的内容: 字符串，数字，ReactElement
        element: PropTypes.element,             // 必须是一个 ReactElement
        elementType: PropTypes.elementType,     // 必须是一个 组件类型( 构造函数，函数 )

        // 约束 传入实例 原型链上必须有指定构造函数的原型
        son: PropTypes.instanceOf(Father),                  // 必须指定构造函数实例

        // 约束 传入值 必须来自指定数组的子项
        oneOf: PropTypes.oneOf(['male', 'female']),         // 枚举( 从一组值中取其中一个 )

        // 约束 array.item
        arrayOf: PropTypes.arrayOf(PropTypes.number),       // 指定该数组的每一子项的类型约束
        oneOfType: PropTypes.oneOfType([                    // 属性类型必须是 数组子项的其中之一
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool
        ]),

        // 约束 object
        objShape: PropTypes.shape({                         // 指定对象中每一子项的类型约束
            name: PropTypes.string,
            age: PropTypes.number,
            address: PropTypes.shape({
                province: PropTypes.string,
                city: PropTypes.string,
            }),
        }),

        // 约束 array.obj
        arrObj: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            age: PropTypes.number,
        })),

        object: PropTypes.objectOf(PropTypes.string),       // 指定该对象的每一子项的类型约束( 作用不大 )

        exact: PropTypes.exact({}),                         // 与 shape 用法相同( 必须精确匹配传递的数据 )


        /** custom_type **/
        custom: function (props, propName, componentName) {

            console.log('[customType]', props, propName, componentName);

            const val = props[propName];

            /** 验证必填 **/
            if (val === undefined || val === null) {

                return new Error(`invalid prop ${propName} in ${componentName} is required`);
            }

            /** 验证必须是数字 **/
            if (typeof val !== "number") {

                return new Error(`invalid prop ${propName} in ${componentName} is not number`);
            }

            /** 验证是否在取值范围之内 **/
            if (val < 0 || val > 100) {

                return new Error(`invalid prop ${propName} in ${componentName} must is between 0 and 100`);
            }
        },

    };

    constructor(props) {

        super(props);

        this.state = {};
    }

    render() {

        const elementType = this.props.elementType;     // 必须先赋值，再 JSX 解析

        return (

            <div>
                <div>number: {this.props.num}</div>
                <div>string: {this.props.str}</div>
                <div>boolean: {this.props.bool}</div>
                <div>function: {this.props.func}</div>
                <div>{elementType}</div>
            </div>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## Higher-Order Component

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * HOF: Higher-Order Function           // 高阶函数，以函数为参数，并返一个函数
 * 
 * HOC: Higher-Order Component          // 高阶组件，以组件作为参数，并返回一个组件
 */


<Comp />            // React Component Element

<h1></h1>           // React Html Element


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 利用 HOC 实现横切关注点
 * 
 * 
 * 1) 禁止在 render(); 中使用 高阶组件
 *
 * 2) 禁止在 高阶组件 内部修改 传入的组件           // 单一应用指责: 仅做包裹添加组件功能
 */


eg: N 个组件，每个组件在创建和销毁时，需要做日志记录
    N 个组件，显示的内容，所得到的数据结构完全一致


//-------------------------------------------------------------------------------------------------------------------//


import RReact from "react";

export default function withTest(comp) {

    return class extends React.Component {
    
    };
}

function A() {

    return (<h1>hello world</h1>);
}

const B = withTest(A);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## ref & forwardRef

#### ref

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * reference
 * 
 * 
 * 
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### forwardRef

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * ref 转发
 * 
 * 
 * 
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## context

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        /**
         * 常规数据流
         * 
         * 
         * 当后代元素需要用到数据时，需通过 props 一层一层传递( 虽然数据流纯粹，但是造成代码冗余，复杂情况不便处理 )
         */
        
                                           + ----------- +
                                           |             |
                                           |     App     |
                                           |             |
                                           |    {data}   |
                                           |             |
                                           + ----------- +
                                                  |
                                   + ------------ + ----------------------- +
                                   |                                        |                  
                           + -------------- +                      + -------------- +
                           |                |                      |                |
                           |   SubNode_01   |                      |   SubNode_01   |
                           |                |                      |                |
                           |     {data}     |                      |                |
                           |                |                      |                |
                           + -------------- +                      + -------------- +
                                   |                                        |
                + ---------------- + ------------------ +                   |
                |                  |                    |                   |
        + ------------ +    + ------------ +    + ------------ +    + ------------ +
        |              |    |              |    |              |    |              |
        |   Child_01   |    |   Child_02   |    |   Child_03   |    |   Child_04   |
        |              |    |              |    |              |    |              |
        |    {data}    |    |              |    |              |    |              |
        |              |    |              |    |              |    |              |
        + ------------ +    + ------------ +    + ------------ +    + ------------ +
                |
                |
        + ---------------- +
        |                  |
        |   SubChild_01    |
        |                  |
        |     {data}       |
        |                  |
        + ---------------- +


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//




        /**
         * React.content 特点
         * 
         * 
         * 1): 当某个组件创建上下文后，上下文中的数据，会被所有后代组件共享
         * 2): 若某个组件依赖了上下文，会导致该组件数据流不再纯粹( 原本为外部单项数据流 props, 如今又添加了 context )
         * 3): 一般情况下，用于第三方组件( 通用组件 )
         */

        + ----------------------------------------------------------------- context -------- +
        |                                                                                    |
        |                                      + ----------- +                               |
        |                                      |             |                               |
        |                                      |     App     |                               |
        |                                      |             |                               |
        |                                      |    {data}   |                               |
        |                                      |             |                               |
        |                                      + ----------- +                               |
        |                                             |                                      |
        |                              + ------------ + ----------------------- +            |
        |                              |                                        |            |           
        |                      + -------------- +                      + -------------- +    |
        |                      |                |                      |                |    |
        |                      |   SubNode_01   |                      |   SubNode_01   |    |
        |                      |                |                      |                |    |
        |                      |                |                      |                |    |
        |                      |                |                      |                |    |
        |                      + -------------- +                      + -------------- +    |
        |                              |                                        |            |
        |           + ---------------- + ------------------ +                   |            |
        |           |                  |                    |                   |            |
        |   + ------------ +    + ------------ +    + ------------ +    + ------------ +     |
        |   |              |    |              |    |              |    |              |     |
        |   |   Child_01   |    |   Child_02   |    |   Child_03   |    |   Child_04   |     |
        |   |              |    |              |    |              |    |              |     |
        |   |              |    |              |    |              |    |              |     |
        |   |              |    |              |    |              |    |              |     |
        |   + ------------ +    + ------------ +    + ------------ +    + ------------ +     |
        |           |                                                                        |
        |           |                                                                        |
        |   + ---------------- +                                                             |
        |   |                  |                                                             |
        |   |   SubChild_01    |                                                             |
        |   |                  |                                                             |
        |   |   content.data   |                                                             |
        |   |                  |                                                             |
        |   + ---------------- +                                                             |
        |                                                                                    |
        |                                                                                    |
        + ---------------------------------------------------------------------------------- +



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### context_old

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 
 * 
 * 
 * 
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### context_new

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 
 * 
 * 
 * 
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```






