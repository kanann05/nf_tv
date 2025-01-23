/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState,useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// console.log("hello")

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

interface LoginProps {
  setLoggedin: (value: boolean) => void; // Explicitly typing setLoggedin
}

const Stack = createNativeStackNavigator();


function Login({setLoggedin} : LoginProps) {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  return(<View style = {{width : '100%', height : '100%', backgroundColor : '#222222'}}>
    <TouchableOpacity >
      <TextInput value={username} onChangeText={(text) => {setUsername(text)}} nativeID = "username-input" style = {{width : '50%', height : 50, backgroundColor : 'grey', color : 'white'}}  placeholderTextColor = 'rgba(196, 196, 196, 0.4)' placeholder='username'>
        
      </TextInput>
    </TouchableOpacity>
    <TouchableOpacity >
      <TextInput  value = {password} onChangeText = {(text) => {setPassword(text)}} style = {{width : '50%', height : 50, backgroundColor : 'grey', color : 'white'}}  placeholderTextColor = 'rgba(196, 196, 196, 0.4)' placeholder='password'>
        
      </TextInput>
    </TouchableOpacity>
    <TouchableOpacity onPress={async () => {
      console.log("submit clicked")
      const response = await fetch('http://192.168.1.23:5000/login', {
        method : 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
      });
      if(response.ok) {
        const data = await response.json();
        if(data) {
          // console.log(data);
          await AsyncStorage.setItem('username', username);
          await AsyncStorage.setItem('accessToken', data.accesstoken);
        }
      }
      let checkToken = async () => {
      console.log("submit clicked2")
        
      const token = await AsyncStorage.getItem('accessToken');
      const user = await AsyncStorage.getItem('username');
      try {
        const response2 = await fetch('http://192.168.1.23:5000/checkTok', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ accesstoken: token, username : user })
          
        });

        if(!response2.ok) {
          console.log(response2)
          await AsyncStorage.setItem('username', "");
          await AsyncStorage.setItem('accessToken', "");
      console.log("submit clicked34")

          return;
        }
        let data2 = await response2.json();
        if(data2) {
      console.log("submit clicked3")

          await AsyncStorage.setItem('data', JSON.stringify(data2));
          setLoggedin(true);
          console.log("asf")
        }
        

      }
      catch (error) {
        console.log("Error while logging in : " + error);
      }
      
    }
    checkToken();
  }}>
      <Text style = {{color : 'white'}}>Submit</Text>
    </TouchableOpacity>
    {/* <Text style={{color: 'blue'}}>hello there</Text> */}
  </View>);
}
function Home() {
  
  return( <Text style = {{color : 'white'}}>Loggedin</Text>)
}




const YourApp = () => {
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('accessToken');
      const user = await AsyncStorage.getItem('username');
      try {
        const response = await fetch('https://nf-server.onrender.com/checkTok', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ accesstoken: token, username : user })
          
        });

        if(!response.ok) {
          
          await AsyncStorage.setItem('username', "");
          await AsyncStorage.setItem('accessToken', "");
          setLoggedin(false);
          return;
        }
        let data = await response.json();
        if(data) {
          
        
          await AsyncStorage.setItem('data', JSON.stringify(data));

         
        
          console.log(await AsyncStorage.getItem('data')); 

          // console.log(AsyncStorage.setItem('data', JSON.stringify(data)))
          setLoggedin(true);
        }
      }
      catch (error) {
        console.log("Error while logging in : " + error);
      }
    }
    checkToken()
  }, [])

  let [loggedin, setLoggedin] = useState(false);

  // function RootStack() {
  //   return (
  //     <Stack.Navigator initialRouteName={loggedin ? "home" : "login"}>
  //       <Stack.Screen name="home" component={Home} />
  //       <Stack.Screen
  //         name="login"
  //         component={Login}
  //         initialParams={{ setLoggedin: setLoggedin }} // Pass setLoggedin here
  //       />
  //     </Stack.Navigator>
  //   );
  // }
  
  // const RootStack = createNativeStackNavigator({
  //   initialRouteName : loggedin? 'home' : 'login',
  //   screens: {
  //     home: Home,
  //     login : Login 
  //   },
  // });
  // console.log(AsyncStorage.getItem('data'))
  return (
    <View style = {{backgroundColor : '#222222'}}>
      
      {!loggedin ? (<Login setLoggedin = {setLoggedin}/>) : (<Home />)}
      
    </View>
  );
};

export default YourApp;

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
