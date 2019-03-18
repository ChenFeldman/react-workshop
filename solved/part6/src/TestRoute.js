
import React from 'react';
import {NavLink} from 'react-router-dom';
import { withRouter } from "react-router-dom";


export const TestRoute = withRouter(({...props}) => {
    let component = null;

    if (props){
        return (
            <div>
                <NavLink to={'/'}>
                    Click to get back from {props.location.pathname}
                </NavLink>
                {props.dataToShow}
            </div>
        );
    }

    return component;
});

