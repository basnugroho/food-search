import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen'

const navigator = createStackNavigator({
  Search: SearchScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
})

export default createAppContainer(navigator)

// Client ID
// z2pvdBT0ifqZmOMEs3CA_w

// API Key
// cTPJ2tWEPFKUtPwHRR6HSlbize1Ts9vVzkgB2WEu6uYs2EBmu3PmetE6Wkqbz9Pr0iPESkC5YCAQqZRjr8BDqdNxtFM-K7R42Cdvr9iwmfWJtOavpGV275YpiFKuX3Yx
