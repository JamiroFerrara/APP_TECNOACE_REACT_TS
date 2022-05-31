import {View, Text, Pressable, Alert, TouchableWithoutFeedback} from "react-native"
import { useRef } from "react";
import * as Animatable from 'react-native-animatable';

export default function TouchableAnimation({children, style, onPress, duration = 1000, animation = "bounceIn", direction = "normal"}){
  const AnimationRef = useRef(null);

  const _onPress = () => {
    if(AnimationRef) {
        getAnimationType(animation, AnimationRef);
    }
    if (onPress){
        onPress();
    }
  }

  return (
    <TouchableWithoutFeedback onPress={_onPress}>
      <Animatable.View style={style} useNativeDriver={true} duration={duration} ref={AnimationRef} direction={direction}>
          {children}
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
}

function getAnimationType(animationType, AnimationRef){
    switch(animationType){

            //Attention Seekers
        case "bounce":
            AnimationRef.current?.bounce();
            break;
        case "flash":
            AnimationRef.current?.flash();
            break;
        case "jello":
            AnimationRef.current?.jello();
            break;
        case "pulse":
            AnimationRef.current?.pulse();
            break;
        case "rotate":
            AnimationRef.current?.rotate();
            break;
        case "rubberBand":
            AnimationRef.current?.rubberBand();
            break;
        case "shake":
            AnimationRef.current?.shake();
            break;
        case "swing":
            AnimationRef.current?.swing();
            break;
        case "tada":
            AnimationRef.current?.wobble();
            break;

            //Bouncing entrances
        case "bounceIn":
            AnimationRef.current?.bounceIn();
            break;
        case "bounceInDown":
            AnimationRef.current?.bounceInDown();
            break;
        case "bounceInLeft":
            AnimationRef.current?.bounceInLeft();
            break;
        case "bounceInRight":
            AnimationRef.current?.bounceInRight();
            break;

            //Bouncing exits
        case "bounceOut":
            AnimationRef.current?.bounceOut();
            break;
        case "bounceOutDown":
            AnimationRef.current?.bounceOutDown();
            break;
        case "bounceOutUp":
            AnimationRef.current?.bounceOutUp();
            break;
        case "bounceOutLeft":
            AnimationRef.current?.bounceOutLeft();
            break;
        case "bounceOutRight":
            AnimationRef.current?.bounceOutRight();
            break;

            //Fading Entrances
        case "fadeIn":
            AnimationRef.current?.fadeIn();
            break;
        case "fadeInDown":
            AnimationRef.current?.fadeInDown();
            break;
        case "fadeInDownBig":
            AnimationRef.current?.fadeInDownBig();
            break;
        case "fadeInUp":
            AnimationRef.current?.fadeInUp();
            break;
        case "fadeInUpBig":
            AnimationRef.current?.fadeInUpBig();
            break;
        case "fadeInLeft":
            AnimationRef.current?.fadeInLeft();
            break;
        case "fadeInLeftBig":
            AnimationRef.current?.fadeInLeftBig();
            break;
        case "fadeInRight":
            AnimationRef.current?.fadeInRight();
            break;
        case "fadeInRightBig":
            AnimationRef.current?.fadeInRightBig();
            break;
            
            //Fading Exits
        case "fadeOut":
            AnimationRef.current?.fadeOut();
            break;
        case "fadeOutDown":
            AnimationRef.current?.fadeOutDown();
            break;
        case "fadeOutDownBig":
            AnimationRef.current?.fadeOutDownBig();
            break;
        case "fadeOutUp":
            AnimationRef.current?.fadeOutUp();
            break;
        case "fadeOutUpBig":
            AnimationRef.current?.fadeOutUpBig();
            break;
        case "fadeOutLeft":
            AnimationRef.current?.fadeOutLeft();
            break;
        case "fadeOutLeftBig":
            AnimationRef.current?.fadeOutLeftBig();
            break;
        case "fadeOutRight":
            AnimationRef.current?.fadeOutRight();
            break;
        case "fadeOutRightBig":
            AnimationRef.current?.fadeOutRightBig();
            break;

            //Flippers
        case "flipInX":
            AnimationRef.current?.flipInX();
            break;
        case "flipInY":
            AnimationRef.current?.flipInY();
            break;
        case "flipOutX":
            AnimationRef.current?.flipOutX();
            break;
        case "flipOutY":
            AnimationRef.current?.flipOutY();
            break;

            //Lightspeed
        case "lightSpeedIn":
            AnimationRef.current?.lightSpeedIn();
            break;
        case "lightSpeedOut":
            AnimationRef.current?.lightSpeedOut();
            break;

            //Sliding Entrances
        case "slideInDown":
            AnimationRef.current?.slideInDown();
            break;
        case "slideInUp":
            AnimationRef.current?.slideInUp();
            break;
        case "slideInLeft":
            AnimationRef.current?.slidInLeft();
            break;
        case "slideInRight":
            AnimationRef.current?.slideInRight();
            break;

            //Sliding Exits
        case "slideOutDown":
            AnimationRef.current?.slideOutDown();
            break;
        case "slideOutUp":
            AnimationRef.current?.slideOutUp();
            break;
        case "slideOutLeft":
            AnimationRef.current?.slideOutLeft();
            break;
        case "slideOutRight":
            AnimationRef.current?.slideOutRight();
            break;

            //Zooming Entrances
        case "zoomIn":
            AnimationRef.current?.zoomIn();
            break;
        case "zoomInDown":
            AnimationRef.current?.zoomInDown();
            break;
        case "zoomInUp":
            AnimationRef.current?.zoomInUp();
            break;
        case "zoomInleft":
            AnimationRef.current?.zoomInLeft();
            break;
        case "zoomInRight":
            AnimationRef.current?.zoomInRight();
            break;

            //Zooming Exits
        case "zoomOut":
            AnimationRef.current?.zoomOut();
            break;
        case "zoomOutDown":
            AnimationRef.current?.zoomOutDown();
            break;
        case "zoomOutUp":
            AnimationRef.current?.zoomOutUp();
            break;
        case "zoomOutLeft":
            AnimationRef.current?.zoomOutLeft();
            break;
        case "zoomOutRight":
            AnimationRef.current?.zoomOutRight();
            break;
    }
}

