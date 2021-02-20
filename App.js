import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';


export default function App() {
const [name,setName]=useState("Apple");
const [person,setPerson]=useState({name : "flare",age: 2345});
const clickevent=()=>
{
  setName("FAQ");
  setPerson({name:"noel",age:20});
}
  return (
    <View style={styles.container}>
      <Text>aaaaaaa</Text>
      <Text>hello..{name}</Text>
      <Text>Her name is..{person.name} and age is..{person.age}</Text>
      
      <View style ={styles.body}>
        <Text style={styles.textStyle}>ola</Text>
      </View>
      
      <View>
        <Button title="click" onPress={clickevent}/>
        
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body:
  {
    backgroundColor : "green",
    padding: 15,
    margin : 10
  },
  textStyle:
  {
     fontSize : 100,
     fontWeight : "bold",
  }
});
