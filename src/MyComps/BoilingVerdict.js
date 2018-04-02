import React from 'react';

class BoilingVerdict extends React.Component {
    constructor(props) {
        super(props);
        console.log('props: ', props);

        this.state = {
            temp: this.props.celsius,
            message: 'Unknown behavior of the water.'
        };

        if (props.celsius >= 100) {
            this.state = {
                temp: this.props.celsius,
                message: 'The water would boil.'
            };
        }
        else {
            this.state = {
                temp: this.props.celsius,
                message: 'The water would not boil.'
            };
        }
    }

    // componentWillMount() {
    //     globalVar.callback = () => {
    //         this.setState({
    //             temp: nextState.celsius
    //         });
    //     }
    // }

    render() {
        let message = 'The water would not boil.';

        if (this.props.celsius >= 100) {
            message = 'The water would boil.';
        }

        return (
            <div>
                <label>huhu</label>
                <p>{this.props.celsius}°C: {message}</p>
            </div>
        );
    }
}

export default BoilingVerdict;