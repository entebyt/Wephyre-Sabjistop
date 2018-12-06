import React from 'react'
import {
    View, StyleSheet, Text, Image, TouchableOpacity, StatusBar, FlatList, ScrollView,
    Picker
} from 'react-native'
import Icons from 'react-native-vector-icons/Entypo'
import Icon from 'react-native-vector-icons/Ionicons'
import { primaryColor, statusBarColor, secondaryColor } from '../constants/colors'

export default class ProductDetails extends React.Component {
    goBack() {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <View
                style={
                    styles.container
                }
            >
                <StatusBar
                    backgroundColor={statusBarColor}
                />
                <View
                    style={
                        styles.header
                    }
                    elevation={5}
                >
                    <Icon
                        name="ios-arrow-round-back"
                        size={35}
                        color={"black"}
                        onPress={() => this.goBack()}
                    />
                     <Icons
                        name="shopping-bag"
                        color="black"
                        size={30}
                        onPress={() => this.gotoCart()}
                        />
                </View>
                <View
                    style={
                        styles.body
                    }
                >
                    <ScrollView>
                        <View
                            style={
                                styles.imageView
                            }
                        >
                            <Image
                                source={require('../../pic12.jpg')}
                                style={{
                                    height: '80%',
                                    width: '60%',
                                    resizeMode: 'stretch'
                                }}
                            />
                        </View>
                        <View
                            style={
                                styles.bodyItem
                            }
                        >
                            <Text
                                style={
                                    styles.itemText
                                }
                            >
                                Green Peas
                            </Text>
                            <View
                                style={
                                    styles.itemDescription
                                }
                                elevation={3}
                            >
                                <Text
                                    style={
                                        styles.heading
                                    }
                                >
                                    Description {'\n\n'}
                                </Text>
                                <Text
                                    style={
                                        styles.text
                                    }
                                >
                                    Peas are small round vegetable enclosed in green leaf-like cover called pod. In each peapod there are 4 to 5 peas. The vegetable belongs to family Fabaceae and botanically it is a fruit and its name is Pisum sativum but called matar in Hindi. Peas are famous all across India and are seasonal vegetable.
                                    Nutritional Benefits:
                                    •    Vitamin C , B¬6 and Vit. K
                                    •    Minerals
                                    -    Calcium
                                    -    Magnesium
                                    -    Iron
                                    -    Manganese
                                    •    Carbohydrate
                                    •    Dietary Fiber
                                    •    Protein
                                    •    Zero Cholesterol
                                    •    Zero Fat
                                    Peas are small yet with vast benefits. Its dietary fiber helps regulating metabolism of the body. Immune system remains healthy and fights infection and diseases. Cardiac problem remain under check. Boiled pea is favourable for weight-conscious people.
                                    Consumption Methods:
                                    •    Boiled
                                    •    Salad
                                    •    Cooked with other vegetables
                                    •    Sauté with onion and oil
                                </Text>
                            </View>
                            <View
                                style={
                                    styles.itemDescription
                                }
                                elevation={3}
                            >
                                <Text
                                    style={
                                        styles.heading
                                    }
                                >
                                    Product Details {'\n\n'}
                                </Text>
                                <View
                                    style={
                                        styles.row
                                    }
                                >
                                    <Text
                                        style={
                                            styles.text
                                        }
                                    >
                                        Item:
                                    </Text>
                                    <Text
                                        style={
                                            styles.text
                                        }
                                    >
                                        Vegetables
                                    </Text>
                                </View>
                                <View
                                    style={
                                        styles.row
                                    }
                                >
                                    <Text
                                        style={
                                            styles.text
                                        }
                                    >
                                        Product Code:
                                    </Text>
                                    <Text
                                        style={
                                            styles.text
                                        }
                                    >
                                        SK-1026
                                    </Text>
                                </View>
                                <View
                                    style={
                                        styles.row
                                    }
                                >
                                    <Text
                                        style={
                                            styles.text
                                        }
                                    >
                                        Price:
                                    </Text>
                                    <Text
                                        style={[
                                            styles.text, {
                                                color: secondaryColor
                                            }
                                        ]}
                                    >
                                        {'\u20B9'}100
                                    </Text>
                                </View>
                                <View
                                    style={
                                        styles.row
                                    }
                                >
                                    <Text
                                        style={
                                            styles.text
                                        }
                                    >
                                        Weight / Packet:
                                    </Text>
                                    <Picker
                                        style={{
                                            width: '50%'
                                        }}
                                    >
                                        <Picker.Item 
                                            label="1 KG"
                                        />
                                    </Picker>
                                </View>
                                <View
                                    style={
                                        styles.row
                                    }
                                >
                                    <Text
                                        style={
                                            styles.text
                                        }
                                    >
                                        Quantity:
                                    </Text>
                                    <Picker
                                        style={{
                                            width: '50%'
                                        }}
                                    >
                                        <Picker.Item 
                                            label="1"
                                        />
                                    </Picker>
                                </View>
                                <TouchableOpacity
                                    style={
                                        styles.button
                                    }
                                >
                                    <Text
                                        style={
                                            styles.buttonText
                                        }
                                    >
                                        Add to Cart
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: primaryColor,
        flexDirection: 'row',
        paddingHorizontal: '5%',
    },
    body: {
        flex: 9
    },
    imageView: {
        height: 250,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyItem: {
        padding: '5%',
    },
    itemText: {
        fontSize: 24,
        color: '#000',
    },
    itemDescription: {
        backgroundColor: '#FFF',
        marginVertical: '5%',
        padding: '5%',
        width: '100%',
        // justifyContent: 'space-around',
    },
    heading: {
        fontSize: 20,
        color: '#000'
    },
    text: {
        color: '#000'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        backgroundColor: secondaryColor,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFF'
    }
})