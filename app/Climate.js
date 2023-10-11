import {View, Text, StyleSheet, Image, Pressable} from "react-native";
import {Ionicons, MaterialCommunityIcons, Foundation} from '@expo/vector-icons';
import {useRouter} from "expo-router";
import {useState} from "react";
const ClimateScreen = () => {
    const router = useRouter();
 
    const [temperature, setTemperature] = useState(72)
    const [on, setOn] =useState(false)


    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/images/climate.png')} />
            <Pressable onPress={() => router.back()} style={styles.backButton}>
                <Ionicons name="chevron-back" size={24} color="white"/>
            </Pressable>

            <View style={styles.climateFooter}>
                <Text style={styles.climateFooterText}>Interior 74<MaterialCommunityIcons name="temperature-fahrenheit" size={22} color="grey" /> - Exterior 66<MaterialCommunityIcons name="temperature-fahrenheit" size={22} color="grey" /></Text>
                <View style={styles.footerIcon}>

                    <Pressable
                        onPress={() => {setOn(!on)}}
                        style={{alignItems: 'center'}}
                    >
                        <Foundation name="power" size={40} color={on ? 'white' : 'grey'}/>
                        <Text style={{fontSize: 17, color: 'grey', fontWeight: 'bold',}}>{on ? 'on' : 'off'}</Text>
                    </Pressable>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 35, marginRight: 35,}}>
                        <Ionicons onPress={() => {setTemperature(temperature - 1)}} name="chevron-back" size={24} color="grey"/>
                        <Text style={styles.footerIconText}>{temperature}<MaterialCommunityIcons name="temperature-fahrenheit" size={50} color="grey" /></Text>
                        <Ionicons onPress={() => {setTemperature(temperature + 1)}} name="chevron-forward" size={24} color="grey"/>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <MaterialCommunityIcons name="car-door" size={40} color="grey"/>
                        <Text style={{fontSize: 17, color: 'grey', fontWeight: 'bold',}}>Vent</Text>
                    </View>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161818'
    },
    image: {
        width: '100%',
        height: '60%',
    },
    backButton: {
        position: 'absolute',
        width: 40,
        height: 40,
        backgroundColor: '#343a40',
        marginRight: 'auto',
        marginTop: 50,
        marginLeft: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    climateFooter: {
        position: 'absolute',
        marginTop: 670,
        alignItems: 'center',
    },
    climateFooterText: {
        fontSize: 20,
        color: 'grey',
    },
    footerIcon: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    footerIconText: {
        fontSize: 50,
        color: '#dee2e6',
        paddingRight: 20,
        paddingLeft: 20,

    },
})

export default ClimateScreen;