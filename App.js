import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


function App() {
  return (
    <View style={styles.container}>

      <View style={{ alignItems: 'center' }}>
        <Image
          source={require('./assets/user_10813387.png')}
          style={{ width: 100, height: 100, margin: 50 }}
        />
      </View>
      <View>
        <Input
          style={{ width: 250 }}
          placeholder='    Insira seu Usuário'
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
            />
          }
        />

        <View>
          <Input placeholder="Password" secureTextEntry={true} />
        </View>
      </View>

      <View style={{ margin: 20 }}>
        <Button
          style={styleButton.botao}
          title="Logar"
        />
        <Button
          style={styleButton.botao}
          title="Cadastre-se"
        />



      </View>
    </View>
  );
}
//export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const styleButton = StyleSheet.create({
  botao: {
    margin: 20,
    width: 200,

  },
});


// cadastro

function Cadastro() {
  return (
    <View style={styless.container}>


      <View style={{ flex: 1 }}>
        <Text h1
          style={{
            marginTop: 50,
            textAlign: "center",
            fontSize: 30
          }}>
          CADASTRO
        </Text>
      </View>

      <View style={{ flex: 2 }}>
        <View style={{ margin: 20, width: 300 }}>
          <Input
            label='Nome'
            placeholder='    Insira seu Usuário'
          />
        </View>

        <View style={{ margin: 20, width: 300 }}>
          <Input
            //style={{ width: 250 }}
            label='Email'
            placeholder='    Insira seu E-mail'
          />
        </View>
        <View style={{ margin: 20, width: 300 }}>
          <Input
            //style={{ width: 250 }}
            label='Senha'
            placeholder='    Insira sua Senha' />
        </View>
      </View>

      <View style={{ flex: 2 }}>
        <Button
          style={styleButtons.botao}
          title="Logar"
        />
        <Button
          style={styleButtons.botao}
          title="Cadastre-se"
        />



      </View>
    </View>
  );
}
export default Cadastro;

const styless = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
});
const styleButtons = StyleSheet.create({
  botao: {
    margin: 20,
    width: 200,



  },
});