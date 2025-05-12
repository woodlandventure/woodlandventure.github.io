import { css } from '../../styled-system/css';
import forestSchoolActivity from '../assets/img/Forest_School_Activity.jpg';
import forestSchoolTeamBuilding from '../assets/img/Forest_School_Team_Building.jpg';
import { thinBrownBorder } from '../components/border';
import { WithShadow } from '../components/Shadow';

export function Schools() {
  return (
    <div>
      <div
        className={css({
          bg: 'url(/img/Woodland_Venture_Fire_Lighting_Activity.jpg)',
          bgSize: 'cover',
          bgPosition: 'center',
          py: { base: '16', md: '24' },
          px: '4',
          mb: '12',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1,
          },
        })}
      >
        <div
          className={css({
            maxW: '4xl',
            mx: 'auto',
            position: 'relative',
            zIndex: 2,
          })}
        >
          <WithShadow>
            <div
              className={css({
                bg: 'white',
                opacity: 0.95,
                p: { base: '8', md: '12' },

                textAlign: 'center',
              })}
            >
              <h1
                className={css({
                  fontSize: { base: '3xl', md: '4xl' },
                  fontWeight: 'bold',
                  mb: '8',
                  color: 'black',
                })}
              >
                Schools
              </h1>
              <p
                className={css({
                  fontSize: { base: 'lg', md: 'xl' },
                  color: 'gray.700',
                  fontStyle: 'italic',
                  lineHeight: 'relaxed',
                })}
              >
                "Forest School is an inspirational process that offers{' '}
                <span className={css({ fontWeight: 'bold' })}>all learners</span> regular
                opportunities to achieve,{' '}
                <span className={css({ fontWeight: 'bold' })}>
                  develop confidence and self-esteem
                </span>
                , through hands on learning experiences in a local woodland. Forest School sits
                within and compliments the wider context of outdoor learning."
              </p>
            </div>
          </WithShadow>
        </div>
      </div>

      <div
        className={css({
          maxW: '3xl',
          mx: 'auto',
          px: '4',
          pb: '16',
        })}
      >
        <div className={css({ mb: '16' })}>
          <WithShadow>
            <div
              className={css({
                bgColor: 'white',
                ...thinBrownBorder,
              })}
            >
              <p
                className={css({
                  padding: 8,
                  borderBottomColor: 'brand.yellow',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '4px',
                })}
              >
                <h2
                  className={css({
                    fontSize: '2xl',
                    fontWeight: 'bold',
                    mb: '4',
                  })}
                >
                  What can Woodland Venture Forest School offer you?
                </h2>
                <ul
                  className={css({
                    listStyle: 'disc',
                    pl: '6',
                    color: 'gray.700',
                    '& > li': {
                      mb: '2',
                    },
                  })}
                >
                  <li>A bespoke program at Priest's Wood in Langton Green</li>
                  <li>A bespoke program at your own site, subject to a suitability check</li>
                  <li>A one off bespoke session</li>
                  <li>Construction of a fire circle</li>
                  <li>Help in securing outdoor learning resources</li>
                </ul>
              </p>
              <img
                src={forestSchoolActivity}
                alt="Forest School Activity"
                className={css({
                  w: 'full',
                  h: 'auto',
                })}
              />
            </div>
          </WithShadow>
        </div>

        <div className={css({ mb: '16' })}>
          <WithShadow>
            <div
              className={css({
                bgColor: 'white',
                ...thinBrownBorder,
              })}
            >
              <p
                className={css({
                  p: 8,
                  borderBottomColor: 'brand.yellow',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '4px',
                })}
              >
                <h2
                  className={css({
                    fontSize: '2xl',
                    fontWeight: 'bold',
                    mb: '4',
                  })}
                >
                  What do you get for your money?
                </h2>
                <p
                  className={css({
                    color: 'gray.700',
                    mb: '4',
                  })}
                >
                  Woodland Venture is headed up by a qualified teacher with 13 years experience in
                  schools.
                </p>
                <ul
                  className={css({
                    listStyle: 'disc',
                    pl: '6',
                    mb: '4',
                    color: 'gray.700',
                    '& > li': {
                      mb: '2',
                    },
                  })}
                >
                  <li>Fully Trained Forest School Leader (Level 3)</li>
                  <li>Enhanced DBS checked</li>
                  <li>Independent insurance</li>
                  <li>
                    All reasonable recourses for sessions including tools and hot chocolate are
                    provided
                  </li>
                </ul>
                <p
                  className={css({
                    color: 'gray.700',
                  })}
                >
                  Download our Schools Brochure for further information{' '}
                  <a
                    href="/brochure.pdf"
                    className={css({
                      color: 'blue.600',
                      _hover: { color: 'blue.700' },
                    })}
                  >
                    here
                  </a>
                  .
                </p>
              </p>
              <img
                src={forestSchoolTeamBuilding}
                alt="Forest School Team Building"
                className={css({
                  w: 'full',
                  h: 'auto',
                })}
              />
            </div>
          </WithShadow>
        </div>

        <div>
          <WithShadow>
            <div
              className={css({
                bgColor: 'white',
                ...thinBrownBorder,
                p: 8,
              })}
            >
              <h2
                className={css({
                  fontSize: '2xl',
                  fontWeight: 'bold',
                  mb: '4',
                })}
              >
                Team Building
              </h2>
              <p
                className={css({
                  color: 'gray.700',
                  mb: '4',
                })}
              >
                We have developed a series of team building activities which will develop: group
                communication skills, planning, analysing, persevering and resilience.
              </p>
              <p
                className={css({
                  color: 'gray.700',
                })}
              >
                These activities can be incorporated into a bespoke program for your school or run
                as a one off day for children or staff.
              </p>
            </div>
          </WithShadow>
        </div>
      </div>
    </div>
  );
}
