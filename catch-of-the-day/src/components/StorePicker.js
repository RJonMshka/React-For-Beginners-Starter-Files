import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {

    constructor() {
        super();
        this.goToStore = this.goToStore.bind(this);
    }

    myInput = React.createRef();

    // Instead of declaring a function , we actually declare a property set to an array function and properties are bound to instance i.e. the component
    goToStore = (event) => {
        event.preventDefault();
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter a Store</h2>
                <input
                    type="text"
                    required
                    ref={this.myInput}
                    placeholder="Store Name"
                    defaultValue={getFunName()}
                />
                <button type="submit">Visit Store -></button>
            </form>
        );
    }
}

export default StorePicker;