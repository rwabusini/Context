import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { UserProvider } from './UserContext';
import { useState } from 'react';
import RawanComponent from './RawanComponent';



export default function App() {

 
console.log('rawan');
  return (
    <UserProvider>
      
        <Text>Welcome</Text>
<RawanComponent/>
      
    </UserProvider>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});




// mport React from 'react';
// import { AuthProvider } from './AuthContext';
// import HomeScreen from './HomeScreen';

// const App = () => {
//   return (
//     <AuthProvider>
//       <HomeScreen />
//     </AuthProvider>
//   );
// };

// export default App;