import React from 'react'
import { useAuth } from '../../context/AuthContext';
import { router, } from 'expo-router';
import { ActivityIndicator, ScrollView, TouchableOpacity, View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import Colors from '../../assets/Colors';


// icons
import { MaterialCommunityIcons, Entypo, FontAwesome, AntDesign, Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// Componenst
import UpComingCard from '../../assets/components/UpComingCard';
import TopMentor from '../../assets/components/TopMentor';

// Speciality sementara
const specialities = [
    'Math',
    'Physics',
    'Biology',
    'Chemistry',
    'Programming',
    'C++',
    'Java',
    'Python',
    'React Native',
    'React JS',
    'Machine Learning',
    'Artificial Intelligence',
    'Data Science'
]



export default function index() {

    const { signOut, getUser } = useAuth();
    const [isLoading, setIsLoading] = React.useState(true);
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        const getUserData = async () => {
            setIsLoading(true);
            const currUser = await getUser();
            console.log('Mendapati user');
            console.log(currUser);
            setUser(currUser);
            setIsLoading(false);
        }
        getUserData();
    }, [])

    const handleSignOut = async () => {
        try {
            await signOut();
            router.replace('/signin');
        } catch (e) {
            alert(e.message);
        }
    }
    if (isLoading) return <ActivityIndicator />;
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <SafeAreaView>
                {/* Menutupi agar tidak tertutup Status Bar */}
                <View style={{ marginTop: 30, marginHorizontal: 20 }}>

                    {/* header */}
                    <View style={[styles.flexRow, styles.spaceBetween]}>
                        <View style={styles.a}>
                            <Text style={{ color: Colors.text_secondary, fontFamily: 'inter_regular' }}>  Location</Text>
                            <View style={[styles.flexRow]}>
                                <Entypo name="location-pin" size={24} color={Colors.ungu} />
                                <Text style={{ color: Colors.text_primary, fontFamily: 'inter_regular', fontSize: 15 }}>Banda Aceh, Aceh</Text>
                            </View>
                        </View>
                        <View style={[styles.flexRow, { gap: 15 }]}>
                            <MaterialCommunityIcons name="comment-question-outline" size={28} color="#212121" />
                            <MaterialCommunityIcons name="bell-outline" size={28} color='#212121' />
                        </View>
                    </View>
                    {/* Search bar */}
                    <View style={styles.searchBar}>
                        <MaterialIcons name="search" size={24} color={Colors.text_secondary} />
                        <TextInput placeholder='search a subject like math, C++' />
                    </View>
                    {/* Upcoming Mentoring if any*/}
                    <View style={[styles.flexRow, styles.spaceBetween, { marginTop: 10 }]}>
                        <Text style={styles.subtitle}>Upcoming Mentoring</Text>
                        <Text style={styles.seeAll}>See All</Text>
                    </View>
                    <UpComingCard user={user} />
                    {/* Mentoring Specility */}
                    <View style={[styles.flexRow, styles.spaceBetween]}>
                        <Text style={styles.subtitle}>Mentoring Speciality</Text>
                        <Text style={styles.seeAll}>See All</Text>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={[styles.flexRow, { marginTop: 10 }]}>
                            {specialities.map((speciality, index) => {
                                return (
                                    <TouchableOpacity style={{ backgroundColor: Colors.ungu, borderRadius: 10, padding: 10, marginRight: 10 }}>
                                        <Text style={{ color: 'white', fontFamily: 'inter_regular' }}>{speciality}</Text>
                                    </TouchableOpacity>
                                )
                            })}

                        </View>
                    </ScrollView>
                    {/* Top Mentor */}

                    <View style={[styles.flexRow, styles.spaceBetween, {marginTop:10}]}>
                        <Text style={styles.subtitle}>Top Mentor</Text>
                        <Text style={styles.seeAll}>See All</Text>
                    </View>
                        <TopMentor user={user} />

                </View>
            </SafeAreaView>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
    },
    spaceBetween: {

        alignItems: 'center',
        justifyContent: 'space-between',
    },
    searchBar: {
        backgroundColor: '#F2F2F2',
        borderRadius: 10,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 14,
        gap: 10,
    },
    fotoProfileMentoring: {
        width: 65,
        height: 65,
        borderRadius: 100,
    },
    subtitle: {
        fontSize: 18,
        fontFamily: 'inter_regular',
        color: 'black',
    },
    seeAll: {
        color: Colors.ungu,
        fontFamily: 'inter_regular',
        fontSize: 14,
    },
    kartuUpcoming: {
        backgroundColor: Colors.ungu,
        borderRadius: 20,
        padding: 15,
        marginVertical: 10,
    },
    subKartuUpcoming: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
    },
    white: {
        color: 'white'
    },
    garisBawah: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 5,
        marginTop: 12,
    },
    textInformation: {
        color: Colors.ungu,
        fontFamily: 'poppins_regular',
        fontSize: 13,
    },

})