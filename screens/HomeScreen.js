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
import { TouchableOpacity } from 'react-native-gesture-handler';
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
                    source={require('../assets/s1.jpg')}
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
                    source={require('../assets/s2.jpg')}
                    style={styles.sliderImage}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.slide}>
                <Image
                    source={require('../assets/s3.jpg')}
                    style={styles.sliderImage}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.slide}>
                <Image
                    source={require('../assets/s4.jpg')}
                    style={styles.sliderImage}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.slide}>
                <Image
                    source={require('../assets/s5.jpg')}
                    style={styles.sliderImage}
                    resizeMode="cover"
                />
            </View>

          </Swiper>

         

          <View style={{marginLeft:45,flexDirection:'row',marginTop: 5}}>
                  <Text style={styles.text_footer} >Fashion</Text>
            
                <View style={{marginLeft:100, flexDirection:'column'}}>
                        <Text style={styles.text_footer} >Grosary</Text>
                </View>
          </View>

             
              <View style={{flexDirection:'row',marginTop: 5}}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('FashionScreen')}
                    >
                            <Image
                                source={require('../assets/fashion.jpg')}
                                style={styles.LeftImageButton}  
                            />
                    </TouchableOpacity>

                  <View style={{marginLeft:15, flexDirection:'column'}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('GrossaryScreen')}
                    >
                            <Image
                                source={require('../assets/grosary.jpg')}
                                style={styles.LeftImageButton}
                            />
                </TouchableOpacity>
                  </View>
                  
              </View>

              <View style={{marginLeft:40,flexDirection:'row',marginTop: 5}}>
                  <Text style={styles.text_footer} >Stationary</Text>
                <View style={{marginLeft:80, flexDirection:'column'}}>
                        <Text style={styles.text_footer} >Cosmetics</Text>
                </View>
          </View>
      
              <View style={{flexDirection:'row',marginTop: 5}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('StaionaryScreen')}
                    >
                            <Image
                                source={require('../assets/stationary.jpg')}
                                style={styles.LeftImageButton}
                            />
                    </TouchableOpacity>
                    <View style={{marginLeft:15, flexDirection:'column'}}>
                 <TouchableOpacity
                    onPress={() => navigation.navigate('CosmeticScreen')}
                 >
                            <Image
                                source={require('../assets/cosmetics.jpg')}
                                style={styles.LeftImageButton}
                            />
                </TouchableOpacity>
                    </View>
              </View>

                <View style={{marginLeft:45,flexDirection:'row',marginTop: 5}}>
                  <Text style={styles.text_footer} >Foods</Text>
                    <View style={{marginLeft:100, flexDirection:'column'}}>
                            <Text style={styles.text_footer} >Electronics</Text>
                    </View>
                </View>


              <View style={{flexDirection:'row',marginTop: 5}}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('FoodScreen')}
                >
                            <Image
                                source={require('../assets/food.jpg')}
                                style={styles.LeftImageButton}
                            />
                </TouchableOpacity>
                    <View style={{marginLeft:15, flexDirection:'column'}}>
                    <TouchableOpacity
                       onPress={() => navigation.navigate('ElectronicScreen')}
                    >
                        <Image
                            source={require('../assets/electronic.jpg')}
                            style={styles.LeftImageButton}
                        />
                    </TouchableOpacity>
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
      borderRadius:8,
      
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
    },text_footer: {
        color: '#05375a',
        fontSize: 18,
        fontWeight: 'bold'
    },
  });