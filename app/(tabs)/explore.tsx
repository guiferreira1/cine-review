import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { useRouter } from "expo-router";  

export default function TabTwoScreen() {
  const router = useRouter();

  const principaisTitulos = [
    require("@/assets/images/movie-homecoming.webp"),
    require("@/assets/images/movie-us.jpg"),
  ];

  const maisComentados = [
    require("@/assets/images/movie-johnwick2.jpg"),
    require("@/assets/images/movie-avatar.jpg"),
  ];

  const recomendados = [
    require("@/assets/images/movie-dark.jpg"),
    require("@/assets/images/movie-breakingbad.jpg"),
  ];

  return (
    <GestureHandlerRootView>
        <ThemedView style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.menuButton}>
              <Text style={styles.menuIcon}>☰</Text>
            </View>
            <View style={styles.searchContainer}>
              <Text style={styles.searchText}>Pesquisar...</Text>
            </View>
          </View>

          {/* Conteúdo principal */}
          <ScrollView contentContainerStyle={styles.contentContainer}>
            {/* Principais Títulos */}
            <Section title="Principais Títulos">
              {principaisTitulos.map((image, index) => (
                <MovieCard key={index} imageUrl={image} />
              ))}
            </Section>

            {/* Mais Comentados */}
            <Section title="Mais Comentados">
              {maisComentados.map((image, index) => (
                <MovieCard key={index} imageUrl={image} />
              ))}
            </Section>

            {/* Recomendados */}
            <Section title="Recomendados">
              {recomendados.map((image, index) => (
                <MovieCard key={index} imageUrl={image} />
              ))}
            </Section>
          </ScrollView>
        </ThemedView>
    </GestureHandlerRootView>
  );
}

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <ThemedText style={styles.sectionTitle}>{title}</ThemedText>
      <View style={styles.moviesContainer}>{children}</View>
    </View>
  );
}

function MovieCard({ imageUrl }) {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={imageUrl} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3F5C",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFD700",
    padding: 10,
  },
  menuButton: {
    padding: 10,
  },
  menuIcon: {
    fontSize: 20,
    color: "#25283D",
  },
  searchContainer: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: "#25283D",
    borderRadius: 5,
    padding: 10,
  },
  searchText: {
    color: "#FFFFFF",
  },
  contentContainer: {
    padding: 15,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Century Gothic",
    marginBottom: 10,
  },
  moviesContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    flexWrap: "wrap",
    gap: 10,
  },
  card: {
    width: 185,
    height: 250,
    backgroundColor: "#25283D",
    borderRadius: 10,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
});
