import React, { useState } from "react";
import { BsChevronDown, BsList, BsX } from 'react-icons/bs'

export const ChevronDown = (props) => <BsChevronDown data-testid="chevron-down" {...props}/>;

export const MobileNavToggle = React.forwardRef(({onClick, ...props}, ref) => {
  const [hasBeenToggled, setHasBeenToggled] = useState(false);

  const handleClick = (e) => {
    setHasBeenToggled(!hasBeenToggled);
    onClick(e);
  }

  const IconToUse = hasBeenToggled ? BsX : BsList;

  return (<IconToUse
    data-testid='mobile-nav-toggle'
    ref={ref}
    className='mobile-nav-toggle'
    onClick={handleClick}
    {...props} />
  );
});
