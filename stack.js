import { createStackNavigator } from 'react-navigation-stack'
import Login from './screens/Login'
import Home from './screens/Home'
import Content from './screens/Content'

const screens = {
    Login: { screen: Login },
    Home: { screen: Home },
    Content: { screen: Content }
}

const AppStack = createStackNavigator(screens)

export default AppStack