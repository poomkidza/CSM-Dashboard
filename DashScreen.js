import * as React from 'react';
import { Text, View, Button, ScrollView, Dimensions,StyleSheet, TouchableOpacity } from 'react-native';
import {
    BarChart,
    LineChart,
    ContributionGraph
} from 'react-native-chart-kit'
import { Searchbar } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';

export default function DashScreen() {

    const Separator = () => (
        <View style={styles.separator} />
    )

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

    const onOne = () => {
    }

    const onTwo = () => {
    }

    const data = {
        labels: ["จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์", "อาทิตย์"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43, 78]
            }
        ]
    }
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    
    return (
        <ScrollView >
                <View style={{ marginTop: 10, marginLeft: 10 }}>
                    <Text style={{ fontSize: 21, fontWeight: 'bold', color: 'black' }}>ผลการตรวจวันนี้</Text>
                </View>
            <TouchableOpacity>
                <View style={{ width: 185, height: 125, backgroundColor: '#fff', marginTop: 20, borderRadius: 50 }}>
                    <Text style={styles.title}>จังหวะเต้นของหัวใจ</Text>
                    <Text style={styles.numba}>80</Text>
                    <Text style={styles.date}>{'                               >'}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{ width: 185, height: 125, backgroundColor: '#fff', marginLeft: 200, marginTop: -125, borderRadius: 50 }}>
                    <Text style={styles.title}>อัตราการเต้นของหัวใจ</Text>
                    <Text style={styles.numba}>112/81</Text>
                    <Text style={styles.date}>{'                                >'}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{ width: 185, height: 125, backgroundColor: '#fff', marginTop: 20, borderRadius: 50 }}>
                    <Text style={styles.title}>การทำงานของหัวใจ</Text>
                    <Text style={styles.numba}>ปกติ</Text>
                    <Text style={styles.date}>{'                                >'}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{ width: 185, height: 125, backgroundColor: '#fff', marginLeft: 200, marginTop: -125, borderRadius: 50 }}>
                    <Text style={styles.title}>เสียงหัวใจ</Text>
                    <Text style={styles.numba}>ปกติ</Text>
                    <Text style={styles.date}>{'                                >'}</Text>
                </View>
            </TouchableOpacity>
                <View style={{ marginTop: 20 }}>
                    <Separator />
                </View>
                    <View style={{marginTop: 10,marginLeft:10}}>
                        <Text style={styles.HeadTitle}>สถิติ 7 วันที่ผ่านมา</Text>
                    </View>
            <LineChart style={{borderRadius:50,marginTop:10}}
                title='การทำงานของหัวใจ'
                data={data}
                width={390}
                height={240}
                chartConfig={{
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    color: (opacity = 0.5) => `rgba(3, 76, 129, ${opacity})`
                }} />
            <View style={{marginTop: 10}}>
            <Separator/>
            </View>
            <View style={{ marginTop: 10, marginLeft: 10 }}>
                <Text style={{fontSize:21,fontWeight: 'bold',color: 'black'}}>การทำงานของหัวใจ 7 วันที่ผ่านมา</Text>
            </View>
        <TouchableOpacity>  
                <View style={{width: 185, height: 125, backgroundColor: '#fff', marginTop: 20, borderRadius: 50}}>
                    <Text style={styles.titleHis}>จังหวะเต้นของหัวใจ</Text>
                    <Text style={styles.infoHis}>70</Text><Text style={{ color: 'dodgerblue', fontSize: 15,marginLeft: 100,marginTop: -25,fontWeight:'bold' }}>BPM</Text>
                    <Text style={styles.dateHis}>{'เฉลี่ยน7วัน        >'}</Text>
                </View>
        </TouchableOpacity>    
                <View style={{ width: 185, height: 125, backgroundColor: '#fff', marginLeft: 200, marginTop: -125, borderRadius: 50 }}>
                    <Text style={styles.titleHis}>อัตราการเต้นของหัวใจ</Text>
                    <Text style={styles.infoHis}>112/81</Text>
                    <Text style={styles.dateHis}>{'เฉลี่ยน7วัน        >'}</Text>
                </View>
        <TouchableOpacity>    
                <View style={{ width: 185, height: 125, backgroundColor: '#fff',  marginTop: 20, borderRadius: 50 }}>
                    <Text style={styles.titleHis}>การทำงานของหัวใจ</Text>
                    <Text style={styles.infoHis}>ปกติ</Text>
                    <Text style={styles.dateHis}>{'เฉลี่ยน7วัน        >'}</Text>
                </View>
        </TouchableOpacity>
        <TouchableOpacity>
                <View style={{ width: 185, height: 125, backgroundColor: '#fff', marginLeft: 200, marginTop: -125, borderRadius: 50 }}>
                    <Text style={styles.titleHis}>เสียงหัวใจ</Text>
                    <Text style={styles.infoHis}>ปกติ</Text>
                    <Text style={styles.dateHis}>{'เฉลี่ยน7วัน        >'}</Text>
                </View>
        </TouchableOpacity>
            <View style={{ marginTop: 20 }}>
                <Separator />
            </View>
            <View style={{ marginTop: 10, marginLeft: 10 }}>
                <Text style={{ fontSize: 21, fontWeight: 'bold', color: 'black' }}>ประวัติการตรวจ</Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <Searchbar
                    placeholder="ค้นหาประวัติการตรวจ"
                    onChangeText={onChangeSearch}
                    value={searchQuery} />
            </View>
                    <View style={{ width: 400, height: 700, backgroundColor: '#fff', alignSelf: 'center',marginTop:20, borderRadius: 50}}>
                            <View style={{ width: 350, height: 125, backgroundColor: 'green', alignSelf: 'center', marginTop: 20, borderRadius: 50 }}>
                                <Text style={styles.HeadSearch}>{'90%                               >'}</Text>
                                <Text style={styles.infoSearch}>{'วันที่ 24/12/2564            เวลา 15.02 น.'}</Text>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Separator />
                            </View>
                            <View style={{ width: 350, height: 125, backgroundColor: 'lawngreen', alignSelf: 'center', marginTop: 10, borderRadius: 50 }}>
                                <Text style={styles.HeadSearch}>{'80%                               >'}</Text>
                                <Text style={styles.infoSearch}>{'วันที่ 15/12/2564            เวลา 15.02 น.'}</Text>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Separator />
                            </View>
                            <View style={{ width: 350, height: 125, backgroundColor: 'green', alignSelf: 'center', marginTop: 10, borderRadius: 50 }}>
                                <Text style={styles.HeadSearch}>{'90%                               >'}</Text>
                                <Text style={styles.infoSearch}>{'วันที่ 6/12/2564            เวลา 15.02 น.'}</Text>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Separator />
                            </View>
                            <View style={{ width: 350, height: 125, backgroundColor: 'crimson', alignSelf: 'center', marginTop: 10, borderRadius: 50 }}>
                                <Text style={styles.HeadSearch}>{'20%                               >'}</Text>
                                <Text style={styles.infoSearch}>{'วันที่ 27/11/2564            เวลา 15.02 น.'}</Text>
                            </View>
                    </View>
        </ScrollView>)
}

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        color: 'black',
        marginTop: 20,
        alignSelf: 'stretch',
        marginLeft: 30
    },
    numba: {
        fontSize: 35,
        color: '#000080',
        fontWeight: 'bold',
        alignSelf: 'stretch',
        marginLeft: 30
    },
    date: {
        fontSize: 15,
        color: 'black',
        alignSelf: 'stretch',
        marginLeft: 30,
        marginTop: 8
    },
    titleHis: {
        fontSize: 15,
        color: 'black',
        marginTop: 20,
        alignSelf:'stretch',
        marginLeft: 30
    },
    infoHis: {
        fontSize: 35,
        color: 'dodgerblue',
        fontWeight: 'bold',
        alignSelf: 'stretch',
        marginLeft: 30
    },
    dateHis: {
        fontSize: 15,
        color: 'black',
        alignSelf: 'stretch',
        marginLeft: 30,
        marginTop: 8
    },
    separator: {
        marginVertical: 15,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    HeadTitle: {
        fontSize:22,
        fontWeight: 'bold',
        color: 'black'
    },
    HeadSearch: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 25,
        marginLeft: 25 
    },
    infoSearch: {
        fontSize: 17,
        color: 'black',
        marginTop: 8,
        marginLeft: 25
    },
    info: {
        fontSize: 35,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'stretch',
        marginLeft: 30
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
})