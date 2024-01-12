import { View, Text, Modal, Button } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const status = () => {
    const [IsModalVisible, setIsModalVisible] = React.useState(true);
    const animationRef = React.useRef(null);

    const [isPlayingForward, setIsPlayingForward] = React.useState(true);
    const animationDuration = 5000;  // Durasi animasi dalam milidetik (14.6 detik * 1000)
    const [finish, setFinish] = React.useState(false);
    const [isLoop, setIsLoop] = React.useState(true);


    React.useEffect(() => {
        if(finish){
            animationRef.current?.play(0, 14.9)
            setIsLoop(false)
        }
        animationRef.current?.play(0, 14.9)

        setInterval(() => {
            setFinish(true)
        }, animationDuration);
    }, []);

    return (
        <>
        <Modal
            animationType="fade"
            style={{ flex: 1 }}
            transparent={true}
            visible={IsModalVisible}
            onRequestClose={() => setIsModalVisible(false)}
        >

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <LottieView source={require('../../assets/images/Success.json')}  loop={isLoop} style={{ width: 300, height: 300 }} ref={animationRef} speed={0.2} />
            </View>
        </Modal>
        <Button title="Show modal" onPress={() => setIsModalVisible(true)} />
        </>
    )
}

export default status