import { View, StyleSheet } from 'react-native';
import Header from '@components/Header';
import Input from '@components/Input';
import Botao from '@components/Botao';
import Subtitulo from '@components/Subtitulo';
import LinkBtn from '@components/LinkBtn';
import { Link } from 'expo-router';
import { useColor } from '@temas/Temas';  // implementação de cores


function RecSenha(){
    return(
        <View>
            <Header titulo="Recuperação de senha" cor={cores.recSenhaHeader}/>
            <View style={styles.form}>
                <Subtitulo subtitulo="Insira seu e-mail para recuperar a senha!"/>
                <Input label="Email" placeholder={"Insira seu email:"}/>
                <LinkBtn title="Cadastre-se" href="/TelasIniciais/Cadastro"/>
                
            </View>
        </View>
    )
}

const cores = useColor()
const styles = StyleSheet.create({
    container: {
        backgroundColor: cores.bgPrimary,
        flex: 1
    },
    form:{
        backgroundColor: "#fff",
        height: '100%',
        paddingTop: 45,
        paddingHorizontal: 20,
        width: "100%",
    },
})
export default RecSenha
