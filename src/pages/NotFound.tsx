import { css } from '../../styled-system/css'

export function NotFound() {
  return (
    <div className={css({ 
      textAlign: 'center',
      py: '16',
      maxW: '2xl',
      mx: 'auto'
    })}>
      <h1 className={css({ 
        fontSize: '4xl',
        fontWeight: 'bold',
        mb: '4'
      })}>
        404 - Page Not Found
      </h1>
      <p className={css({ 
        fontSize: 'lg',
        color: 'gray.600',
        mb: '8'
      })}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a 
        href="/"
        className={css({
          display: 'inline-block',
          px: '6',
          py: '3',
          bg: 'blue.600',
          color: 'white',
          borderRadius: 'md',
          _hover: { bg: 'blue.700' }
        })}
      >
        Return Home
      </a>
    </div>
  )
} 