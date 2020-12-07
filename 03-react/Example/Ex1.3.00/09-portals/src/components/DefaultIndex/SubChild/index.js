///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";


//-------------------------------------------------------------------------------------------------------------------//


class SubChild extends PureComponent {

    static propTypes = {

    };

    static defaultProps = {

    };

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    render() {

        return (

            <React.Fragment>
                <h3>DefaultIndex SubChild Component</h3>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    SubChild
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
