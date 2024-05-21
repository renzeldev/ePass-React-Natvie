import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
} from 'react-native-reanimated';
// import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';

// const handleDrawerSlide = (status) => {
//     // outputs a value between 0 and 1
//     console.log(status);
// };
// const renderDrawer = () => {
//     return (
//         <View>
//             <Text>I am in the drawer!</Text>
//         </View>
//     );
// };

const END_POSITION = 200;

const drawerLayout = () => {
    const onLeft = useSharedValue(true);
    const position = useSharedValue(0);

    const panGesture = Gesture.Pan()
        .onUpdate((e) => {
            if (onLeft.value) {
                position.value = e.translationX;
            } else {
                position.value = END_POSITION + e.translationX;
            }
        })
        .onEnd((e) => {
            if (position.value > END_POSITION / 2) {
                position.value = withTiming(END_POSITION, { duration: 100 });
                onLeft.value = false;
            } else {
                position.value = withTiming(0, { duration: 100 });
                onLeft.value = true;
            }
        });

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: position.value }],
    }));

    return (
        <GestureDetector gesture={panGesture}>
            <Animated.View style={[styles.box, animatedStyle]} />
        </GestureDetector>
    )
}

export default drawerLayout

const styles = StyleSheet.create({
    box: {
        height: 120,
        width: 120,
        backgroundColor: '#b58df1',
        borderRadius: 20,
        marginBottom: 30,
    },
})