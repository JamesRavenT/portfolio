export function bodyContent(color) {
    const style = {

        bg : {
            backgroundColor: color,
            transition: '1s'
        },

        block : {
            backgroundColor : color,
            transition: '1s'
        },

        border : {
            borderTop: '1px solid' + color,
            borderBottom: '1px solid' + color,
            transition: '1s'
        },

        borderBottom : {
            borderBottom: '1px solid' + color,
            transition: '1s'
        },

        color : {
            color: color,
            transition: '1s'
        },

        linkcolor : {
            color: '#1dadc0'
        },

        container : {
            border: '2px solid' + color
        },

        dot : {
            color: color,
            transition: '1s'
        },

        textWrapper : {
            height: 'auto',
            width: 'auto',
            overflow: 'hidden'
        },

        textLight : {
            color: color,
            position: 'absolute',
            transition: '1s',
            
        },

        textDark: {
            color: color,
            opacity: '1',
            transition: '1s'
        },


    }

    return style
}


export function showCategory() {
    const visibility = {
        visibility : {
            opacity: '1',
            transition:'1s'
        }
    }
    return visibility
}

export function hideCategory() {
    const visibility = {
        visibility : {
            position: 'absolute',
            opacity: '0',
      
        }
    }
    return visibility
}
