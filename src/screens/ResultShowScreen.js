import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import yelp from '../api/yelp'

const ResultShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id')

    console.log(result)

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResult(id)
    }, [])

    return (
        <Text>Result Show Screen</Text>
    )
}

const styles = StyleSheet.create({})

export default ResultShowScreen
