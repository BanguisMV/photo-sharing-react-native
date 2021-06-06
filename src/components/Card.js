import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Pressable } from 'react-native'
import theme from '../../assets/themes/index'
import Avatars from './Avatars'

const Card = ({ data,navigation }) => {
    return (
        <ImageBackground source={data.background} style={styles.cardBackground}>
            <Pressable onPress={() => navigation.navigate('Shared Album', { album: data })}>
                <View style={styles.cardContentWrapper}>

                     <View>
                        <Text style={styles.cardContentTitle}> {data.title} </Text>
                        <Text style={styles.cardContentUser}> {"Created by: " + data.user}  </Text>
                    </View>

                    <View  style={styles.cardContentWrapper}>
                        <Avatars avatar={data.avatars} />
                    </View>

                </View>
            </Pressable>
        </ImageBackground>
    )
}

export default Card


const styles = StyleSheet.create({
    cardBackground:{
        resizeMode: 'cover',
        overflow: 'hidden',
        height: theme.imageHeight.s,
        marginTop: theme.spacing.m,
        marginHorizontal: theme.spacing.m,
        paddingHorizontal: theme.spacing.m,
        borderRadius: theme.borderRadius.m,
        justifyContent: 'center',
    },
    cardContentWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardContentTitle:{
        ...theme.textVariants.h1,
        color: theme.colors.white,
    },
    cardContentUser:{
        ...theme.textVariants.body2,
        color: theme.colors.white,
    },
})

