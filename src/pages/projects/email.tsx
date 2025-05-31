import { css } from '../../../styled-system/css';

export const Email = () => (
  <a
    href="mailto:info@woodlandventure.co.uk"
    className={css({
      color: { base: 'brand.darkBrown' },
      borderBottom: '2px solid',
      borderColor: 'transparent',
      _hover: {
        borderBottom: '2px solid',
      },
      display: 'block',
    })}
  >
    Email: info@woodlandventure.co.uk
  </a>
);
