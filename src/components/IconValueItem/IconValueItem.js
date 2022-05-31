import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import s from './IconValueItem.module.scss'
import { AntDesign } from '@expo/vector-icons'; 

function IconValueItem({title, value, iconKind, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} className={s.container}>
        <View className={s.iconContainer}>
            <AntDesign name={iconKind} style={s.icon} color="black" size={40}/>
        </View>
        <View className={s.textContainer}>
            <Text className={s.title}>{title}</Text>
            <Text className={s.value}>{value}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default IconValueItem