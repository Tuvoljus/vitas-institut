import React, { useContext } from 'react'
import AccordionContext from 'react-bootstrap/AccordionContext'
import { Accordion, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const AccordionMenue = ({ children }) => {
    const currentEventKey = useContext(AccordionContext);
//   const accordionIsExpanded = currentEventKey > 0;
    return (
        <>
            {children}
            <Accordion>
      <Card className="my-3">
        <Card.Header>
          <Accordion.Toggle as={Card.Header} eventKey={1}>
            <AccordionMenue eventKey={0}>
              
            </AccordionMenue>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={1}>
          
        </Accordion.Collapse>
        <Card.Footer className="text-muted">{Registrations}</Card.Footer>
      </Card>
    </Accordion>
            </>
    )
}

AccordionMenue.propTypes = {
    children: PropTypes.object,
};

export default AccordionMenue