import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import PropTypes from 'prop-types';

import DefaultTheme, { withCustomLib } from './theme';
import getIconType from './helpers/getIconType';
import config from './config/config.json';

const Galio = createIconSetFromIcoMoon(config, 'Galio', './fonts/galio.ttf');

function Icon({
  name,
  family,
  size,
  color,
  styles,
  theme,
  ...rest
}) {
  if (family === 'Galio') {
    if (name) {
      return (
        <Galio
          name={name}
          size={size || theme.SIZES.BASE}
          color={color || theme.COLORS.BLACK}
          {...rest}
        />
      );
    }
  } else {
    const IconInstance = getIconType(family);
    if (name && IconInstance) {
      return (
        <IconInstance
          name={name}
          size={size || theme.SIZES.BASE}
          color={color || theme.COLORS.BLACK}
          {...rest}
        />
      );
    }
  }

  return null;
}

Icon.defaultProps = {
  name: null,
  family: null,
  size: null,
  color: null,
  styles: {},
  theme: DefaultTheme,
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  family: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  styles: PropTypes.any,
  theme: PropTypes.any,
};

export default withCustomLib(Icon);
