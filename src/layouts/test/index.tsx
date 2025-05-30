import React from "react";
import {Outlet} from "umi"


const Test: React.FC = () => {
    return (
        <div>
            test container
            <Outlet/>
        </div>
    )
}

export default Test;