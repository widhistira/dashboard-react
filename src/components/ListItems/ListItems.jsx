import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from './sections/ListItemIcon';
import ListItemAvatar from './sections/ListItemAvatar';

const ListItems = (props) => {
  const { data, type, divider, button } = props;

  return (
    <>
      {data.map((item) => (
        <ListItem divider={divider} button={button} key={item.id}>
          <React.Fragment>
            {type === 'ListItemIcon' && <ListItemIcon item={item} />}

            {type === 'ListItemAvatar' && <ListItemAvatar item={item} />}

            {type === 'ListItemText' && (
              <ListItemText primary={item.title} secondary={item.subTitle ? item.subTitle : ''} />
            )}
          </React.Fragment>
        </ListItem>
      ))}
    </>
  );
};

export default ListItems;
