import React,{forwardRef} from "react";
function Tut43I(props, ref) {
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
}
export default forwardRef(Tut43I);