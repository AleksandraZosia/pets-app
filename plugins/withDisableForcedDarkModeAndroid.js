// TODO Check if this is works correctly by running eas build --platform android --profile preview
const {
  createRunOncePlugin,
  withAndroidStyles,
  AndroidConfig,
} = require("@expo/config-plugins");

function setForceDarkModeToFalse(styles) {
  styles = AndroidConfig.Styles.assignStylesValue(styles, {
    add: true,
    parent: AndroidConfig.Styles.getAppThemeGroup(),
    name: `android:forceDarkAllowed`,
    value: "false",
  });

  return styles;
}

const withDisableForcedDarkModeAndroid = (config) => {
  return withAndroidStyles(config, (config) => {
    config.modResults = setForceDarkModeToFalse(config.modResults);
    return config;
  });
};

module.exports = createRunOncePlugin(
  withDisableForcedDarkModeAndroid,
  "disable-forced-dark-mode",
  "1.0.0"
);
