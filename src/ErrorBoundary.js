import React, {Component} from "react";


export default class ErrorBoundary extends Component {
    state = {error: null};
    static getDerivedStateFromError(error){
        return {error}
    }
    render() {
        const {error} = this.state;
        const {children, fallback} = this.props;
        if (error) return <ErrorScreen error={error}/>;
        return children;
    }
}


export function ErrorScreen({error}) {
    return(
        <div className='error'>
            <h3>Something went wrong</h3>
            <p>Error: {error.message}</p>
        </div>
    )
}
