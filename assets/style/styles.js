import { StyleSheet } from 'react-native';
import Colors from '../Colors';

export const styles =  StyleSheet.create({
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
        searchBarLarge: {
            backgroundColor: '#F2F2F2',
            borderRadius: 10,
            borderColor: '#E0E0E0',
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 0,
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
        subKartuUpcomingColumn: {
            backgroundColor: 'white',
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
        garisSamping: {
            borderRightColor:'black',
            borderRightWidth:1,
            marginHorizontal:10
        },
        textInformation: {
            color: Colors.ungu,
            fontFamily: 'poppins_regular',
            fontSize: 13,
        },
        textInformation2: {
            color: Colors.ungu,
            fontFamily: 'inter_regular',
            fontSize: 13,
        },
        textInformation3: {
            color: Colors.ungu,
            fontFamily: 'poppins_regular',
            fontSize: 12,
        },
        textLight:{
            color: Colors.text_secondary,
            fontFamily: 'inter_regular',
            fontSize: 14,
        
        },
        borderLight: {
            borderColor: Colors.text_secondary,
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            marginVertical: 10,
        },
        

        // Chats

        // Buttons
        button :{
            backgroundColor: Colors.ungu,
            borderRadius:20,
            paddingVertical:10,
            paddingHorizontal:5
        },
        buttonLabel :{
            textAlign:'center',
            color: 'white',
            fontFamily:'poppins_regular',
            fontSize:16,
        },

        // card
        card_green: {
            backgroundColor: '#61C016',
            borderRadius: 15,
            paddingVertical: 8,
            paddingHorizontal:10,
          },
          card_red: {
            backgroundColor: '#E23232',
            borderRadius: 15,
            paddingVertical: 8,
            paddingHorizontal:10,
          },
          card_white: {
            backgroundColor: '#ffffff',
            borderRadius: 15,
            paddingVertical: 8,
            paddingHorizontal:10,
          },
          card_gray: {
            backgroundColor: '#808080',
            borderRadius: 15,
            paddingVertical: 8,
            paddingHorizontal:10,
          },
    
    })
