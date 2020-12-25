import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const Profile: React.FC = () => {

const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>

      <View style={styles.container}>

      <Text style={styles.title}>Profile Page</Text>

      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')}>
        <Text style={styles.textbutton}>Home</Text>        
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Auth')}>
        <Text style={styles.textbutton}>Login</Text>        
      </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

export default Profile;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  title: {
    fontSize: 18,
    color: '#282828',
    fontWeight: 'bold',
    marginVertical: 10,
  },

  button: {
    backgroundColor: '#009cd8',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 30,
    borderRadius: 3,
    marginVertical: 3,
  },

  textbutton: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },

});