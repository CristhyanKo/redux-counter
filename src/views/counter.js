import React, { Component } from 'react'
import { connect } from 'react-redux';

class Counter extends Component {
    incrementar() { this.props.dispatch({ type: 'INC', val: 10 }) }
    dec() { this.props.dispatch({ type: 'DEC', val: 5 }) }

    render() {
        return (
            <div>
                <p>{this.props.value}</p>
                <button onClick={() => this.incrementar()}>+</button>
                <button onClick={() => this.dec()}>-</button>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    value: store.counterState.value
});

export default connect(mapStateToProps)(Counter);