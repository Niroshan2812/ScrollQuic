import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

interface ProfileHeaderProps {
    userName: string;
    level: number;
}

const imguri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s';

export default function ProfileHeader({ userName, level }: ProfileHeaderProps) {
    return (
        <View>
            <Image source={{ uri: imguri }} style={styles.image} />
            <Text style={styles.name}>Hello {userName}</Text>
            <Text style={styles.level}>Current Level: Level {level}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    containner: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: '#ccc'
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    level: {
        fontSize: 16,
        marginTop: 5
    },
})

