import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const user = {
  name: "John Doe",
  userName: "@johndoe",
  avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  bio: "Lover of Coffe ,code , and travel. Exploring the world one line of code at a time.",
  stats: {
    posts: 120,
    follower: "1.2M",
    following: 350,
  },
  postGrids: Array.from(
    { length: 15 },
    (_, i) => `https://picsum.photos/seed/profile${i + 1}/200/200`
  ),
};

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profileHeader}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.userName}>{user.userName}</Text>
          <Text style={styles.bio}>{user.bio}</Text>
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.editProfileButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statsItem}>
            <Text style={styles.statsNumber}>{user.stats.posts}</Text>
            <Text style={styles.statsLabel}>Posts</Text>
          </View>
          <View style={styles.statsItem}>
            <Text style={styles.statsNumber}>{user.stats.follower}</Text>
            <Text style={styles.statsLabel}>Followers</Text>
          </View>
          <View style={styles.statsItem}>
            <Text style={styles.statsNumber}>{user.stats.following}</Text>
            <Text style={styles.statsLabel}>Following</Text>
          </View>
        </View>

        <View style={styles.gridContainer}>
          {user.postGrids.map((uri, index) => (
            <View key={index} style={styles.gridImageContainer}>
              <Image source={{ uri }} style={styles.gridImage} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  bio: {
    fontSize: 14,
    marginBottom: 15,
    paddingHorizontal: 30,
    textAlign: "center",
    color: "#333000",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  editProfileButton: {
    backgroundColor: "#ff6347",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  editProfileButtonText: {
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 14,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  gridImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  gridImageContainer: {
    width: Dimensions.get('window').width/3,
    height: Dimensions.get('window').width/3,
    padding: 1
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 2,
  },
  profileHeader: {
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },
  statsItem: {
    alignItems: "center",
  },
  statsLabel: {
    fontSize: 12,
    color: "gray",
  },
  statsNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  userName: {
    fontSize: 16,
    color: "gray",
    marginBottom: 10,
  },
});
