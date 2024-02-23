
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Scrollviewitems from './Assignments1/Scrollviewitems';
import LoginForm from './Assignments1/LoginForm';
import Flatlist from './Assignments1/Flatlist';
import BottomTab from './Assignments1/BottomTab';
import Counter from './Assignments1/Counter';
import CountdownTimer from './Assignments1/CountdownTimer';
import CounterUpTimer from './Assignments1/CounterUpTimer';
export default function App() {
  return (
    <View style={styles.container}>
      
      {/*<Scrollviewitems/>*/}
      {/*<LoginForm/>*/}
      {/*<Flatlist/>*/}
      {/*<BottomTab/>*/}
      {/*<Counter/>*/}
      {/*<CountdownTimer/>*/}
      <CounterUpTimer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //paddingVertical:40 // this is for flat list.js
    
  },
});
