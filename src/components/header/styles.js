import { StyleSheet } from 'react-native'
import { scale } from "../../hooks/ScaleSize"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    leftView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerView: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightView: {
        flex: 1,
    },
    titleText: {
        fontSize: scale(18),
        color: '#000000',
        fontWeight: '600'
    }
})

export default styles;