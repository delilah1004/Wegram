import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Icon, Input, Item, List, Text } from 'native-base';
import ImageBlurLoading from 'react-native-image-blur-loading';
import CommentComponent from '../components/CommentComponent';

export default function DetailPage({ navigation, route }) {
  const content = route.params.content;

  useEffect(() => {
    navigation.setOptions({
      title: '디테일페이지',
      headerStyle: {
        backgroundColor: '#fff',
        shadowColor: '#fff',
      },
      headerTintColor: 'grey',
      headerShown: true,
      headerBackTitleVisible: false,
    });
  }, []);

  return (
    <Container>
      <Content>
        <View style={styles.content}>
          <ImageBlurLoading
            withIndicator
            thumbnailSource={{ uri: content.image }}
            source={{ uri: content.image }}
            style={styles.image}
          />
          <Text numberOfLines={1} style={styles.title}>
            {content.title}
          </Text>
          <Text style={[styles.grey, styles.desc]}>{content.desc}</Text>
        </View>
        <Item style={{ marginTop: 100 }}>
          <Input placeholder="한마디 부탁해요~" />
          <Icon active name="paper-plane" />
        </Item>
        <List>
          <CommentComponent />
          <CommentComponent />
          <CommentComponent />
          <CommentComponent />
          <CommentComponent />
          <CommentComponent />
        </List>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 20,
  },
  desc: {
    fontSize: 12,
  },
  grey: { color: 'grey' },
  image: {
    width: '100%',
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
});
