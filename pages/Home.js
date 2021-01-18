import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {Tabs} from '@ant-design/react-native';
import {connect} from 'react-redux';
import {user} from '../store';

const Home = ({navigation, todos}) => {
  const handleClick = () => {
    navigation.push('Test');
  };
  const style = {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    backgroundColor: '#fff',
  };
  console.log(todos);
  const tabs = [{title: '内容'}, {title: '分类'}, {title: 'Third Tab'}];
  return (
    <View style={{flex: 1}}>
      {todos.map((i) => {
        return <Text>{i.text}</Text>;
      })}
      <Button
        onPress={() => user.actions.addTodos(Math.random())}
        title="dddd"></Button>
    </View>
  );
};

// export default Home;
export default connect((state) => ({
  todos: state.user.todos,
}))(Home);
