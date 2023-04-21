import {
  argbFromHex,
  blueFromArgb,
  greenFromArgb,
  redFromArgb,
  Scheme,
  themeFromSourceColor,
} from "@material/material-color-utilities";
import { colorBlend, colorToArray, hexToColor } from "@antv/smart-color";

export abstract class CssScheme {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  background: string;
  onBackground: string;
  surface: string;
  surface1: string;
  surface2: string;
  surface3: string;
  surface4: string;
  surface5: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  outline: string;
  outlineVariant: string;
  shadow: string;
  scrim: string;
  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;

  protected constructor(scheme: Scheme) {
    const primary = scheme.primary;
    const surface = scheme.surface;

    this.primary = hexNumToCss(primary);
    this.onPrimary = hexNumToCss(scheme.onPrimary);
    this.primaryContainer = hexNumToCss(scheme.primaryContainer);
    this.onPrimaryContainer = hexNumToCss(scheme.onPrimaryContainer);
    this.secondary = hexNumToCss(scheme.secondary);
    this.onSecondary = hexNumToCss(scheme.onSecondary);
    this.secondaryContainer = hexNumToCss(scheme.secondaryContainer);
    this.onSecondaryContainer = hexNumToCss(scheme.onSecondaryContainer);
    this.tertiary = hexNumToCss(scheme.tertiary);
    this.onTertiary = hexNumToCss(scheme.onTertiary);
    this.tertiaryContainer = hexNumToCss(scheme.tertiaryContainer);
    this.onTertiaryContainer = hexNumToCss(scheme.onTertiaryContainer);
    this.error = hexNumToCss(scheme.error);
    this.onError = hexNumToCss(scheme.onError);
    this.errorContainer = hexNumToCss(scheme.errorContainer);
    this.onErrorContainer = hexNumToCss(scheme.onErrorContainer);
    this.background = hexNumToCss(scheme.background);
    this.onBackground = hexNumToCss(scheme.onBackground);
    this.surface = hexNumToCss(surface);
    this.surface1 = getSurface(1, primary, surface);
    this.surface2 = getSurface(2, primary, surface);
    this.surface3 = getSurface(3, primary, surface);
    this.surface4 = getSurface(4, primary, surface);
    this.surface5 = getSurface(5, primary, surface);
    this.onSurface = hexNumToCss(scheme.onSurface);
    this.surfaceVariant = hexNumToCss(scheme.surfaceVariant);
    this.onSurfaceVariant = hexNumToCss(scheme.onSurfaceVariant);
    this.outline = hexNumToCss(scheme.outline);
    this.outlineVariant = hexNumToCss(scheme.outlineVariant);
    this.shadow = hexNumToCss(scheme.shadow);
    this.scrim = hexNumToCss(scheme.scrim);
    this.inverseSurface = hexNumToCss(scheme.inverseSurface);
    this.inverseOnSurface = hexNumToCss(scheme.inverseOnSurface);
    this.inversePrimary = hexNumToCss(scheme.inversePrimary);
  }
}

export class LightTwScheme extends CssScheme {
  constructor(scheme: Scheme) {
    super(scheme);
  }
}

export class DarkTwScheme extends CssScheme {
  constructor(scheme: Scheme) {
    super(scheme);
  }
}

function hexNumToCss(hexNum: number): string {
  const [r, g, b] = colorToArray(
    hexToColor(`#${hexNum.toString(16).slice(2)}`)
  );

  return `${r} ${g} ${b}`;
}

function getSurface(level: number, primary: number, surface: number): string {
  const opacities = [0.05, 0.08, 0.11, 0.12];
  let opacity: number;

  if (level <= 4 && level >= 1) {
    opacity = opacities[Math.trunc(level - 1)];
  } else if (level > 4) {
    opacity = 0.14;
  } else {
    throw new Error("Level must be greater than 0");
  }

  const rst = colorBlend(
    {
      model: "rgba",
      value: {
        r: redFromArgb(surface),
        g: greenFromArgb(surface),
        b: blueFromArgb(surface),
        a: 1,
      },
    },
    {
      model: "rgba",
      value: {
        r: redFromArgb(primary),
        g: greenFromArgb(primary),
        b: blueFromArgb(primary),
        a: opacity,
      },
    },
    "overlay"
  );

  const [r, g, b] = colorToArray(rst);

  return `${r} ${g} ${b}`;
}

export interface CssSchemes {
  lightTwScheme: LightTwScheme;
  darkTwScheme: DarkTwScheme;
}

export default function (source: string): CssSchemes {
  const theme = themeFromSourceColor(argbFromHex(source));

  return {
    lightTwScheme: new LightTwScheme(theme.schemes.light),
    darkTwScheme: new DarkTwScheme(theme.schemes.dark),
  };
}
