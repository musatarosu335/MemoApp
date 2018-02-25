import { StackNavigator } from 'react-navigation';
import MemoListScreen from './src/screens/MemoListScreen';

const App = StackNavigator({
  Home: {
    screen: MemoListScreen,
    navigationOptions: {
      headerTitle: 'Memot',
      headerStyle: {
        backgroundColor: '#265366',
      },
      headerTitleStyle: {
        color: '#fff',
      },
    },
  },
});

export default App;
