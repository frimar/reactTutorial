import React from 'react';

const InputArea = (props) => {

    return (
        <div>
            Funktionsdefinition:<br/>
            <input type="text" name="koeff_x2" id="koeff_x2" placeholder="Koeeffizient für x*x" />
            <button type="submit">Zeichnen!</button>
        </div>
    );

};


export default InputArea;