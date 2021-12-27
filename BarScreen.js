import * as React from 'react';
import { Text, View, Button, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import {
    LineChart,
    ContributionGraph
} from 'react-native-chart-kit'

export default function BarScreen() {


    const onOne = () => {
    }

    const onTwo = () => {
    }

    const onThree = () => {
    }

    const onFour = () => {
    }

    const onFive = () => {
    }

    const onSix = () => {
    }

    const onSeven = () => {
    }

    const onEight = () => {
    }

    const width = (Dimensions.get('window').width) - 15

    return (
        <ScrollView>
            <ScrollView>
                <TouchableOpacity style={{ backgroundColor: '#fff', paddingTop: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='settings' size={50} />
                        <Text>asdasdasd</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: '#fff', paddingTop: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='settings' size={50} />
                        <Text>asdasdasd</Text>
                    </View>
                </TouchableOpacity>
                <Button style={{ marginTop: 10 ,}}
                    fontsize='20'
                    marginTop='10'
                    color='#99B6E3'
                    onPress={onOne}
                    title="การตั้งค่า ▶" />
                <Button style={{ marginTop: 20 }}
                    fontsize='20'
                    color='#99B6E3'
                    onPress={onTwo}
                    title="รายงาน ▶ " />
                <Button style={{ marginTop: 20 }}
                    fontsize='20'
                    color='#99B6E3'
                    onPress={onThree}
                    title="การเชื่อมต่ออุปกรณ์ ▶ " />
                <Button style={{ marginTop: 20 }}
                    fontsize='20'
                    color='#99B6E3'
                    onPress={onFour}
                    title="บัญชีผู้ใช้งาน ▶ " />
                <View style={{ width: width, height: 30, backgroundColor: '#fff', marginTop: 20, opacity: 0 }}></View>
                <Button style={{ marginTop: 10 }}
                    fontsize='20'
                    marginTop='10'
                    color='#99B6E3'
                    onPress={onFive}
                    title="ปฏิทิน ▶" />
                <Button style={{ marginTop: 20 }}
                    fontsize='20'
                    color='#99B6E3'
                    onPress={onSix}
                    title="คู่มือการใช้งาน▶ " />
                <Button style={{ marginTop: 20 }}
                    fontsize='20'
                    color='#99B6E3'
                    onPress={onSeven}
                    title="ข้อมูลเบื้องต้นเกี่ยวกับอาการ ▶ " />
                <Button style={{ marginTop: 20 }}
                    fontsize='20'
                    color='#99B6E3'
                    onPress={onEight}
                    title="บัญชีผู้ใช้งาน ▶ " />
            </ScrollView>
        </ScrollView>
    );
}

