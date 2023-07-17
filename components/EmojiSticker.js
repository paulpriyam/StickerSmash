import { View, Image } from "react-native";
import {
  PanGestureHandler,
  TapGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
} from "react-native-reanimated";

// This is the sticker that would be displayed on the image.
const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedView = Animated.createAnimatedComponent(View)

export default function EmojiSticker({ imageSize, stickerSource }) {

  const scaleImage = useSharedValue(imageSize);
  const translateX = useSharedValue(0);
  const translateY= useSharedValue(0);

  const onDrag = useAnimatedGestureHandler({
    onStart: (event,context) => {
      context.translateX = translateX.value
      context.translateY=translateY.value
    },
    onActive: (event,context) => {
      translateX.value = context.translateX + event.translationX
      translateY.value = context.translateY + event.translationY
    }
  })
  
  const onDoubleTap = useAnimatedGestureHandler({
    onActive: () => {
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
      }
    },
  });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  const animatedViewStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={onDrag}>
      <AnimatedView style={[animatedViewStyle, { top: -350 }]}>
        <TapGestureHandler onGestureEvent={onDoubleTap} numberOfTaps={2}>
          <AnimatedImage
            source={stickerSource}
            style={[
              imageStyle,
              {
                height: imageSize,
                width: imageSize,
              },
            ]}
            resizeMode="contain"
          />
        </TapGestureHandler>
      </AnimatedView>
    </PanGestureHandler>
  );
}


