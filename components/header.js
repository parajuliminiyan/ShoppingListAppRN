import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { db, doc, deleteDoc, getDocs, collection } from '../firebase/index';

const Header = ({ itemCount, getData }) => {
    const handleDeleteList = async () => {
        const querySnapshot = await getDocs(collection(db, "shopplinglist"));
        querySnapshot.forEach((items) => { deleteDoc(doc(db, "shopplinglist", items.id)) });
        getData();
    }
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Shopping List</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.itemCount}>{itemCount} items</Text>
                <Pressable onPress={handleDeleteList} android_ripple={{ color: 'red', borderless: true }} >
                    <Ionicons name="trash-outline" size={26} color="black" />
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemCount: {
        fontSize: 18,
        color: '#666',
        fontWeight: 'bold',
        marginRight: 8,
    },
});

export default Header;
