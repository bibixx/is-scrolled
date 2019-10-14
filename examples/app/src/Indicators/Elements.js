import styled from 'styled-components';

const bg = 'rgba(40, 44, 52, 1)';
const transparentBg = 'rgba(40, 44, 52, 0)';

export const IndicatorsElement = styled.div`
  &::before, &::after {
    position: absolute;
    display: block;
    content: '';
    z-index: 2;
    pointer-events: none;
    transition: opacity .2s ease-in-out;
  }
`;

export const IndicatorsElementX = styled(IndicatorsElement)`
  &::before, &::after {
    width: 33vh;
    height: 100%;
  }

  &::before {
    left: 0;
    opacity: ${props => props.left ? 1 : 0};
    background: linear-gradient(to right, ${bg}, ${transparentBg});
  }

  &::after {
    right: 0;
    opacity: ${props => props.right ? 1 : 0};
    background: linear-gradient(to left, ${bg}, ${transparentBg});
  }
`

export const IndicatorsElementY = styled(IndicatorsElement)`
  &::before, &::after {
    width: 100%;
    height: 33vh;
  }

  &::before {
    top: 0;
    opacity: ${props => props.top ? 1 : 0};
    background: linear-gradient(to bottom, ${bg}, ${transparentBg});
  }

  &::after {
    bottom: 0;
    opacity: ${props => props.bottom ? 1 : 0};
    background: linear-gradient(to top, ${bg}, ${transparentBg});
  }
`
