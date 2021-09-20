import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './screens/Categories';
import Category from './screens/Category';



// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Categories" component={Categories} />
//         <Stack.Navigator>
//         <Stack.Screen name="Category" component={Category} />
//       </Stack.Navigator>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

const AppNavigator = createNativeStackNavigator({
    Categories: {
        screen: Categories
    },
    Category: {
        screen: Category
    },
});
export default AppNavigator;