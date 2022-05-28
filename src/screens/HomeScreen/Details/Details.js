import { View, StyleSheet, SafeAreaView, Button, ImageBackground, Pressable } from 'react-native'
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { spacing } from '../../../theme/spacing';
import { colors } from '../../../theme/color';
import Text from '../../../components/text/text';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function Details() {
    const navigation = useNavigation();
    return (
        <>
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../../../../assets/cover-image.png')} style={styles.backgroundImage} >
                    <Pressable onPress={() => navigation.goBack()}>
                        <AntDesign name="leftcircleo" size={40} color="salmon" style={{ marginHorizontal: 5, marginVertical: 5 }} />
                    </Pressable>
                </ImageBackground>
                <View style={styles.main}>
                    <View style={styles.details}>
                        <Text preset='h2' style={{ marginBottom: 10 }}>Boston Lettuce</Text>
                        <Text preset='h3' style={{ marginBottom: 10 }}>1.10 $/<Text preset='h4'>Price</Text></Text>
                        <Text preset='h3' style={{ marginBottom: 10 }}>Spain</Text>
                        <Text preset='default'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime error repellendus voluptatem commodi dolores, voluptatum delectus in officiis dicta neque, iure at. Quam voluptatum optio, commodi unde sed, exercitationem, soluta voluptate dolorem itaque accusamus alias nulla in aliquid assumenda dolores nesciunt excepturi? Dolor magnam placeat voluptates aperiam obcaecati dolore!</Text>
                    </View>
                    <View >
                        <View style={styles.orderCart}>
                            <View style={styles.cart}>
                                <AntDesign name="shoppingcart" size={24} color="black" />
                            </View>
                            <View style={styles.order}>
                                <Button title='Add To Cart' color='white' />
                            </View>
                        </View>
                    </View>
                </View>
                <StatusBar style='dark' />
            </SafeAreaView>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
    },
    main: {
        backgroundColor: colors.white,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        flex: 2,
    },
    order: {
        backgroundColor: colors.lightGreen,
        padding: spacing[4],
        borderRadius: 10,
        flex: 8,
        marginStart: 5
    },
    cart: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: spacing[4],
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    orderCart: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 20

    },
    details: {
        marginVertical: 15,
        marginHorizontal: 10,
    }

});
