import { css } from '../../styled-system/css'

export function About() {
  const currentYear = new Date().getFullYear()
  const youngestChildAge = currentYear - 2011
  const oldestChildAge = currentYear - 1997
  const yearsTeaching = currentYear - 2003

  return (
    <div className={css({
      maxW: '7xl',
      mx: 'auto',
      py: { base: '8', md: '16' },
      px: '4'
    })}>
      <div className={css({
        display: 'grid',
        gridTemplateColumns: { base: '1fr', md: 'repeat(2, 1fr)' },
        gap: { base: '8', md: '12' },
        alignItems: 'start'
      })}>
        <div>
          <img 
            src="/img/Woodland_Venture_Dan_Headshot.jpg"
            alt="Dan Gillinder"
            className={css({
              maxW: '340px',
              w: 'full',
              mx: 'auto',
              display: 'block',
              borderRadius: 'lg',
              shadow: 'lg'
            })}
          />
        </div>

        <div>
          <h1 className={css({ 
            fontSize: { base: '3xl', md: '4xl' },
            fontWeight: 'bold',
            mb: '6',
            textAlign: { base: 'center', md: 'left' }
          })}>
            Dan Gillinder
          </h1>
          <div className={css({ 
            fontSize: 'lg',
            lineHeight: 'relaxed',
            color: 'gray.700'
          })}>
            <p className={css({ mb: '4' })}>
              Dan is the current managing director of Woodland Venture. He is a family man with a son and 4 stepchildren,
              ranging in ages from {youngestChildAge} to {oldestChildAge}.
            </p>
            <p className={css({ mb: '4' })}>
              He has been a Primary School teacher for {yearsTeaching} years
              working in a range of year groups and leader roles.
            </p>
            <p className={css({ mb: '4' })}>
              Prior to his career in teaching Dan worked through a range of roles in outdoor
              pursuits which include Leadership responsibilities and in his spare time he assists
              the running of a local Scout Troop.
            </p>
            <p>
              He has completed a Forest School leader course and
              has been running Forest Schools successfully
              in partnership with several local schools.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 