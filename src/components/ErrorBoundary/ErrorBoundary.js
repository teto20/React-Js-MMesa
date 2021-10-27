import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

        constructor(props) {
            super(props);

            this.state = {
                hasError: false,
            }
        }

    static gerDerivedStateFromError(error) {
        return {hasError: true};
    }
    render() {
        if(this.state.hasError){
            return <div>Ha habido un error en este componente. </div>
        }
        return this.props.children;
    }
}
