import React from 'react';
import { FlatList, Text, View } from 'react-native';

const Item = ({ item }) => (
    <View style={{ padding: 10 }}>
        <Text>{item.name}</Text>
    </View>
);

const ShpList = () => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item.id}
        />
    );
};

export default ShpList;
