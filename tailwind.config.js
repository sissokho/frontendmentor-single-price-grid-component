module.exports = {
    purge: ['index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            tablet: '768px'
        },
        colors: {
            cyan: 'hsl(179, 62%, 43%)',
            yellow: 'hsl(71, 73%, 54%)',
            gray: 'hsl(204, 43%, 93%)',
            blue: 'hsl(218, 22%, 67%)',
            white: 'hsl(0, 0%, 100%)'
        },
        fontFamily: {
            karla: ['Karla', 'sans-serif']
        },
        fontWeight: {
            regular: 400,
            bold: 700
        },
        extend: {
            spacing: {
                '88': '22rem'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
