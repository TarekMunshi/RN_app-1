import { View, StyleSheet, SafeAreaView, Button } from 'react-native'
import React from 'react'
import Text from '../../components/text/text';
import { colors } from '../../theme/color';
import { spacing } from '../../theme/spacing';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



export default function HomeScreen() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerBox}>
                    <Text preset='h3' style={styles.headerText}>D</Text>
                </View>
            </View>
            <View style={styles.main}>
                <View style={{ alignItems: 'center' }}>
                    <AntDesign name="CodeSandbox" size={45} color="black" style={{ marginBottom: 30 }} />
                    <View style={{ alignItems: 'center', marginBottom: 20 }}>
                        <Text preset='h2'>Non-Contact</Text>
                        <Text preset='h2'>Deliveries</Text>
                    </View>
                    <Text style={{ color: 'gray', textAlign: 'center', marginBottom: 20 }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia facilis officiis veritatis ullam quisquam.</Text>
                </View>
                <View style={styles.button}>
                    <View style={styles.order}>
                        <Button title='Order Now' color='white' onPress={() => {
                            navigation.navigate('Details')
                        }} />
                    </View>
                    <View style={styles.dismiss}>
                        <Button title='Dismiss' color='gray' />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.blue
    },
    header: {
        flex: 1,
    },
    headerBox: {
        backgroundColor: colors.orange,
        width: '15%',
        borderRadius: '50%',
        marginTop: spacing[13],
        marginLeft: 20
    },
    headerText: {
        textAlign: 'center',
        padding: spacing[5],
        color: 'white'
    },
    main: {
        backgroundColor: colors.white,
        flex: 2,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    order: {
        backgroundColor: colors.lightGreen,
        marginVertical: 10,
        padding: spacing[4],
        borderRadius: 10
    },
    dismiss: {
        backgroundColor: colors.darkGrey,
        padding: spacing[4],
        borderRadius: 10
    },
    button: {
        width: '90%',
    }

});