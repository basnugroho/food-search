import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'
import ResultDetail from './ResultDetail'

const ResultList = ({ title, results, navigation }) => {
    return (
        <View style = { styles.container } >
            <Text style = { styles.title }>{ title }</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator = { false }
                data = { results }
                keyExtractor = { (result) => result.id }
                renderItem = { ({ item }) => {
                    return (
                    <TouchableOpacity onPress = { () => navigation.navigate('ResultShow') } >
                        <ResultDetail result = { item } />
                    </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 5
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 15
    }
})

export default withNavigation(ResultList)