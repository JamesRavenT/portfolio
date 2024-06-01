export function getHeaderBackground(theme) {
    const isDark = theme
    const bg = isDark ? 'linear-gradient(to bottom,  #131313, #232323, #333333)'  : 'linear-gradient(to bottom,  #c3c3c3, #f2f3f4, #ffffff)' 

    let style = {
        bg : {
            background: bg,
        }
    }

    return style
}

export function getHeaderWelcomeLine(theme) {
    const isDark = theme;
    const color = isDark ? '#f2f3f4' : '#232323'
    let style = {
        line : {
            backgroundColor: color,
            transition: '1s'
        },

        color : {
            color: color,
            transition: '1s'
        }
    }

    return style

}