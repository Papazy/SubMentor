import React, { useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ActivityIndicator, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { getAllPendingMentoringSessionsFromMentor } from '@Services/MentorServices'
import { useAuth } from '@Context/AuthContext'
import MentoringRequestCard from '@Assets/components/MentoringRequestCard'
import UpcomingMentoringRequestCard from '@Assets/components/UpcomingMentoringRequestCard'
import { styles } from '@Assets/style/styles'


const text_primary = '#32343D'
const text_secondary = '#A4A5B4'
const button_primary = '#593C97'
const purple = '#722080'
const green = '#61C016'
const red = '#E23232'
const white = '#ffffff'


const UpcomingMentor = () => {

  return (
    <View style={[styles.flexRow, styles.spaceBetween]}>
      <Text style={styles.subtitle}>Upcoming Mentoring</Text>
      <Text style={styles.seeAll}>See All</Text>
    </View>
  );

}

const UpcomingMentorCard = () => {

  return (
    <View style={{ ...styles.card, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Image
          source={{ uri: 'https://picsum.photos/100/100' }} // RANDOM IMAGES, CHANGE LATER
          style={styles.image_profile}
        />

        <Text style={{ fontFamily: 'poppins_bold', fontSize: 14, color: white, textAlign: 'left', paddingLeft: 10 }}>NAME</Text>
      </View>

      <View style={{ ...styles.card_white, flexDirection: 'column' }}>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 5 }}>
          <FontAwesome name="calendar" size={16} color="#722080" />
          <Text style={{ fontFamily: 'poppins_regular', fontSize: 12, color: purple, textAlign: 'center', paddingLeft: 10 }}>DAY, DATE MONTH</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <FontAwesome name="clock-o" size={16} color="#722080" />
          <Text style={{ fontFamily: 'poppins_regular', fontSize: 12, color: purple, textAlign: 'center', paddingLeft: 10 }}>xx:xx - yy:yy ZM</Text>
        </View>

      </View>
    </View>
  );

}

const LineSeparator = () => {
  return (
    <View style={[styles.garisBawah, { borderBottomColor: '#303030', marginBottom: 20 }]}></View>
  );
};

const MentoringRequestMentor = () => {

  return (
    <View style={[styles.flexRow, styles.spaceBetween]}>
      <Text style={styles.subtitle}>Mentoring Request</Text>
      <Text style={styles.seeAll}>See All</Text>
    </View>
  );

}

const MentoringRequestMentorCard = () => {

  return (
    <View style={{ ...styles.card, flexDirection: 'column', }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Image
            source={{ uri: 'https://picsum.photos/100/100' }} // RANDOM IMAGES, CHANGE LATER
            style={styles.image_profile}
          />
          <View style={{ flexDirection: 'column', }}>
            <Text style={{ fontFamily: 'poppins_bold', fontSize: 14, color: white, textAlign: 'left', paddingLeft: 10 }}>NAME</Text>
            <Text style={{ fontFamily: 'poppins_bold', fontSize: 14, color: white, textAlign: 'left', paddingLeft: 10 }}>SUBJECT_NAME</Text>
          </View>
        </View>

        <View style={{ ...styles.card_white, flexDirection: 'column' }}>

          <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 5 }}>
            <FontAwesome name="calendar" size={16} color="#722080" />
            <Text style={{ fontFamily: 'poppins_regular', fontSize: 12, color: purple, textAlign: 'center', paddingLeft: 10 }}>DAY, DATE MONTH</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <FontAwesome name="clock-o" size={16} color="#722080" />
            <Text style={{ fontFamily: 'poppins_regular', fontSize: 12, color: purple, textAlign: 'center', paddingLeft: 10 }}>xx:xx - yy:yy ZM</Text>
          </View>

        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
        <View style={{ ...styles.card_green, flexDirection: 'row' }}>
          <AntDesign name="check" size={16} color="white" />
          <Text style={{ fontFamily: 'poppins_regular', fontSize: 14, color: white, textAlign: 'center', paddingLeft: 10 }}>Accept</Text>
        </View>
        <View style={{ ...styles.card_red, flexDirection: 'row' }}>
          <Entypo name="cross" size={16} color="white" />
          <Text style={{ fontFamily: 'poppins_regular', fontSize: 14, color: white, textAlign: 'center', paddingLeft: 10 }}>Denied</Text>
        </View>
        <View style={{ ...styles.card_red, flexDirection: 'row' }}>
          <Ionicons name="chatbubble-ellipses-outline" size={16} color="white" />
          <Text style={{ fontFamily: 'poppins_regular', fontSize: 14, color: white, textAlign: 'center', paddingLeft: 10 }}>Chat</Text>
        </View>
      </View>
    </View>
  );
}


const MainApp = () => {

  const { user } = useAuth();
  const [mentoringSessions, setMentoringSessions] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    const getData = async () => {
      const dataReturn = await getAllPendingMentoringSessionsFromMentor(user.uid);
      setMentoringSessions(dataReturn)

      setIsLoading(false)
    }
    getData();
  },[])


  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView style={{ padding: 20, paddingTop: 40, height: '100%' }}>
        <Text style={{ fontFamily: 'inter_bold', fontSize: 23, color: text_primary, textAlign: 'left', paddingBottom: 40 }}>Dashboard</Text>
        <UpcomingMentor />
        <UpcomingMentoringRequestCard />
        <LineSeparator />
        
        <MentoringRequestMentor />
        {isLoading ? <ActivityIndicator /> : mentoringSessions.map((item, index) => {
          return <MentoringRequestCard key={index} item={item} />
        }
        )}
      </SafeAreaView>
    </ScrollView>
  );
};



export default MainApp;
