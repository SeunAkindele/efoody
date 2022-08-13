import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const tag = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.medium};
`;

const small = (theme) => `
font-family: ${theme.fonts.heading};
font-size: ${theme.fontSizes.small};
`;

const white = (theme) => `
  color: ${theme.colors.text.inverse};
`;

const black = (theme) => `
  color: ${theme.colors.text.black};
`;

const blue = (theme) => `
  color: ${theme.colors.brand.primary};
`;

const orange = (theme) => `
  color: ${theme.colors.text.orange};
`;

const success = (theme) => `
  color: ${theme.colors.text.success};
`;

const title = (theme) => `
  font-size: ${theme.fontSizes.title};
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
  tag,
  title,
  small,
};

const colors = {
  white,
  black,
  blue,
  orange,
  success,
  error
}

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
  ${({ color, theme }) => colors[color](theme)}
`;

Text.defaultProps = {
  variant: "body",
  color: "black"
};