import React from 'react'
import {
    View, StyleSheet, Text, TouchableOpacity, Image, FlatList
} from 'react-native'
import { secondaryColor } from '../constants/colors'

export default class HorizontalListHomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            heading: props.heading, // From Home Page
            items: props.items // From Home Page
        }
    }
    // Go to Product Details Page
    gotoProductDetails() {
        this.props.navigation.navigate('ProductDetails')
    }
    render() {
        return (
            <View
                style={styles.horizontalList}
            >
                <View
                    style={styles.listHeader}
                >
                    <Text
                        style={styles.horizontalListHeading}
                    >
                        {this.state.heading}
                    </Text>
                    <Text
                        style={[
                            styles.horizontalListHeading, 
                            {textAlign: 'right'}
                        ]}
                    >
                        See All
                    </Text>
                </View>
                <FlatList
                    style={styles.list}
                    horizontal={true}
                    data={this.state.items}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => this.gotoProductDetails()}
                        >
                            <View
                                style={styles.listItem}
                                elevation={2}
                            >
                                <Image
                                    source={item.img}
                                    style={styles.listImage}
                                />
                                <Text
                                    style={{
                                        color: '#000',
                                        fontSize: 16
                                    }}
                                >
                                    {item.name} {/*Name*/}
                                </Text>
                                <Text
                                    style={{
                                        color: '#000',
                                        fontSize: 16
                                    }}
                                >
                                    {item.hindi} {/*HINDI Name*/}
                                </Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                    }}
                                >
                                    <Text
                                        style={{
                                            textDecorationLine: 'line-through',
                                            textDecorationStyle: 'solid',
                                            color: '#000',
                                            fontSize: 16
                                        }}
                                    >
                                        {'\u20B9'}{item.oldPrice}
                                    </Text>
                                    <Text
                                        style={{
                                            color: secondaryColor,
                                            fontSize: 16
                                        }}
                                    >
                                        {'\u20B9'}{item.newPrice}
                                    </Text>
                                </View>
                                <TouchableOpacity
                                    style={styles.listItemButton}
                                >
                                    <Text
                                        style={styles.listItemButtonText}
                                    >
                                        Add to Cart
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    };
}

const styles = StyleSheet.create({
    listItemButtonText: {
        color: '#FFF'
    },
    listItemButton: {
        height: 30,
        width: '90%',
        marginHorizontal: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: secondaryColor,
    },
    list: {
        height: 175
    },
    listHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    listItem: {
        height: '100%',
        width: 120,
        padding: 5,
        justifyContent: 'space-around',
        marginRight: 10,
    },
    listImage: {
        height: 100,
        width: 100,
        resizeMode: 'stretch'
    },
    horizontalList: {
        height: 280,
        justifyContent: 'space-around',
        paddingHorizontal: '5%',
        marginTop: 10,
    },
    horizontalListHeading: {
        fontSize: 20,
        color: '#000',
        width: '50%',
        textAlignVertical: 'center'
    },
})