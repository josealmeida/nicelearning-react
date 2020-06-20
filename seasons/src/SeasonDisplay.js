import React from 'react';
import { Icon } from 'semantic-ui-react';

const seasonConfig = {
  summer: {
    text: 'Warm Weather',
    iconName: 'sun',
    iconColor: 'yellow',
  },
  winter: {
    text: 'Chilly Weather',
    iconName: 'snowflake',
    iconColor: 'blue',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName, iconColor } = seasonConfig[season];

  return (
    <div>
      <Icon name={iconName} size="massive" color={iconColor} />
      <h1>{text}</h1>
      <Icon name={iconName} size="massive" color={iconColor} />
    </div>
  );
};

export default SeasonDisplay;
