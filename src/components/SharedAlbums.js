import React,{ Fragment } from 'react';
import {View, Text, ScrollView, StyleSheet,SafeAreaView } from 'react-native';
import SharedAlbumTitleCard from './SharedAlbumTitleCard';
import Avatars from './Avatars';
import theme from '../../assets/themes';
import ImageGallery from './ImageGallery';
import backgroundImages from '../../assets/data/backgroundImages';

const SharedAlbum = ({ route }) => {
  const { album } = route.params;
  return (
    <Fragment>
      <ScrollView vertical={true}>

        <SharedAlbumTitleCard album={album} />
        <View style={styles.avatarContainer}>
          <Avatars avatar={album.avatars} />
          <Text style={styles.avatarContainerText}>{`${album.avatars.length} people`}</Text>
        </View>

          <ImageGallery images={backgroundImages} />
      
      </ScrollView>
      </Fragment>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.lightGray,
    marginVertical: theme.spacing.l,
    marginHorizontal: theme.spacing.m,
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.m,
  },
  avatarContainerText: {
    ...theme.textVariants.body3,
    color: theme.colors.black,
  },
})

export default SharedAlbum;