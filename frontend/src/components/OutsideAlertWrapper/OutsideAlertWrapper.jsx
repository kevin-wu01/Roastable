import React, { useRef, useEffect } from "react";

export default function OutsideAlertWrapper(props) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return <div ref={wrapperRef}>{props.children}</div>
}

function useOutsideAlerter(ref) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                alert("clicked outside");
            }
        }
    })
}