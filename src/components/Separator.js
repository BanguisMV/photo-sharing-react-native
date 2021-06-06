import React from 'react'
import { StyleSheet, View } from 'react-native'
import theme from '../../assets/themes/index'

const Separator = () => {
    return (
        <View style={styles.line} />
    )
}

const styles = StyleSheet.create({
    line:{
        marginTop: theme.spacing.m,
        marginHorizontal: theme.spacing.m,
        height: 1,
        backgroundColor: theme.colors.gray,
    }
})
export default Separator
