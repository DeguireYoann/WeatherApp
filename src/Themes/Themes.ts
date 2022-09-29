interface ITheme {
    color: {
        commonBackground: string,
        accentBackground: string,
        title: string,
    },
    weatherCard: {
        background: {
            sunny: string,
            cloudy: string,
            rainy: string,
        },
    },
}

interface IThemes {
    global: any,
    light: ITheme,
    dark: ITheme,
}

export const Themes: IThemes = {
    global: {},
    light: {
        color: {
            commonBackground: "#9CC0E7",
            accentBackground: "#fff",
            title:"#4589E1",
        },
        weatherCard: {
            background: {
                sunny: "#FA9FBD",
                cloudy: "#31A752",
                rainy: "#0F63FF",
            },
        },
    },
    dark: {
        color: {
            commonBackground: "#6272A4",
            accentBackground: "#2A428C",
            title: "#fff",
        },
        weatherCard: {
            background: {
                sunny: "#FA9FBD",
                cloudy: "#31A752",
                rainy: "#0F63FF",
            },
        },
    },
}