import * as styled from 'styled-components';

const consts = {
  appMargin: 'calc((100vh - 200px) * 0.05)',
  colorBackground: '#FFFFFF',
  colorButtonPrimaryDefault: '#3878B8',
  colorButtonPrimaryDisabled: '#8799BE',
  colorButtonPrimaryHover: '#162447',
  colorButtonSecondaryDisabled: '#A5A5A5',
  colorButtonSecondaryHover: '#E1EAF5',
  colorDarkBlue300: '#354C86',
  colorDarkBlue600: '#2B3C68',
  colorDarkBlueText: '#203260',
  colorDisabledSubtitle: '#7A7C7E',
  colorFaded: '#F4F8FC',
  colorFormFieldPlaceholder: '#627792',
  colorFormFieldUnderline: '#D1DDE6',
  colorLightBlue: '#5985D6',
  colorNotification: '#2CAC85',
  colorRejected: '#D78542',
  colorSearchInput: '#557BC2',
  colorTableBorder: '#EBF2F8',
  colorTableEmptyText: '#4C566E',
  fontHeaders: 'font-family: OpenSans, Karla, sans-serif; font-weight: 700;',
  fontSizeButtons: '13px',
  fontSizeContent: '16px',
  fontSizeHeaders: '14px',
  fontSizeHeadersLarge: '20px',
  fontSizeNotifications: '13px',
}
const constsGenerated = {
  documentBackground: `linear-gradient(45deg, ${consts.colorDarkBlue300}, ${consts.colorDarkBlue600})`,
}

export type IThemeInterface = typeof consts & typeof constsGenerated

const theme: IThemeInterface = { ...consts, ...constsGenerated };

export default theme

export type StyledFunction<T> = styled.ThemedStyledFunction<T, IThemeInterface>;

export function withProps<T, U extends HTMLElement = HTMLElement>(
  styledFunction: StyledFunction<React.HTMLProps<U>>,
): StyledFunction<T & React.HTMLProps<U>> {
  return styledFunction;
}
