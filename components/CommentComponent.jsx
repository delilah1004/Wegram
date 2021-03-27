import React from 'react';
import { Text, Dimensions } from 'react-native';
import { Left, Body, Right, Button, ListItem, Thumbnail } from 'native-base';

const my = require('../assets/my.png');
const width = Dimensions.get('window').width;

export default function CommentComponent() {
  return (
    <ListItem thumbnail style={{ width: width }}>
      <Left>
        <Thumbnail circular source={my} />
      </Left>
      <Body>
        <Text>스파르타코딩 클럽</Text>
        <Text note numberOfLines={3}>
          Its time to build a difference . .
        </Text>
      </Body>
      <Right>
        <Button transparent>
          <Text>2020.01.05</Text>
        </Button>
      </Right>
    </ListItem>
  );
}
