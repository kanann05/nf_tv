import React, { useRef, useState } from 'react';
import { View, TextInput, Button, StyleSheet, TVFocusGuideView, Text, Pressable } from 'react-native';

export default function App() {
  let inputRef1 = useRef<TextInput>(null);
  let inputRef2 = useRef<TextInput>(null);

  const focusInput1 = () => {
    if (inputRef1.current) {
      inputRef1.current.focus();
    }
  };

  const focusInput2 = () => {
    if (inputRef2.current) {
      inputRef2.current.focus();
    }
  };

  return (
    <TVFocusGuideView style={styles.container}>
      <TVFocusGuideView style={styles.inputContainer}>
        <TextInput ref={inputRef1} style={styles.input} placeholder="input" />
        <Pressable
          onPress={() => {
            focusInput1();
            console.log('pressed f');
          }}
          style={styles.button}
          hasTVPreferredFocus={true}
        >
          <Text style={styles.buttonText}>press</Text>
        </Pressable>
      </TVFocusGuideView>

      <TVFocusGuideView style={styles.inputContainer}>
        <TextInput ref={inputRef2} style={styles.input} placeholder="input2" />
        <Pressable
          onPress={() => {
            focusInput2();
            console.log('pressed s');
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>press</Text>
        </Pressable>
      </TVFocusGuideView>
    </TVFocusGuideView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    width: 200,
    marginBottom: 10,
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    position : 'absolute',
    opacity : 0.5
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});



// import React, { useRef, useState } from 'react';
// import { View, TextInput, StyleSheet, TVFocusGuideView, TouchableWithoutFeedback } from 'react-native';

// export default function App() {
//   // Create refs for both TextInput components
//   const inputRef1 = useRef<TextInput>(null);
//   const inputRef2 = useRef<TextInput>(null);

//   const [focused, setFocused] = useState(0);

//   // Function to focus on the respective input
//   const focusInput = (inputRef: React.RefObject<TextInput>) => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   };

//   return (
//     <TVFocusGuideView style={styles.container} autoFocus>
//       {/* First TextInput */}
//       <TextInput
//         ref={inputRef1}
//         style={[styles.input, focused === 0 && styles.focusedInput]}
//         placeholder="Enter text 1"
//         onFocus={() => setFocused(0)}
//       />

//       {/* Invisible Button to focus on TextInput 1 */}
//       <TouchableWithoutFeedback onPress={() => focusInput(inputRef1)}>
//         <View style={[styles.invisibleButton, { top: 0 }]}></View>
//       </TouchableWithoutFeedback>

//       {/* Second TextInput */}
//       <TextInput
//         ref={inputRef2}
//         style={[styles.input, focused === 1 && styles.focusedInput]}
//         placeholder="Enter text 2"
//         onFocus={() => setFocused(1)}
//       />

//       {/* Invisible Button to focus on TextInput 2 */}
//       <TouchableWithoutFeedback onPress={() => focusInput(inputRef2)}>
//         <View style={[styles.invisibleButton, { top: 60 }]}></View>
//       </TouchableWithoutFeedback>
//     </TVFocusGuideView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'relative',
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     paddingLeft: 10,
//     width: 200,
//     marginBottom: 20,
//   },
//   focusedInput: {
//     borderColor: 'red', // Highlight the focused input
//   },
//   invisibleButton: {
//     position: 'absolute',
//     width: 200,
//     height: 40,
//     backgroundColor: 'transparent', // Make button invisible
//   },
// });





// import React, { useRef } from 'react';
// import { View, TextInput, Button, StyleSheet } from 'react-native';

// export default function App() {
//   const inputRef = useRef<TextInput>(null);

//   const focusInput = () => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         ref={inputRef}
//         style={styles.input}
//         placeholder="Enter text"
//       />
//       <Button title="Focus on Input" onPress={focusInput} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingLeft: 10,
//     width: 200,
//     position : "absolute"
//   },
// });



// import React, { useState } from 'react';
// import { Text, TouchableOpacity, StyleSheet, View, TVFocusGuideView, Pressable } from 'react-native';

// export default function App() {
//   const [focused, setFocused] = useState(-1);

//   return (
//     <TVFocusGuideView style={styles.container} autoFocus>
//       <Pressable
//         hasTVPreferredFocus={true}
//         onFocus={() => setFocused(0)}
//         onPress={() => console.log("hello")}
//       >
//         <Text style={[styles.text, focused === 0 && styles.focusedText]}>hello</Text>
//       </Pressable>
//       <Pressable
//         onFocus={() => setFocused(1)}
//         onPress={() => console.log("wassup")}
//       >
//         <Text style={[styles.text, focused === 1 && styles.focusedText]}>wassup</Text>
//       </Pressable>
//     </TVFocusGuideView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//   },
//   focusedText: {
//     color: 'red',
//   },
// });


// import React, { useState, useRef, useCallback } from 'react';
// import { View, TouchableHighlight, TextInput, StyleSheet, Platform } from 'react-native';

// const TVOSTextInputExample = () => {
//   const [focusedElement, setFocusedElement] = useState(0);
//   const firstInputRef = useRef<TextInput>(null);
//   const secondInputRef = useRef<TextInput>(null);

//   const resetFocus = useCallback(() => {
//     setFocusedElement(0);
//     firstInputRef.current?.clear();
//     secondInputRef.current?.clear();
//     firstInputRef.current?.blur();
//     secondInputRef.current?.blur();
//   }, []);

//   const handleInputFocus = useCallback((elementId: number) => {
//     setFocusedElement(elementId);
//   }, []);

//   const handleInputPress = useCallback((elementId: number) => {
//     if (elementId === 1) {
//       firstInputRef.current?.focus();
//     } else if (elementId === 2) {
//       secondInputRef.current?.focus();
//     }
//   }, []);

//   return (
//     <View style={styles.container}>
//       <TouchableHighlight
//         style={[
//           styles.touchableContainer, 
//           focusedElement === 1 && styles.focusedContainer
//         ]}
//         onFocus={() => handleInputFocus(1)}
//         onPress={() => handleInputPress(1)}
//         accessible
//         accessibilityLabel="First Input"
//       >
//         <TextInput
//           ref={firstInputRef}
//           style={styles.input}
//           placeholder="First input"
//           placeholderTextColor="#888"
//           onBlur={resetFocus}
//           blurOnSubmit={true}
//           returnKeyType="done"
//           onSubmitEditing={resetFocus}
//         />
//       </TouchableHighlight>

//       <TouchableHighlight
//         style={[
//           styles.touchableContainer, 
//           focusedElement === 2 && styles.focusedContainer
//         ]}
//         onFocus={() => handleInputFocus(2)}
//         onPress={() => handleInputPress(2)}
//         accessible
//         accessibilityLabel="Second Input"
//       >
//         <TextInput
//           ref={secondInputRef}
//           style={styles.input}
//           placeholder="Second input"
//           placeholderTextColor="#888"
//           onBlur={resetFocus}
//           blurOnSubmit={true}
//           returnKeyType="done"
//           onSubmitEditing={resetFocus}
//         />
//       </TouchableHighlight>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//     gap: 20,
//   },
//   touchableContainer: {
//     width: '80%',
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     borderWidth: 2,
//     borderColor: 'transparent',
//   },
//   focusedContainer: {
//     borderColor: '#007bff',
//   },
//   input: {
//     height: 50,
//     paddingHorizontal: 15,
//   },
// });

// export default TVOSTextInputExample;

// import React, { useState, useRef } from 'react';
// import { View, TouchableHighlight, TextInput, StyleSheet } from 'react-native';

// const TVOSTextInputExample = () => {
//   const [focusedElement, setFocusedElement] = useState(1);
//   const firstInputRef = useRef<TextInput>(null);
//   const secondInputRef = useRef<TextInput>(null);

//   const handleFocus = (elementId: number) => {
//     setFocusedElement(elementId);
//   };

//   const handlePress = (elementId: number) => {
//     if (elementId === 1) {
//       firstInputRef.current?.focus();
//     } else if (elementId === 2) {
//       secondInputRef.current?.focus();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableHighlight
//         style={[
//           styles.touchableContainer, 
//           focusedElement === 1 && styles.focusedContainer
//         ]}
//         onFocus={() => handleFocus(1)}
//         onPress={() => handlePress(1)}
//         accessible
//         accessibilityLabel="First Input"
//       >
//         <TextInput
//           ref={firstInputRef}
//           style={styles.input}
//           placeholder="First input"
//           placeholderTextColor="#888"
//         />
//       </TouchableHighlight>

//       <TouchableHighlight
//         style={[
//           styles.touchableContainer, 
//           focusedElement === 2 && styles.focusedContainer
//         ]}
//         onFocus={() => handleFocus(2)}
//         onPress={() => handlePress(2)}
//         accessible
//         accessibilityLabel="Second Input"
//       >
//         <TextInput
//           ref={secondInputRef}
//           style={styles.input}
//           placeholder="Second input"
//           placeholderTextColor="#888"
//         />
//       </TouchableHighlight>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//     gap: 20,
//   },
//   touchableContainer: {
//     width: '80%',
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     borderWidth: 2,
//     borderColor: 'transparent',
//   },
//   focusedContainer: {
//     borderColor: '#007bff',
//   },
//   input: {
//     height: 50,
//     paddingHorizontal: 15,
//   },
// });

// export default TVOSTextInputExample;

// import React, { useRef, useEffect } from 'react';
// import { TextInput, View, StyleSheet } from 'react-native';

// const TVOSTextInputExample = () => {
//   const textInputRef = useRef<TextInput>(null);

//   useEffect(() => {
//     // Delay to ensure proper mounting
//     setTimeout(() => {
//       textInputRef.current?.focus();
//     }, 100);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <TextInput
//         ref={textInputRef}
//         style={styles.input}
//         placeholder="Tap to type"
//         placeholderTextColor="#888"
//       />
      
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//   },
//   input: {
//     width: '80%',
//     height: 50,
//     borderWidth: 2,
//     borderColor: '#007bff',
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     backgroundColor: 'white',
//   },
// });

// export default TVOSTextInputExample;


// import React, { useState } from 'react';
// import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

// const App = () => {
//   const [focusedButton, setFocusedButton] = useState(1);

//   const handleFocus = (buttonId: number) => {
//     setFocusedButton(buttonId);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Button 1 */}
//       <TouchableHighlight
//         style={[styles.button, focusedButton === 1 && styles.focusedButton]}
//         onFocus={() => handleFocus(1)}
//         onBlur={() => handleFocus(0)} // This is a fallback blur
//         onPress={() => console.log('Button 1 Pressed')}
//         accessible
//         accessibilityLabel="Button 1"
//       >
//         <Text style={styles.buttonText}>Button 1</Text>
//       </TouchableHighlight>

//       {/* Button 2 */}
//       <TouchableHighlight
//         style={[styles.button, focusedButton === 2 && styles.focusedButton]}
//         onFocus={() => handleFocus(2)}
//         onBlur={() => handleFocus(0)} // This is a fallback blur
//         onPress={() => console.log('Button 2 Pressed')}
//         accessible
//         accessibilityLabel="Button 2"
//       >
//         <Text style={styles.buttonText}>Button 2</Text>
//       </TouchableHighlight>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#282828',
//   },
//   button: {
//     padding: 20,
//     margin: 10,
//     backgroundColor: '#444',
//     borderRadius: 8,
//   },
//   focusedButton: {
//     backgroundColor: '#00bcd4', // Focused button color change
//     borderWidth: 2,
//     borderColor: '#ffffff',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 20,
//   },
// });

// export default App;









//  /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React, { useState,useEffect } from 'react';
// import type { PropsWithChildren } from 'react';
// import { Pressable, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { createStaticNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // console.log("hello")

// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TextInput,
//   useColorScheme,
//   View,
//   Image
// } from 'react-native';

// interface LoginProps {
//   setLoggedin: (value: boolean) => void; // Explicitly typing setLoggedin
// }


// const Stack = createNativeStackNavigator();


// function Login({setLoggedin} : LoginProps) {
//   let [username, setUsername] = useState("");
//   let [password, setPassword] = useState("");
//   return(<View style = {{width : '100%', height : '100%', backgroundColor : '#222222'}}>
//     <TouchableOpacity >
//       <TextInput value={username} onChangeText={(text) => {setUsername(text)}} nativeID = "username-input" style = {{width : '50%', height : 50, backgroundColor : 'grey', color : 'white'}}  placeholderTextColor = 'rgba(196, 196, 196, 0.4)' placeholder='username'>
        
//       </TextInput>
//     </TouchableOpacity>
//     <TouchableOpacity >
//       <TextInput  value = {password} onChangeText = {(text) => {setPassword(text)}} style = {{width : '50%', height : 50, backgroundColor : 'grey', color : 'white'}}  placeholderTextColor = 'rgba(196, 196, 196, 0.4)' placeholder='password'>
        
//       </TextInput>
//     </TouchableOpacity>
//     <TouchableOpacity onPress={async () => {
//       console.log("submit clicked")
//       const response = await fetch('http://192.168.1.23:5000/login', {
        
//         method : 'POST',
//         headers: {
//           'Content-type': 'application/json',
//         },
//         body: JSON.stringify({ username: username, password: password }),
//       });
//       console.log(response.ok)
//       if(response.ok) {
//         const data = await response.json();
//         console.log(data)
//         if(data) {
//           // console.log(data);
//           await AsyncStorage.setItem('username', username);
//           await AsyncStorage.setItem('accessToken', data.accesstoken);
//         }
//       }
//       let checkToken = async () => {
//       console.log("submit clicked2")
        
//       const token = await AsyncStorage.getItem('accessToken');
//       const user = await AsyncStorage.getItem('username');
//       try {
//         const response2 = await fetch('http://192.168.1.23:5000/checkTok', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ accesstoken: token, username : user })
          
//         });

//         if(!response2.ok) {
//           console.log(response2)
//           await AsyncStorage.setItem('username', "");
//           await AsyncStorage.setItem('accessToken', "");
//       console.log("submit clicked34")

//           return;
//         }
//         //here, we gotta put await async storage set item accesstoken, for testing purposes gonna make it so i gotta log in on every reload
//         let data2 = await response2.json();
//         if(data2) {
//       console.log("submit clicked3")

//           await AsyncStorage.setItem('data', JSON.stringify(data2));
//           setLoggedin(true);
//           console.log("asf")
//         }
        

//       }
//       catch (error) {
//         console.log("Error while logging in : " + error);
//       }
      
//     }
//     checkToken();
//   }}>
//       <Text style = {{color : 'white'}}>Submit</Text>
//     </TouchableOpacity>
//     {/* <Text style={{color: 'blue'}}>hello there</Text> */}
//   </View>);
// }


// function Folder({ showName} : {showName : String}) {
//   let [opacity, setOpacity] = useState(1);
//   return(<TouchableOpacity style = {{opacity : opacity}}onFocus={() => {setOpacity(0.5)}} onPress={() => {console.log("clicked " + showName)}}><View>
//     <Text>{showName}</Text>
//   </View></TouchableOpacity>)
// }
// function Home() {
//   const [data, setData] = useState<{foldername : String}[] | null>(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const temp = await AsyncStorage.getItem('data');
//         if (temp) {
//           const parsedData = JSON.parse(temp); 
//           setData(parsedData); 
//         }
//       } catch (error) {
//         console.log('Error retrieving data from AsyncStorage:', error);
//       }
//     };

//     fetchData(); 
//   }, []);
 
//   return(<View style = {{display : 'flex', flexDirection : 'row'}}>
//     {Array.isArray(data) ? (data.map((f, i) => (<Folder showName={f.foldername} key = {i}/>))) : (null)}
//   </View>)
// }




// const YourApp = () => {
//   let [loggedin, setLoggedin] = useState<boolean | null>(null)

//   const RootStack = createNativeStackNavigator({
//     initialRouteName : 'home',
//     screens: {
//       home: YourApp,
//     },
//   });
  
//   const Navigation = createStaticNavigation(RootStack);

//   useEffect(() => {
//     console.log("here")
//     const checkToken = async () => {
//       const token = await AsyncStorage.getItem('accessToken');
//       const user = await AsyncStorage.getItem('username');
//       console.log(token)
//       try {
//         const response = await fetch('http://192.168.1.23:5000/checkTok', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ accesstoken: token, username : user })
          
//         });
     
//         if(!response.ok) {
//           await AsyncStorage.setItem('username', "");
//           await AsyncStorage.setItem('accessToken', "");
//           setLoggedin(false);
//           return;
//         }
//         let data = await response.json();
//         if(data) {
          
        
//           await AsyncStorage.setItem('data', JSON.stringify(data));

         
        
//           console.log(await AsyncStorage.getItem('data')); 

//           // console.log(AsyncStorage.setItem('data', JSON.stringify(data)))
//           setLoggedin(true);
//         }
//       }
//       catch (error) {
//         console.log("Error while logging in : " + error);
//       }
//     }
//     checkToken()
//   }, [])


//   return (
//     <View>
      
//       {!loggedin ? (<Login setLoggedin = {setLoggedin}/>) : (<Home />)}
      
//     </View>
//   );
// };

// export default YourApp;

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
