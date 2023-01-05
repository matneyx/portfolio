import React, { useState } from "react";

export const ChevronDown = (props) => <i className="bi bi-chevron-down" {...props}></i>;

export const MobileNavToggle = React.forwardRef(({onClick, ...props}, ref) => {
  const [hasBeenToggled, setHasBeenToggled] = useState(false);

  const handleClick = (e) => {
    setHasBeenToggled(!hasBeenToggled);
    onClick(e);
  }

  return (<i
    ref={ref}
    className={`bi ${hasBeenToggled ? 'bi-x' : 'bi-list'} mobile-nav-toggle`}
    onClick={handleClick}
    {...props}></i>
  );
});
