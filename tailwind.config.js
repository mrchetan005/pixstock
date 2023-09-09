/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'large-end': '0 16px 16px 0',
        'extra-large': '28px',
      },
      fontFamily: {
        'ff-primary': '"Work Sans", sans-serif',
      },
      fontSize: {
        'base': '62.5%',
        'display-large': '5.7rem',
        'display-medium': '4.5rem',
        'display-small': '3.6rem',
        'headline-large': '3.2rem',
        'headline-medium': '2.8rem',
        'headline-small': '2.4rem',
        'title-large': '2.2rem',
        'title-medium': '1.6rem',
        'title-small': '1.4rem',
        'label-large': '1.4rem',
        'label-medium': '1.2rem',
        'label-small': '1.1rem',
        'body-large': '1.6rem',
        'body-medium': '1.4rem',
        'body-small': '1.2rem',
      },
      fontWeight: {
        'regular': 400,
        'medium': 500,
      },
      borderRadius: {
        'extra-small': '4px',
        'small': '8px',
        'medium': '12px',
        'large': '16px',
        'large-end': '0 16px 16px 0',
        'extra-large': '28px',
        'circle': '50%',
        'full': '500px',
      },
      boxShadow: {
        'elevation-1': '0 1px 2px hsla(0, 0%, 0%, 0.3), 0 1px 3px 1px hsla(0, 0%, 0%, 0.15)',
        'elevation-2': '0 1px 2px hsla(0, 0%, 0%, 0.3), 0 2px 6px 2px hsla(0, 0%, 0%, 0.15)',
      },
      height: {
        'top-app-bar-height': '64px',
      },
      extend: {
        transitionDuration: {
          'short-1': '100ms',
          'short-2': '200ms',
          'medium-1': '250ms',
          'medium-2': '400ms',
          'long': '500ms',
        },
        transitionTimingFunction: {
          'linear': 'cubic-bezier(0, 0, 1, 1)',
          'standard': 'cubic-bezier(0.2, 0, 0, 1)',
          'emphasized': 'cubic-bezier(0.2, 0, 0, 1)',
          'emphasized-decelerate': 'cubic-bezier(0.05, 0.7, 0.1, 1)',
          'emphasized-accelerate': 'cubic-bezier(0.3, 0, 0.8, 0.15)',
          'legacy': 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
  },
  plugins: [],
}