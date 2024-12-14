
import { Image, StyleSheet, ImageBackground } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { GestureHandlerRootView, Pressable, TextInput } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
        <ImageBackground
          source={require('@/assets/images/background.png')}
          style={styles.background}
          resizeMode='cover'
        >
          <ThemedView style={styles.logoView}>
            <Image source={require('@/assets/images/logo-cine.png')} style={styles.logo} />
            <ThemedText style={styles.titleText}>CINE REVIEW</ThemedText>
          </ThemedView>

          <ThemedView style={styles.bemVindoView}>
            <ThemedText style={styles.bemVindo}>Bem Vindo!</ThemedText>
          </ThemedView>

          <ThemedView style={styles.inputView}>
            <TextInput style={styles.inputs} placeholder='Usuário'></TextInput>
            <TextInput style={styles.inputs} secureTextEntry={true} placeholder='Senha' ></TextInput>
          </ThemedView>

          <ThemedView style={styles.buttonsView}>
             <Pressable style={styles.pressableEntrar} onPress={() => alert('Deu certo!')}>
              <ThemedText
                style={{color: '#FFFFFF',
                        fontSize: 18,
                        textAlign: 'center',
                        fontFamily: 'Century Gothic'}}
              >Entrar</ThemedText>
            </Pressable>

            <ThemedText style={{color: '#FFFFFF', fontSize: 12}}>Não possui conta?</ThemedText>

            <Pressable style={styles.pressableCadastrar} onPress={() => alert('Deu certo!2')}>
            <ThemedText
                style={{color: '#FFFFFF',
                        fontSize: 18,
                        textAlign: 'center',
                        fontFamily: 'Century Gothic'}}
              >Cadastrar</ThemedText>
            </Pressable>
          </ThemedView>
        </ImageBackground>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
  },

  logoView: {
     width: "100%",
     marginTop: 120,
     backgroundColor: 'transparent',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center',
  },

  logo: {
    width: 150,
    height: 150,
  },

  titleText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textShadowColor: '#FFFFFF',
    textShadowRadius: 10,
    fontSize: 24,
    fontFamily: 'Century Gothic',
  },

  bemVindoView: {
    width: "100%",
    height: 'auto',
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  bemVindo: {
    fontFamily: 'Century Gothic',
    color: '#FFFFFF',
    fontSize: 35,
  },

  inputView: {
    width: 414,
    height: 150,
    marginTop: 50,
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  inputs: {
    width: 300,
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FFFFFF',
  },

  buttonsView: {
    width: 414,
    marginTop: 30,
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  pressableEntrar: {
    marginBottom: 10,
    backgroundColor: '#FFD700',
    textAlign: 'center',
    color: '#FFFFFF',
    width: 300,
    padding: 10,
    borderRadius: 7,
  },

  pressableCadastrar: {
    marginTop: 5,
    backgroundColor: '#FF4500',
    textAlign: 'center',
    color: '#FFFFFF',
    width: 300,
    padding: 10,
    borderRadius: 7,
  },
});
