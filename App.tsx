import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';

import { Images } from './img/Images';

var md5 = require('md5');

export default function App() {
  return (
    <View style={styles.backGround}>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>
            随机密码生成器
          </Text>
          <TouchableOpacity>
            <Image style={styles.copyrightIcon} source={Images.copyright} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backGround: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#483434'
  },
  mainContainer: {
    width: '100%',
    maxWidth: 480,
    height: '100%',
    backgroundColor: '#6b4f4f'
  },
  headerContainer: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#6b4f4f',
    shadowColor: '#212121',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  header: {
    fontSize: 18,
    color: '#eed6c4'
  },
  copyrightIcon: {
    width: 30,
    height: 30,
    tintColor: '#eed6c4'
  }
});
