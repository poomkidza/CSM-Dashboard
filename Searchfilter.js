import React, { useEffect, useState } from "react";
import {
    SafeAreaView, StyleSheet, View, Text, TextInput, FlatList
} from "react-native";

export default function Searchfilter() {

    const [filterData, setfilterData] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [search, setsearch] = useState(null);

    useEffect(() => {
        fetchPosts();
        return () => {
        };
    }, []);
    const fetchPosts = () => {
        const apiURL = 'https://jsonplaceholder.typicode.com/posts';
        fetch(apiURL)
            .then((response) => response.json())
            .then((responseJson) => {
                setfilterData(responseJson);
                setmasterData(responseJson);
            }).catch((error) => {
                console.error(error);
            });
    };

    const searchFilter = (text) => {
        if (text) {
            const newData = masterDatafilter((item) => {
                const itemData = item.title ? item.title.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCAse();
                return itemData.indexOf(textData) > -1;
            });
            setfilterData(newData);
            setsearch(text);
        } else {
            setfilterData(masterData);
            setsearch(text);
        }




    };
    const ItemView = ({ item }) => {
      
    };

    const ItemSeparatorView = () => {
        return (
            <View
                style={{ height: 0.5, width: '100%', backgroundCOlor: '#c8c8c' }} > </View>
        );
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TextInput
                    style={styles.TextInputStle}
                    value={search}
                    placeholder="=search Here"
                    onChangeText={(text) => searchFilter(text)} />
                <FlatList
                    data={filterData}
                    keyeExtarctor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView} />
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    itemStyles: {
        padding: 15
    },
    TextInput: {
        height: 60,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: 'white'
    }
});

