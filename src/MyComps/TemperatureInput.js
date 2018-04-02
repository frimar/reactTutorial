import React from 'react';

const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;

        return (
            <fieldset  className={this.props.className} >
                <legend>Enter temperature in {scaleName[scale]}:</legend>
                <input
                    value={temperature}
                    type="number"
                    onChange={this.handleChange} />
            </fieldset>
        );
    }
}

export default TemperatureInput;