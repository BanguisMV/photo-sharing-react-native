import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Album from '../components/Albums'
import SharedAlbum from '../components/SharedAlbums'

const Stack  = createStackNavigator()

const Navigator = () => {
    return (
        <Stack.Navigator options={{  }} >
            <Stack.Screen name='Album' component={Album}  options={{
                headerTitleAlign:'center',
              
            }} />

            <Stack.Screen name='Shared Album' component={SharedAlbum} options={{
                headerTitleAlign:'center',
            }}  />
        </Stack.Navigator>
    )
}

export default Navigator
