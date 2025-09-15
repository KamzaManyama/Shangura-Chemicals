tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: {
              50: '#f7fee7',
              100: '#ecfccb',
              200: '#d9f99d',
              300: '#bef264',
              400: '#a3e635',
              500: '#84cc16', // Main green
              600: '#65a30d',
              700: '#4d7c0f',
              800: '#3f6212',
              900: '#365314',
            },
            accent: {
              50: '#fffbeb',
              100: '#fef3c7',
              200: '#fde68a',
              300: '#fcd34d',
              400: '#fbbf24',
              500: '#f59e0b', // Adjusted yellow
              600: '#d97706',
              700: '#b45309',
              800: '#92400e',
              900: '#78350f',
            }
          },
          fontFamily: {
            heading: ['Poppins', 'ui-sans-serif', 'system-ui'],
            body: ['Inter', 'ui-sans-serif', 'system-ui']
          }
        }
      }
    }