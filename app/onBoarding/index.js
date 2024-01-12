import Onboarding from 'react-native-onboarding-swiper';
import { Image, View, Button, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {router} from 'expo-router';

const Square = ({ isLight, selected }) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? '#722080' : 'rgba(0, 0, 0, 0.3)';
  } else {
    backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
  }
  return (
    <View
      style={{
        width: 10,
        height: 10,
        marginHorizontal: 3,
        backgroundColor,
        borderRadius: 50,
      }}
    />
  );
};

const backgroundColor = isLight => (isLight ? 'blue' : 'lightblue');
const color = isLight => backgroundColor(!isLight);

const Done = ({ isLight, ...props }) => (
  <TouchableOpacity
    
    style={{ marginHorizontal: 10, backgroundColor:'#722080', paddingHorizontal:10, paddingVertical:5, borderRadius:10, marginRight:20}}
    {...props}
  >
    <Text style={{color:'white',fontFamily:'poppins_regular', fontSize:15}}>Done</Text>
  </TouchableOpacity>
);

const Skip = ({ isLight, skipLabel, ...props }) => (
  <TouchableOpacity
    
    style={{ marginHorizontal: 10, backgroundColor:'#722080', paddingHorizontal:10, paddingVertical:5, borderRadius:10, marginLeft:20}}
    {...props}
  >
    <Text style={{color:'white',fontFamily:'poppins_regular', fontSize:15}}>{skipLabel}</Text>
  </TouchableOpacity>
);

const Next = ({ isLight, ...props }) => (
  // <Button
  //   title={'Next'}
  //   buttonStyle={{
  //     backgroundColor: backgroundColor(isLight),
  //   }}
  //   containerViewStyle={{
  //     marginVertical: 10,
  //     width: 70,
  //     backgroundColor: backgroundColor(isLight),
  //   }}
  //   textStyle={{ color: color(isLight) }}
  //   {...props}
  // />
  <Feather name="arrow-right-circle" size={40} color="white" backgroundColor="#722080" style={{borderRadius:50, marginRight:20}} {...props}/>
);
export default function onBoarding() {
  return <Onboarding
  
    DotComponent={Square}
    NextButtonComponent={Next}
    SkipButtonComponent={Skip}
    DoneButtonComponent={Done}
    onDone={()=>{router.replace('/signin')}}
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require('../../assets/images/onBoard1.png')} style={{width:343, height:270}}/>,
        title: 'Discover Experienced Mentor',
        subtitle: 'Empower Your Journey withKnowledgeable Mentors',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../../assets/images/onBoard2.png')} style={{width:343, height:270}}/>,
        title: 'Effortless Appointment Booking',
        subtitle: 'Empower Your Journey with Knowledgeable Mentors',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../../assets/images/onBoard3.png')} style={{width:343, height:270}}/>,
        title: 'Learn What You Want To Learn',
        subtitle: 'Empower Your Journey with Knowledgeable Mentors',
      },

    ]} />

}