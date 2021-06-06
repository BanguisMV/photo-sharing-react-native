import React, { Fragment,useLayoutEffect,useRef } from 'react'
import { View,StyleSheet, ScrollView, TouchableOpacity, } from 'react-native'
import theme from '../../assets/themes/index'
import albumPageData from '../../assets/data/albumPage'
import Card from './Card'
import Separator from './Separator'
import Feather from '@expo/vector-icons/Feather';
import BottomSheetContent from './BottomSheetContent'

const Albums = ({ navigation, navigation:{ setOptions } }) => {
    const sheetRef = useRef();
const [ open , setOpen] = useState(false)
    useLayoutEffect(() => {
        setOptions({
          headerRight: () => (
            <TouchableOpacity onPress={openBottomSheet}>
              <View style={styles.openSheetButton}>
                <Feather name="plus" size={16} color={theme.colors.white} />
              </View>
            </TouchableOpacity>
          )
        })
      })

      const renderBottomSheetContent = () => <BottomSheetContent handleClose={closeBottomSheet} />

      const openBottomSheet = () => {
        sheetRef.current.snapTo(0);
      }
    
      const closeBottomSheet = () => {
        sheetRef.current.snapTo(1);
      }

    return (
        <Fragment>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.wrapper}>
                    {albumPageData.map((data, index) => 
                        <View key={index}>
                            <Card  data={data} key={data.id} navigation={navigation} />
                            {index === 1 && <Separator />}
                        </View>
                    )}
                </View>
            </ScrollView>


        <BottomSheetContent
                ref={sheetRef}
                snapPoints={[250, 0]}
                initialSnap={1}
                borderRadius={10}
                handleClose={closeBottomSheet}
                renderContent={renderBottomSheetContent}
            />
        </Fragment>
      
    )
}

export default Albums

const styles = StyleSheet.create({
    wrapper:{
        marginBottom:theme.spacing.l
    },
    openSheetButton: {
        width: 32,
        height: 32,
        backgroundColor: theme.colors.primary,
        marginRight: theme.spacing.m,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
      },
})
