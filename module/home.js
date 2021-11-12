import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
import Dog from '../asset/dog.png';
import Dog1 from '../asset/dog1.jpeg';

const Home = () => {
  const recommendedChallenge = [
    {
      id: '1',
      subject: 'Bulldog',
      title: 'Fight Bull',
    },
    {
      id: '2',
      subject: 'Labrador Retriever',
      title: 'Friendly',
    },
    {
      id: '3',
      subject: 'German Shepherd',
      title: 'Guard',
    },
    {
      id: '4',
      subject: 'Siberian Husky',
      title: 'Pet',
    },
  ];
  const CardRender = ({item}) => {
    return (
      <View>
        <ImageBackground style={styles.cardContainer} source={Dog1}>
          <Text style={styles.challengeSubject}>{item.subject}:</Text>
          <Text style={styles.challengeTitle}>{item.title}</Text>
        </ImageBackground>
      </View>
    );
  };
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Image source={Dog} style={styles.imageContainer}></Image>
      </View>
      <View style={styles.recommendedChallenge}>
        <Text style={styles.recommendedText}>Dogs You Like</Text>
        <FlatList
          data={recommendedChallenge}
          renderItem={CardRender}
          keyExtractor={item => item.id}
          horizontal={true}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
