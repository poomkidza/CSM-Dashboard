import * as React from 'react';
import { Text, View, Dimensions, Button, ScrollView, StyleSheet, innerContainer, TouchableOpacity } from 'react-native';
import { Tab } from 'react-native-elements/dist/tab/Tab';
import { Icon } from 'react-native-elements';
import {
    LineChart,
    ContributionGraph,
    BarChart
} from 'react-native-chart-kit'

export default function HomeScreen() {
    
    const dataBar = {
        labels: ['23/9', '25/9', '27/9', '1/10', '3/10', '5/10'],
        datasets: [{
            data: [20, 45, 28, 80, 99, 43]
        }]
    }

    const commitsData = [
        { date: '2017-01-02', count: 1 },
        { date: '2017-01-03', count: 2 },
        { date: '2017-01-04', count: 3 },
        { date: '2017-01-05', count: 4 },
        { date: '2017-01-06', count: 5 },
        { date: '2017-01-30', count: 2 },
        { date: '2017-01-31', count: 3 },
        { date: '2017-03-01', count: 2 },
        { date: '2017-04-02', count: 4 },
        { date: '2017-03-05', count: 2 },
        { date: '2017-02-30', count: 4 }
    ]

    const data = {
        labels: ['23/9', '25/9', '27/9', '1/10', '3/10', '5/10'],
        datasets: [{
            data: [20, 45, 28, 80, 99, 43]
        }]
    }

    const width = (Dimensions.get('window').width) - 15


    const onOne = () => {
    }

    const onTwo = () => {
    }

    
    return (
        <ScrollView style={{ backgroundColor: '#E6E9ED' }}>
            <View style={{ width: 400, height:175 , backgroundColor: '#fff', marginTop: 20, alignSelf: 'center', borderRadius: 50, padding: 20 }}>
                <Text style={styles.title}>{'\nสวัสดีครับ,คุณนพวิชญ์'}</Text>
            </View>
            <View style={{ width: 400, height: 600, backgroundColor: '#fff', marginTop: 20,marginLeft:10,  borderRadius: 50, padding: 20}}>
                <Icon name='play-circle-fill' size={50} style={{ marginTop: 10 }} /><Text style={styles.title}>{'สัปดาห์นี้คุณยังไม่ได้ตรวจ'}</Text>
                <Icon name='notifications' size={30} style={{ marginTop: 10 , marginLeft: -220  }} />
                <Text style={styles.title}>{'แจ้งเตือนประจำสัปดาห์นี้'}</Text>
                <Text style={{color:'red',fontWeight:'bold',fontSize: 20}}>{'ระวังเรื่องของการออกกำลังกาย'}</Text>
                <Text style={styles.title}>{'สถิติ 7 วันที่ผ่านมา'}</Text>
                <LineChart
                    title='การทำงานของหัวใจ'
                    data={data}
                    width='400'
                    height={200}
                    style={{marginTop:15,marginLeft:-13}}
                    chartConfig={{
                        backgroundGradientFrom: '#fff',
                        backgroundGradientTo: '#fff',
                        color: (opacity = 1) => `rgba(3, 76, 129, ${opacity})`
                    }} />
            </View>
            <View style={{ width: 400, height: 250, backgroundColor: '#fff', marginTop: 20, borderRadius: 50 }}>
                <ContributionGraph style={{ marginTop: 10, marginLeft: 10 }}
                    values={commitsData}
                    endDate={new Date('2017-04-01')}
                    numDays={105}
                    width={350}
                    height={200}
                    chartConfig={{
                        backgroundGradientFrom: '#fff',
                        backgroundGradientTo: '#fff',
                        color: (opacity = 1) => `rgba(35, 76, 150, ${opacity})`
                    }} />
            <View style={{ height: -100, marginTop: 20 }}></View>
                <BarChart style={{ borderRadius: 50, width: 350 }}
                    data={dataBar}
                    width={400}
                    height={300}
                    chartConfig={{
                        backgroundGradientFrom: '#fff',
                        backgroundGradientTo: '#fff',
                        color: (opacity = 1) => `rgba(3, 76, 129, ${opacity})`
                    }} />
            </View> 
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    innerContainer: {
        borderRadius: 20,
        color: '#fff',
        width: 350,
        height: 150,
        marginLeft: 20
    }
})