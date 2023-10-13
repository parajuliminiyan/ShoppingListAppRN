import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { db, doc, updateDoc, deleteDoc } from '../firebase/index';

const ListItems = ({ item, isChecked, getData }) => {
    const [checked, setChecked] = useState(isChecked);
    const color = checked ? 'white' : 'black';

    const updateChecked = async () => {
        const ShoppingRef = doc(db, "shopplinglist", item.id);
        await updateDoc(ShoppingRef, {
            isChecked: checked,
        });
    };

    const deleteItem = async () => {
        await deleteDoc(doc(db, "shopplinglist", item.id));
        getData();

    };
    useEffect(() => {
        updateChecked();
    }, [checked]);
    return (
        <Pressable
            android_ripple={{ color: '#d2dae2', borderless: false }}
            onPress={() => { }}
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#808e9b',
                padding: 10,
                marginVertical: 8,
                marginHorizontal: 16,
                borderRadius: 10,
            }}
        >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 5, paddingRight: 20, marginRight: 10 }}>
                <Pressable onPress={() => setChecked(!isChecked)} onLongPress={() => setChecked(isChecked)}>
                    {checked ?
                        <AntDesign
                            name='checkcircle'
                            size={24} color="black" /> :
                        <AntDesign
                            name='checkcircleo'
                            size={24} color="black" />}
                </Pressable>

                <Text style={{ marginLeft: 8, fontSize: 18, color }}>{item.title}</Text>
            </View>
            <Pressable
                android_ripple={{ color: 'red', borderless: true }}
                onPress={() => deleteItem()}
            >
                <Ionicons name="trash-outline" size={26} color="black" />
            </Pressable>
        </Pressable>
    );
};

export default ListItems;