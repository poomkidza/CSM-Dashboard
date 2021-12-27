import React from 'react';
import { View, Text, ListItem, Left, Right, Body, StyleSheet,Button,TouchableHighlight, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

export default function icontset() {

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

    return (
        <ScrollView>
            <View style={{ width: 400, height: 500, backgroundColor: '#fff', marginTop: 20, alignSelf: 'center', borderRadius: 50, padding: 20 }}>
                    <Icon name='settings' size={50} /><Text style={styles.setting}>การตั้งค่า</Text>
                    <Icon name='book' size={50} /><Text style={styles.setting}>รายงาน</Text>
                    <Icon name='bluetooth-connected' size={50} /><Text style={styles.setting}>การเชื่อมต่ออุปกรณ์</Text>
                    <Icon name='account-box' size={50}/><Text style={styles.setting}>บัญชีผู้ใช้งาน</Text>
            </View>
            <View style={{marginTop: 40}}>
                <View style={{ flexDirection: 'row', width: 500, height: 50, backgroundColor: '#fff' }}>
                    <Icon name='calendar-today' size={50} />
                    <Text style={styles.setting}>ปฏิทิน</Text>
                </View>
                <View View style={{ flexDirection: 'row', width: 500, height: 50, backgroundColor: '#fff'}}>
                    <Icon name='menu-bok' size={50} />
                    <Text style={styles.setting}>คู่มือการใช้งาน</Text>
                </View>
                <View View style={{ flexDirection: 'row', width: 500, height: 50, backgroundColor: '#fff' }}>
                    <Icon name='medical-services' size={50} />
                    <Text style={styles.setting}>ข้อมูลเบื้องต้นเกี่ยวกับอาการ</Text>
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    setting: {
        fontSize: 25,
    
    }
})