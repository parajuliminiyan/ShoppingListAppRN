import { SafeAreaView, StatusBar, TextInput, View, StyleSheet, Pressable, Text, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { db, collection, addDoc, getDocs } from './firebase/index';
import Header from './components/header';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import List from './components/list';

export default function App() {
  const [title, setTitle] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const addShoppingItem = async () => {
    try {
      if (title === '') {
        return;
      }
      const docRef = await addDoc(collection(db, "shopplinglist"), {
        title: title,
        isChecked: false,
      });
      console.log("Document written with ID: ", docRef.id);
      setTitle('');
      getData();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const getData = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "shopplinglist"));
    const newItems = [];
    querySnapshot.forEach((doc) => {
      newItems.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    setItems(newItems);
    setLoading(false);
  };
  useEffect(() => {
    getData();
    setLoading(false);
  }, [])
  return (
    <View style={{ marginTop: StatusBar.currentHeight }} >
      <SafeAreaView>
        <Header itemCount={items.length} getData={getData} />
        {items.length > 0 ? (
          <List data={items} getData={getData} />
        ) : (
          <ActivityIndicator size="large" color="#00ff00" />
        )}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flex: 1 }}>
            <KeyboardAvoidingView behavior="position" style={styles.textInput}>
              <TextInput autoCapitalize='words'
                inputMode='text' cursorColor={'#e84118'} autoFocus={true} placeholder="Add new item" style={{ fontSize: 17, color: 'black', alignSelf: 'center' }} value={title} onSubmitEditing={addShoppingItem} onChangeText={(text) => setTitle(text)} />
            </KeyboardAvoidingView>
          </View>
          <Pressable onPress={addShoppingItem} style={{ marginRight: 8 }}>
            <Ionicons name="arrow-forward-circle" size={34} color="black" />
          </Pressable>
        </View>
      </SafeAreaView >
    </View >
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    borderColor: "gray",
    height: 40,
    elevation: 5,
  },
});
