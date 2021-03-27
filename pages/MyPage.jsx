import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { Container, Content, Text } from 'native-base';
import ImageComponent from '../components/ImageComponent';
import HeaderComponent from '../components/HeaderComponent';
import profile_img from '../assets/my.png';
import ImageBlurLoading from 'react-native-image-blur-loading';

const data = require('../data.json');
const profileWidth = Dimensions.get('window').width / 5;

export default function MyPage({ navigation }) {
  return (
    <Container>
      <HeaderComponent />
      <Content>
        <View style={styles.profile}>
          <ImageBlurLoading
            withIndicator
            thumbnailSource={profile_img}
            source={profile_img}
            style={styles.image}
          />
          <Text style={styles.name}>스파르타코딩 클럽</Text>
          <Text style={styles.email}>dellah@spartacoding.co.kr</Text>
        </View>
        <Grid>
          <Col size={1} style={styles.infoBox}>
            <Text style={styles.info}>작성한 글</Text>
            <Text style={styles.count}>7</Text>
          </Col>
          <Col size={1} style={styles.infoBox}>
            <Text style={styles.info}>작성한 댓글</Text>
            <Text style={styles.count}>21</Text>
          </Col>
          <Col size={1} style={styles.infoBox}>
            <Text style={styles.info}>방문 횟수</Text>
            <Text style={styles.count}>321</Text>
          </Col>
        </Grid>
        <View style={styles.feed}>
          {data.diary.map((content, i) => {
            return (
              <ImageComponent
                content={content}
                key={i}
                navigation={navigation}
              />
            );
          })}
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  profile: {
    alignItems: 'center',
    marginTop: 40,
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '700',
  },
  email: {
    fontSize: 15,
  },
  image: {
    width: profileWidth,
    height: profileWidth,
    borderRadius: 50,
  },
  infoBox: {
    alignItems: 'center',
    marginVertical: 20,
  },
  info: {
    fontSize: 15,
    fontWeight: '700',
  },
  count: {
    color: 'deeppink',
    fontWeight: '700',
  },
  feed: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
