import { useTheme } from '@react-navigation/native';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    Button,
    StatusBar,
  } from 'react-native';
 // import {useTheme} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
  const HomeScreen = ({navigation}) => {

   // const {colors}= useTheme();

   // const theme = useTheme();

    return (
      
        <View style={styles.sliderContainer}>
          <Swiper autoplay  height={200}>
            <View style={styles.slide}>
                <Image
                    source={require('../assets/fashion.jpg')}
                    style={styles.sliderImage}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.slide}>
                <Image
                    source={require('../assets/grosary.jpg')}
                    style={styles.sliderImage}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.slide}>
                <Image
                    source={require('../assets/stationary.jpg')}
                    style={styles.sliderImage}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.slide}>
                <Image
                    source={require('../assets/cosmetics.jpg')}
                    style={styles.sliderImage}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.slide}>
                <Image
                    source={require('../assets/food.jpg')}
                    style={styles.sliderImage}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.slide}>
                <Image
                    source={require('../assets/electronic.jpg')}
                    style={styles.sliderImage}
                    resizeMode="cover"
                />
            </View>

          </Swiper>

              <View style={{flexDirection:'row',marginTop: 5}}>
                  <Image
                      source={require('../assets/fashion.jpg')}
                      style={styles.LeftImageButton}
                  />
                  <View style={{marginLeft:15, flexDirection:'column'}}>
                  <Image
                      source={require('../assets/grosary.jpg')}
                      style={styles.LeftImageButton}
                  />
                  </View>
              </View>

              <View style={{flexDirection:'row',marginTop: 5}}>
                    <Image
                        source={require('../assets/stationary.jpg')}
                        style={styles.LeftImageButton}
                    />
                    <View style={{marginLeft:15, flexDirection:'column'}}>
                    <Image
                        source={require('../assets/cosmetics.jpg')}
                        style={styles.LeftImageButton}
                    />
                    </View>
              </View>

              <View style={{flexDirection:'row',marginTop: 5}}>
                    <Image
                        source={require('../assets/food.jpg')}
                        style={styles.LeftImageButton}
                    />
                    <View style={{marginLeft:15, flexDirection:'column'}}>
                    <Image
                        source={require('../assets/electronic.jpg')}
                        style={styles.LeftImageButton}
                    />
                    </View>
              </View>

       </View>
      
    );
  };

  export default HomeScreen;

  const styles = StyleSheet.create({
    
    sliderContainer: {
      height:550,
      width:340,
      marginTop:10,
      marginLeft:10,
      marginRight:50,
      borderRadius:8
    },
    slide:{
      flex:1,
      justifyContent:'center',
      backgroundColor:'transparent',
      borderRadius:8
    },
    sliderImage:{
      height:'100%',
      width:'100%',
      alignSelf:'center',
      borderRadius:8
    },
    LeftImageButton:{
      height:100,
      width:160,
      borderRadius:8
    },
    
  });