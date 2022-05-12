import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: '#27ae60',
  secondary: '#3498db',
  error: '#FF6A5D',
  success: '#47C272',
  white: '#ffffff',
  black: '#000000',
  night: '#2c3e50',
  gray: '#A29EB6',
  overlayPrimary: 'rgba(39, 174, 96, 0.5)',
  transparent: "transparent",
}

export const SIZES = {
  // global sizes
  base: 8,
  padding: 20,
  // fonts
  h1: 34,
  h2: 30,
  h3: 26,
  h4: 20,
  h5: 16,
  h6: 14,
  body: 16,
  bodySmall: 14,
  caption: 12,

  // App sizes
  width,
  height,
}

export const FONTS = {
  h1: { fontSize: SIZES.h1, fontFamily: 'Poppins-Bold' },
  h2: { fontSize: SIZES.h2, fontFamily: 'Poppins-Bold' },
  h3: { fontSize: SIZES.h3, fontFamily: 'Poppins-Bold' },
  h4: { fontSize: SIZES.h4, fontFamily: 'Poppins-Bold' },
  h5: { fontSize: SIZES.h5, fontFamily: 'Poppins-Bold' },
  h6: { fontSize: SIZES.h6, fontFamily: 'Poppins-Bold' },
  body: { fontSize: SIZES.body, fontFamily: 'Poppins-Regular' },
  bodySmall: { fontSize: SIZES.bodySmall, fontFamily: 'Poppins-Regular' },
  caption: { fontSize: SIZES.caption, fontFamily: 'Poppins-Regular' },
}

export default { COLORS, SIZES, FONTS };