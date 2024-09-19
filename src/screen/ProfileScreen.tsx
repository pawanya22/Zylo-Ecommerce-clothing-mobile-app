import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.myProfile}>My Profile</Text>
      <Image
        style={styles.profileImage}
        source={{ uri: 'https://via.placeholder.com/64x62' }}
      />
      <View style={styles.headerTextContainer}>
        <Text style={styles.nameText}>Name</Text>
        <Text style={styles.welcomeText}>Welcome to Zylo Fashion Store</Text>
      </View>

      {/* Profile sections */}
      <View style={styles.section}>
        <Text style={styles.sectionText}>Edit Profile</Text>
        <Text style={styles.sectionText}>F&Q</Text>
      </View>
      
      

      
      
      {/* Line separators */}
      <View style={styles.line} />
      <View style={styles.line} />
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 812,
    backgroundColor: 'white',
    position: 'relative',
    padding: 20,
  },
  myProfile: {
    position: 'absolute',
    top: 18,
    left: 17,
    fontSize: 16,
    fontWeight: '700',
    color: '#090F47',
  },
  profileImage: {
    width: 63.59,
    height: 62,
    position: 'absolute',
    top: 73,
    left: 22,
    borderRadius: 100,
    borderColor: '#CFA25D',
    borderWidth: 2,
  },
  headerTextContainer: {
    position: 'absolute',
    top: 78,
    left: 95,
  },
  nameText: {
    fontSize: 20,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.9)',
  },
  welcomeText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.20)',
    marginTop: 6,
  },
  section: {
    width: 327,
    height: 60,
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 200,
    paddingHorizontal: 30,
    left: 0,

  },
  sectionText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'rgba(9, 28, 63, 0.75)',
  },
  arrowRight: {
    width: 16,
    height: 16,
    borderColor: '#091C3F',
    borderWidth: 1,
  },
  line: {
    position: 'absolute',
    width: 309,
    height: 1,
    backgroundColor: 'rgba(9, 28, 63, 0.08)',
    left: 59,
  },
  line1: {
    top: 207,
  },
  line2: {
    top: 256,
  },
  line3: {
    top: 306,
  },
});

export default ProfileScreen;
