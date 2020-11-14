import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import ResultList from '../components/ResultList'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    // console.log(results)
    
    const filterResultByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter( (results) => {
            return results.price === price
        })
    }

    return (
    <>
        <SearchBar 
            term = { term } 
            onTermChange = { (newTerm) => setTerm(newTerm) }
            onTermSubmit = { () => searchApi(term) }
        />
        { errorMessage ? <Text>{ errorMessage }</Text> : null }
        <ScrollView>
            <ResultList title = "Hemat" results = { filterResultByPrice('$') } />
            <ResultList title = "Sedang" results = { filterResultByPrice('$$') } />
            <ResultList title = "Mevvah" results = { filterResultByPrice('$$$') } />
            <ResultList title = "Sultans" results = { filterResultByPrice('$$$$') } />
        </ScrollView>
    </>
    )
}

const styles = StyleSheet.create({
    title: {
        marginBottom: 5
    }
})

export default SearchScreen