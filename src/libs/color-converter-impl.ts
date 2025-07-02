export interface RGBColor {
  r: number;
  g: number;
  b: number;
}

export interface HSLColor {
  h: number; // 0-360
  s: number; // 0-100
  l: number; // 0-100
}

export interface ColorConverter {
  rgbToHex(color: RGBColor): string;
  rgbToHex(r: number, g: number, b: number): string;
  hexToRgb(hex: string): RGBColor;
  rgbToHsl(color: RGBColor): HSLColor;
  rgbToHsl(r: number, g: number, b: number): HSLColor;
  hslToRgb(color: HSLColor): RGBColor;
  hslToRgb(h: number, s: number, l: number): RGBColor;
}

class ColorConverterImpl implements ColorConverter {
  /**
   * 将单个 RGB 分量转换为两位的十六进制字符串
   */
  private componentToHex(component: number): string {
    const validComponent = Math.max(0, Math.min(255, Math.round(component)));
    const hex = validComponent.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  /**
   * 将 RGB 颜色值转换为十六进制颜色代码
   */
  rgbToHex(color: RGBColor): string;
  rgbToHex(r: number, g: number, b: number): string;
  rgbToHex(colorOrR: RGBColor | number, g?: number, b?: number): string {
    try {
      let r: number;

      if (typeof colorOrR === 'object') {
        r = colorOrR.r;
        g = colorOrR.g;
        b = colorOrR.b;
      } else {
        r = colorOrR;
        if (typeof g !== 'number' || typeof b !== 'number') {
          throw new Error(
            'When using separate values, all RGB components must be provided',
          );
        }
      }

      if (!Number.isFinite(r) || !Number.isFinite(g) || !Number.isFinite(b)) {
        throw new Error('RGB values must be valid numbers');
      }

      return `#${this.componentToHex(r)}${this.componentToHex(g)}${this.componentToHex(b)}`;
    } catch (error) {
      throw new Error(`Failed to convert RGB to Hex: ${error.message}`);
    }
  }

  /**
   * 将十六进制颜色代码转换为 RGB 颜色值
   */
  hexToRgb(hex: string): RGBColor {
    // 移除 # 符号（如果存在）
    hex = hex.replace(/^#/, '');

    // 验证十六进制颜色代码格式
    if (!/^[0-9A-Fa-f]{6}$/.test(hex)) {
      throw new Error('Invalid hex color format');
    }

    // 转换为 RGB 值
    const result: RGBColor = {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16),
    };

    return result;
  }

  /**
   * 将 RGB 颜色值转换为 HSL 颜色值
   */
  rgbToHsl(color: RGBColor): HSLColor;
  rgbToHsl(r: number, g: number, b: number): HSLColor;
  rgbToHsl(colorOrR: RGBColor | number, g?: number, b?: number): HSLColor {
    let r: number = 0;
    let normalizedR: number = 0;
    let normalizedG: number = 0;
    let normalizedB: number = 0;

    if (typeof colorOrR === 'object') {
      r = colorOrR.r;
      g = colorOrR.g;
      b = colorOrR.b;
    } else {
      r = colorOrR;
      if (typeof g !== 'number' || typeof b !== 'number') {
        throw new Error(
          'When using separate values, all RGB components must be provided',
        );
      }
    }

    // 归一化 RGB 值到 0-1 范围
    normalizedR = r / 255;
    normalizedG = g / 255;
    normalizedB = b / 255;

    const max = Math.max(normalizedR, normalizedG, normalizedB);
    const min = Math.min(normalizedR, normalizedG, normalizedB);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case normalizedR:
          h =
            (normalizedG - normalizedB) / d +
            (normalizedG < normalizedB ? 6 : 0);
          break;
        case normalizedG:
          h = (normalizedB - normalizedR) / d + 2;
          break;
        case normalizedB:
          h = (normalizedR - normalizedG) / d + 4;
          break;
      }

      h /= 6;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  }

  /**
   * 将 HSL 颜色值转换为 RGB 颜色值
   */
  hslToRgb(color: HSLColor): RGBColor;
  hslToRgb(h: number, s: number, l: number): RGBColor;
  hslToRgb(colorOrH: HSLColor | number, s?: number, l?: number): RGBColor {
    let h: number;

    if (typeof colorOrH === 'object') {
      h = colorOrH.h;
      s = colorOrH.s;
      l = colorOrH.l;
    } else {
      h = colorOrH;
      if (typeof s !== 'number' || typeof l !== 'number') {
        throw new Error(
          'When using separate values, all HSL components must be provided',
        );
      }
    }

    // 验证输入范围
    if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100) {
      throw new Error('HSL values out of range');
    }

    // 转换为 0-1 范围
    h = h / 360;
    s = s / 100;
    l = l / 100;

    function hue2rgb(p: number, q: number, t: number): number {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }

    let r: number, g: number, b: number;

    if (s === 0) {
      r = g = b = l;
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;

      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255),
    };
  }
}

export const colorConverter = new ColorConverterImpl();
