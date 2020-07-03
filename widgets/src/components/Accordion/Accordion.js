import React, { useState } from 'react';
import {
  ListItem,
  List,
  ListItemText,
  Collapse,
  Typography,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex;

    return (
      <div className="accordion-item" key={`accordion-item-${index}`}>
        <ListItem onClick={() => onTitleClick(index)}>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography variant="h5" color="textPrimary">
                  {item.title}
                </Typography>
              </React.Fragment>
            }
          />
          {active ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          in={active}
          timeout="auto"
          unmountOnExit
          style={{ paddingLeft: '16px' }}
        >
          <Typography variant="body1" gutterBottom>
            {item.content}
          </Typography>
        </Collapse>
        <Divider />
      </div>
    );
  });

  return (
    <div>
      <List disablePadding={true}>{renderedItems}</List>
    </div>
  );
};

export default Accordion;
