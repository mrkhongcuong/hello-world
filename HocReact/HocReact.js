// import React from 'react';
// import {Text, View, StyleSheet} from 'react-native';

// const YourApp = () => {
//     return(
//         <View style={{flex: 1,justifyContent:'center', alignItems: 'center'}}> 
//             <Text>
//                 Try editing me!
//             </Text>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     }
// }) 


// -------------------- PlantAppExploration ------------------
// cmd
// react-native init PlantAppExploration
// ls
// cd PlantAppExploration
// ls
// cd ios
// pod install
// cd ..
// react-native run-ios

// ------
// tạo thư mục assets : có thư mục fonts; icons; images
// copy tất cả fonts, icons, images của app vào đó

// thư mục ngoài:
// tạo file react-native.config.js
module.exports= {
    project: {
        ios: {},
        android: {}
    },
    assets: ["./assets/fonts"]
};

// cmd chay : react-native link

//  thư mục ngoài tạo thư mục constants có file: icons.js; images.js; index.js; theme.js





