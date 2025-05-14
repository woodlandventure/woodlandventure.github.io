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
  hoverAnimation = false,
}: {
  children: React.ReactNode;
  borderWidth?: 'thin' | 'thick';
  hoverAnimation?: boolean;
}) => (
  <div
    className={css({
      position: 'relative',
      isolation: 'isolate',
      width: 'fit-content',
      height: 'fit-content',
    })}
  >
    <div
      className={css({
        zIndex: 1,
        position: 'relative',

        ...(borderWidth === 'thin' ? thinBrownBorder : thickBrownBorder),
        ...(hoverAnimation
          ? {
              _hover: { transform: 'translateY(-4px)' },
              transition: 'transform 0.2s',
            }
          : {}),
      })}
    >
      {children}
    </div>
    <Shadow />
  </div>
);
