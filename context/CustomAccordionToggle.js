import React, { useContext } from 'react';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

const CustomAccordionToggle = ({ children, eventKey, callback, activeClass}) => {
  const activeEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <h6
      className={`${isCurrentEventKey ? activeClass : ''}`}
      onClick={decoratedOnClick}
    >
      {children}
    </h6>
  );
};

export default CustomAccordionToggle;