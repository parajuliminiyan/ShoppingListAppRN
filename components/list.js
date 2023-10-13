import React, { useState } from 'react';
import { FlatList } from 'react-native';
import ListItems from './listItems';

const List = ({ data, getData }) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <ListItems item={item} isChecked={item.isChecked} getData={getData} />}
            keyExtractor={(item) => item.id}
            extraData={getData}
        />
    );
};

export default List;
