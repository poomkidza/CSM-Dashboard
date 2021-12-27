import * as React from 'react';
import { Text, View, Button, ScrollView, Dimensions, StyleSheet } from 'react-native';
import {
    BarChart,
    ContributionGraph
} from 'react-native-chart-kit'
import { Searchbar } from 'react-native-paper';

export default function EducationScreen() {

    const data = {
        labels: ["จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์","อาทิตย์"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43,78]
            }
        ]}
        const [searchQuery, setSearchQuery] = React.useState('');

        const onChangeSearch = query => setSearchQuery(query);


    return(
        <ScrollView>
            <View style={{ height: -100,marginTop:20}}>
                <BarChart
                    data={data}
                    width={420}
                    height={300}
                    chartConfig={{
                        backgroundGradientFrom: '#fff',
                        backgroundGradientTo: '#fff',
                        color: (opacity = 1) => `rgba(3, 76, 129, ${opacity})`
                    }} />
            </View>
            <View style={{ marginTop:20}}>
                <Searchbar 
                    placeholder="ค้นหาประวัติการตรวจ"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </View>
        </ScrollView>   
    ); 
}