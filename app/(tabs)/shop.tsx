import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const products = [
  {
    id: "1",
    name: "Cool T-shirt",
    price: "$19.99",
    image: "https://picsum.photos/seed/shop1/200/200",
  },
  {
    id: "2",
    name: "Stylish Jeans",
    price: "$39.99",
    image: "https://picsum.photos/seed/shop2/200/200",
  },
  {
    id: "3",
    name: "Sneakers",
    price: "$59.99",
    image: "https://picsum.photos/seed/shop3/200/200",
  },
  {
    id: "4",
    name: "Baseball Cap",
    price: "$14.99",
    image: "https://picsum.photos/seed/shop4/200/200",
  },
  {
    id: "5",
    name: "Hoodie",
    price: "$29.99",
    image: "https://picsum.photos/seed/shop5/200/200",
  },
  {
    id: "6",
    name: "Sunglasses",
    price: "$24.99",
    image: "https://picsum.photos/seed/shop6/200/200",
  },
];

const Shop = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.header}>WelCome to the Shop!</Text>
        <View style={styles.gridContainer}>
          {products.map((product) => (
            <TouchableOpacity key={product.id} style={styles.productCard}>
              <Image
                source={{ uri: product.image }}
                style={styles.productImage}
              />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
  scrollViewContent: {
    paddingHorizontal: 10,
    paddingBottom: 20
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333333'
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  productCard: {
    width: "48%",
    backgroundColor: '#fff0f0',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center'
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 4,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 5,
    color: '#444444'
  },
  productPrice: {
    fontSize: 14,
    color: '#FF6347',
    fontWeight: 'bold'
  },
});
