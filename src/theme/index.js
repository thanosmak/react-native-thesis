import React from 'react';
import PropTypes from 'prop-types';

// import COLORS & SIZES
import COLORS from './colors';
import SIZES from './sizes';

// default theme with COLORS & SIZES
const DefaultTheme = {
  COLORS: COLORS,
  SIZES: SIZES,
};

export default DefaultTheme;

// creating the DefaultTheme context
const DefaultContext = React.createContext();

/*
*   withCustomLib
*   args: Component - React Component, styles to be added to Component
*   theme: if no styles or theme add default theme={ SIZES, COLORS }
*/

export function withCustomLib(Component, styles) {
  // eslint-disable-next-line react/no-multi-comp
  return class extends React.Component {
    render() {
      const { props } = this;
      return (
        <DefaultContext.Consumer>
          {theme => (
            <Component
              {...props}
              theme={{ ...DefaultTheme, ...theme }}
              styles={styles && styles({ ...DefaultTheme, ...theme })}
            />
          )}
        </DefaultContext.Consumer>
      );
    }
  };
}

/*
*   CustomProvider using React.Component
*   DefaultContext.Provider value has the default value from { COLORS, SIZES }
*/

// eslint-disable-next-line react/no-multi-comp
export class CustomProvider extends React.Component {
  static defaultProps = {
    children: null,
    theme: {},
  }

  render() {
    const { theme, children } = this.props;
    const { COLORS: CUSTOM_COLORS, SIZES: CUSTOM_SIZES, customTheme } = theme;

    const providerTheme = {
      COLORS: { ...DefaultTheme.COLORS, ...CUSTOM_COLORS },
      SIZES: { ...DefaultTheme.SIZES, ...CUSTOM_SIZES },
      ...customTheme
    };

    return (
      <DefaultContext.Provider value={providerTheme}>
        {children}
      </DefaultContext.Provider>
    );
  }
}

CustomProvider.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.any,
};
