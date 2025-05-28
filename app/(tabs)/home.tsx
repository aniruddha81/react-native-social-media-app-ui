import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const posts = [
  {
    id: "1",
    userName: "User1",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    image: "https://picsum.photos/seed/picsum1/400/400",
    caption: "Beautiful sunset!",
  },
  {
    id: "2",
    userName: "User2",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    image: "https://picsum.photos/seed/picsum2/400/400",
    caption: "Enjoying a day at the beach.",
  },
  {
    id: "3",
    userName: "User3",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    image: "https://picsum.photos/seed/picsum3/400/400",
    caption: "Hiking adventures!",
  },
  {
    id: "4",
    userName: "User4",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    image: "https://picsum.photos/seed/picsum4/400/400",
    caption: "Delicious homemade food.",
  },
  {
    id: "5",
    userName: "User5",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    image: "https://picsum.photos/seed/picsum5/400/400",
    caption: "City lights at night.",
  },
];

const Home = () => {
  const isDark = useColorScheme();
  return (
    <SafeAreaView style={isDark ? styles.darkContainer : styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {posts.map((post) => (
          <View key={post.id} style={styles.postContainer}>
            <View style={styles.postHeader}>
              <Image source={{ uri: post.avatar }} style={styles.avatar} />
              <Text style={styles.userName}>{post.userName}</Text>
            </View>
            <Image source={{ uri: post.image }} style={styles.postImage} />
            <View style={styles.postFooter}>
              <Text style={styles.caption}>{post.caption}</Text>
            </View>
            <View style={styles.reactRow}>
              <TouchableOpacity style={styles.iconButton}>
                <Text style={styles.iconText}>❤️</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Text style={styles.iconText}>💬</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Text style={styles.iconText}>🔗</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5", // A soft grey background for overall app
  },
  darkContainer: {
    flex: 1,
    backgroundColor: "#282a2d", // A soft grey background for overall app
  },
  postContainer: {
    backgroundColor: "#ffffff", // White background for each post
    borderRadius: 10,
    marginVertical: 8, // Space between posts
    marginHorizontal: 12, // Space from screen edges
    shadowColor: "#000", // Subtle shadow for depth
    shadowOffset: {
      width: 100,
      height: 100,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 100,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12, // Consistent padding
    borderBottomWidth: 0.5, // Lighter separator
    borderBottomColor: "#e0e0e0",
  },
  avatar: {
    width: 48, // Slightly larger avatar
    height: 48,
    borderRadius: 24, // Perfect circle
    marginRight: 12, // More space
    borderWidth: 1, // Subtle border
    borderColor: "#e0e0e0",
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16, // Slightly larger font
    color: "#333333", // Darker text for readability
  },
  postImage: {
    width: "100%",
    height: 300, // Adjusted height for better aspect ratio
    resizeMode: "cover", // Ensure image covers the area
    // No border radius here to make it rectangular,
    // as the container already has rounded corners.
  },
  postFooter: {
    padding: 12, // Consistent padding
  },
  caption: {
    fontSize: 15, // Slightly smaller and more natural
    color: "#555555", // Softer text color
    lineHeight: 22, // Better readability for longer captions
  },
  reactRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 0.5, // Separator for reaction row
    borderTopColor: "#e0e0e0",
  },
  iconButton: {
    padding: 8, // Add padding to make touchable area larger
  },
  iconText: {
    fontSize: 22, // Slightly smaller icons for better balance
  },
});
