import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableNativeFeedback } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  Button  from '../components/Button';


function HomeScreen(props) {
    const { navigation } = props;
    const [token, setToken] = useState('');

    const _checkToken = async () => {
        const token = await AsyncStorage.getItem('accessToken');
        setToken(token);
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            _checkToken();
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <>
            <ImageBackground style={styles.background} source={require('../assets/doc-bg.png')}>
                <View style={styles.container}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>أهلا بك في طبيبي</Text>
                        <Text style={styles.text}>التطبيق الأول للربط بين الأطباء و المرضى بطريقة عصرية و سريعة</Text>
                    </View>
                    {token ? (
                        <>
                            <Button 
                                text="استعراض قائمة الأطباء"
                                onPress={() => navigation.navigate('Doctors')}
                            />
                            <TouchableNativeFeedback 
                                onPress={() => navigation.navigate('Profile')}
                            >
                            <Text style={styles.labelButton}>استعراض الملف الشخصي</Text>
                            </ TouchableNativeFeedback>
                        </>
                    ): (
                        <>
                            <Button 
                                text="تسجيل الدخول"
                                onPress={() => navigation.navigate('SignIn')}
                            />
                            <TouchableNativeFeedback
                                onPress={() => navigation.navigate('SignUp')}
                            >
                                <Text style={styles.labelButton}>إنشاء حساب جديد</Text>
                            </TouchableNativeFeedback>
                        </>
                    )}
                </View>
            </ImageBackground>
        </>
    )
}

const textStyles = {
    color: '#fff',
    textAlign: 'center'
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
    },
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        marginBottom: 30
    },
    title: {
        ...textStyles,
        fontSize: 35
    },
    text: {
        ...textStyles,
        fontSize: 20
    },
    labelButton: {
        marginTop: 10,
        fontSize: 16,
        textAlign: 'center',
        color: '#fff'
    }
})

export default HomeScreen;