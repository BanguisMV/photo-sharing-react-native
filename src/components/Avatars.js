import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import theme from '../../assets/themes/index'

const Avatars = ({ avatar }) => {
    return (
        <View>
            {avatar.map((each,index) => (
                <Image
                key={each.id}
                source={each.image}
                style={[
                    styles.avatarStyle,
                    { zIndex: index, marginLeft: (index * 16) },
                     index !== (avatar.length - 1) && { position: 'absolute' }
                ]}
                />
            ))}
        </View>
    )
}


const styles = StyleSheet.create({
    avatarStyle:{
        resizeMode: 'cover',
        width: theme.imageHeight.xs,
        height: theme.imageHeight.xs,
        borderRadius: theme.imageHeight.xs / 2,
        borderWidth: theme.borderRadius.xs,
        borderColor: theme.colors.white,
    }
})


export default Avatars
