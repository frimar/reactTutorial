import React from 'react';

const CoordSystem = (props) => {
    
    return (
        <div>
            My coordinate system:<br/>
            <canvas width={props.width} style={{"backgroundColor":props.backgroundColor}} height={props.height} />
        </div>
    );

};


export default CoordSystem;