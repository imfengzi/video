import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {Tabs} from '@ant-design/react-native';

export default Home = ({navigation}) => {
  const handleClick = () => {
    navigation.push('Test');
  };
  const style = {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    backgroundColor: '#fff',
  };

  const tabs = [{title: '内容'}, {title: '分类'}, {title: 'Third Tab'}];
  return <View style={{flex: 1}}></View>;
};
