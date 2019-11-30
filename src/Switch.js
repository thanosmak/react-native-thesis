import React from 'react';
import { Switch as Switcher } from 'react-native';
import PropTypes from 'prop-types';
import DefaultTheme, { withCustomLib } from './theme';

function Switch({
  initialValue,
  onChange,
  color,
  disabled,
  trackColor,
  ios_backgroundColor,
  ...rest
}) {
  const [switchValue, setSwitchValue] = React.useState(initialValue);
  React.useEffect(() => {
    onChange(switchValue);
  }, [switchValue]);
  function onPressSwitch() {
    setSwitchValue(!switchValue);
    return null;
  }

  trackColor.true = color === 'primary' ? DefaultTheme.COLORS.PRIMARY : color;

  return (
    <Switcher
      disabled={disabled}
      trackColor={{ ...trackColor }}
      ios_backgroundColor={ios_backgroundColor}
      value={switchValue}
      onValueChange={() => {
        onPressSwitch();
      }}
      {...rest}
    />
  );
}

Switch.defaultProps = {
  color: DefaultTheme.COLORS.PRIMARY,
  ios_backgroundColor: DefaultTheme.COLORS.GREY,
  trackColor: {
    false: DefaultTheme.COLORS.GREY,
    true: DefaultTheme.COLORS.PRIMARY,
  },
  disabled: false,
  initialValue: false,
};

Switch.propTypes = {
  ...Switcher.propTypes,
  color: PropTypes.oneOfType([
    PropTypes.oneOf(['primary', 'theme', 'error', 'warning', 'success', 'info']),
    PropTypes.string,
  ]),
  disabled: PropTypes.bool,
  initialValue: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default withCustomLib(Switch);
