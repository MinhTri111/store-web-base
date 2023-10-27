export const SIZE = {
  XXL4: 2561, // DESKTOP L3
  XXL3: 2161, // DESKTOP L2
  XXL2: 1921, // DESKTOP L1
  XXL: 1601, // DESKTOP L
  XL2: 1441, // DESKTOP M+
  XL1: 1367, // DESKTOP M
  XL: 1281, // DESKTOP M
  LG: 1025, // TABLET L
  MD: 769, // TABLET M
  SM: 576, // Mobile L
  XS: 423, // Mobile M
};
export const SIZEH = {
  PAD3: 1386,
  PAD2: 1025,
  PAD1: 860,
  MAC16: 760,
  MAC14: 660,
  MAC13: 606,
};

interface SizeResponsive {
  height?: number;
  width?: number;
}

export default class ResponsiveUI {
  height: number | undefined;
  width: number | undefined;

  static SIZE = SIZE;

  static SIZEH = SIZEH;

  constructor(size: SizeResponsive) {
    this.height = size.height;
    this.width = size.width;
  }

  static greaterThan(windowSize: number): string {
    return `@media only screen and (min-width: ${windowSize}px)`;
  }

  static lessThan(windowSize: number): string {
    return `@media only screen and (max-width: ${windowSize - 1}px)`;
  }

  static between(min: number, max: number): string {
    return `@media only screen and (min-width: ${min}px) and (max-width: ${max - 1}px)`;
  }

  static greaterThanH(windowSize: number): string {
    return `@media only screen and (min-height: ${windowSize}px)`;
  }

  static lessThanH(windowSize: number): string {
    return `@media only screen and (max-height: ${windowSize - 1}px)`;
  }

  static betweenH(min: number, max: number): string {
    return `@media only screen and (min-height: ${min}px) and (max-height: ${max - 1}px)`;
  }

  test(): string {
    return '';
  }
}
