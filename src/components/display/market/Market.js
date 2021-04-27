import React from 'react';
import Hero from "./Hero";
import Grid from "./Grid";

function Market(props) {
    return(
            <div>
                <Hero updateToken = {props.updateToken}/>
                <Grid />
            </div>
    );
}

export default Market;