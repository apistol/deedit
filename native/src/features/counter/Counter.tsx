import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native'
import React, { useState } from 'react'
import { decrement, increment, selectCount } from './counterSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

export function Counter() {
  const [incrementAmount, setIncrementAmount] = useState('2')
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const dimensions = useWindowDimensions()
  return (
    <View>
      <View style={styles.row}>
        <View style={styles.viewSigns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch(increment())}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.value}>{count}</Text>
        <View style={styles.viewSigns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch(decrement())}
          >
            <Text style={[styles.buttonText, { fontSize: 99, top: -21 }]}>
              -
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewSigns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.warn(dimensions.width)}
          >
            <Text style={styles.buttonText}>w</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewSigns: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#192A33',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 12,
    paddingBottom: 4,
    margin: 2,
  },
  buttonText: {
    color: '#F3F3F3',
    fontSize: 62,
    textAlign: 'center',
  },
  value: {
    fontSize: 80,
    paddingHorizontal: 16,
    marginTop: 2,
    color: '#B372EF',
  },
})
