import {DefaultTheme} from '@react-navigation/native'
import colors from '../StyleSheets/colors'

const myTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.secondary,
        background: colors.white
    }
}

export default myTheme;