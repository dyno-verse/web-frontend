/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./node_modules/flowbite/**/*.{js,ts}",
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        colors: {
            red: {
                50: '#FFF2F6',
                100: '#FFCCDB',
                200: '#FF99B8',
                300: '#FF4D82',
                400: '#FB185C',
                500: '#E51755',
                600: '#CC194F',
                700: '#99123B',
                800: '#660C27',
                900: '#4D091E'
            },
            white: '#FFFFFF',
            black: {
                900: '#000000'
            },
            neutral: {
                100: '#F2F2F2',
                300: '#B2B2B2',
                500: '#808080'
            },
            yellow: {
                50: '#FFFCF2',
                500: '#F6CD53'
            },
            orange: '#FF8A00',
            purple: {
                100: '#E9CCFF',
                600: '#6400B2',
                500: '#8100E6',
                700: '#560099',
                900: '#390066'
            },
            green: {
                100: '#E3FFF5',
                500: '#23B882',
                700: '#056652',
                800: '#044D3E'
            },
            blue: {
                100: '#CCE3FF',
                500: '#0040F2'
            }
        },
        extend: {
            colors: {
                red: {
                    50: '#FFF2F6',
                    100: '#FFCCDB',
                    200: '#FF99B8',
                    300: '#FF4D82',
                    400: '#FB185C',
                    500: '#E51755',
                    600: '#CC194F',
                    700: '#99123B',
                    800: '#660C27',
                    900: '#4D091E'
                },
                white: '#FFFFFF',
                black: {
                    900: '#000000'
                },
                neutral: {
                    100: '#F2F2F2',
                    300: '#B2B2B2',
                    500: '#808080'
                },
                yellow: {
                    50: '#FFFCF2',
                    500: '#F6CD53'
                },
                orange: '#FF8A00',
                purple: {
                    100: '#E9CCFF',
                    600: '#6400B2',
                    500: '#8100E6',
                    700: '#560099',
                    900: '#390066'
                },
                green: {
                    100: '#E3FFF5',
                    500: '#23B882',
                    700: '#056652',
                    800: '#044D3E'
                },
                blue: {
                    100: '#CCE3FF',
                    500: '#0040F2'
                }
            },
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}

// background: #E51755;
