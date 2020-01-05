import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', height: '800px', border: '1px solid #ff9900' }}>
            {props.children}
        </div>
    );
};

export default Scroll;
