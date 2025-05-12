import { css } from '../../styled-system/css';
import danHeadshot from '../assets/img/Woodland_Venture_Dan_Headshot.jpg';
import { WithShadow } from '../components/Shadow';

export function About() {
  const currentYear = new Date().getFullYear();
  const youngestChildAge = currentYear - 2011;
  const oldestChildAge = currentYear - 1997;
  const yearsTeaching = currentYear - 2003;

  return (
    <div
      className={css({
        width: '100%',
        mx: 'auto',
        py: { base: '8', md: '16' },
        px: '4',
        bg: 'brand.cream',
      })}
    >
      <div
        className={css({
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: { base: '8', md: '12' },
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <div>
          <img
            src={danHeadshot}
            alt="Dan Gillinder"
            className={css({
              maxW: '340px',
              w: 'full',
              mx: 'auto',
              display: 'block',
              shadow: 'lg',

              borderColor: 'brand.darkBrown',
              borderStyle: 'solid',
              borderWidth: '1px',
            })}
          />
        </div>

        <WithShadow>
          <div
            className={css({
              maxWidth: '3xl',
              position: 'relative',
              bg: 'white',
              p: 8,
              borderColor: 'brand.darkBrown',
              borderStyle: 'solid',
              borderWidth: '1px',
              zIndex: 1,
            })}
          >
            <h1
              className={css({
                fontSize: { base: '3xl', md: '4xl' },
                fontWeight: 'bold',
                mb: '6',
                color: 'brand.darkBrown',
                textAlign: { base: 'center', md: 'left' },
                width: '100%',
                borderBottomColor: 'brand.darkBrown',
                borderBottomWidth: '1px',
                borderBottomStyle: 'solid',
              })}
            >
              Dan Gillinder
            </h1>
            <div
              className={css({
                fontSize: 'lg',
                lineHeight: 'relaxed',
                color: 'gray.700',
              })}
            >
              <p className={css({ mb: '4' })}>
                Dan is the current managing director of Woodland Venture. He is a family man with a
                son and 4 stepchildren, ranging in ages from {youngestChildAge} to {oldestChildAge}.
              </p>
              <p className={css({ mb: '4' })}>
                He has been a Primary School teacher for {yearsTeaching} years working in a range of
                year groups and leader roles.
              </p>
              <p className={css({ mb: '4' })}>
                Prior to his career in teaching Dan worked through a range of roles in outdoor
                pursuits which include Leadership responsibilities and in his spare time he assists
                the running of a local Scout Troop.
              </p>
              <p>
                He has completed a Forest School leader course and has been running Forest Schools
                successfully in partnership with several local schools.
              </p>
            </div>
          </div>
        </WithShadow>
      </div>
    </div>
  );
}
