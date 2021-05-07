
import React from 'react';

const AddDrawButton = (props) => {
    return (
        <div style={{backgroundColor: 'black'}}>
            <button onClick={props.addTrip}>Draw</button>

        </div>
    );
}

export default AddDrawButton;