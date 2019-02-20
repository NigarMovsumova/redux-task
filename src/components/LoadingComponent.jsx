import React from 'react';

const LoadingComponent = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
}
LoadingComponent.defaultProps = {
    message: 'Loading...'
};

export default LoadingComponent;


