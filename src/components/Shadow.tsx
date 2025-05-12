import { css } from '../../styled-system/css';
import { thickBrownBorder, thinBrownBorder } from './border';

export const Shadow = () => (
  <div
    className={css({
      bgColor: 'brand.darkBrown',
      width: '100%',
      height: '100%',
      zIndex: 0,
      position: 'absolute',
      top: '4px',
      left: '4px',
    })}
  />
);

export const WithShadow = ({
  children,
  borderWidth = 'thin',
}: {
  children: React.ReactNode;
  borderWidth?: 'thin' | 'thick';
}) => (
  <div
    className={css({
      position: 'relative',
      isolation: 'isolate',
      width: 'fit-content',
      height: 'fit-content',
      ...(borderWidth === 'thin' ? thinBrownBorder : thickBrownBorder),
    })}
  >
    <div className={css({ zIndex: 1, position: 'relative' })}>{children}</div>
    <Shadow />
  </div>
);
