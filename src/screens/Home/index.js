import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
    return (
    <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled'>
            <StatusBar style="auto" />
            <View style={styles.alinharEmLinha}>
                <Image source={require('../../../assets/NexoLogoTransparente (1).png')}
                    resizeMode="contain"
                    style={styles.logo}
                />
                <Text style={styles.descricao}>Nexo é um e-commerce especializado em componentes eletrônicos para computadores, criado para atender desde usuários iniciantes até entusiastas e profissionais de tecnologia. A proposta da empresa é conectar pessoas às melhores soluções em hardware, oferecendo produtos de qualidade, preços competitivos e uma experiência de compra simples e confiável.

                Com um catálogo que inclui placas de vídeo, processadores, memórias, armazenamentos e periféricos, a Nexo busca ser referência no mercado ao unir variedade, agilidade na entrega e suporte eficiente. A plataforma é pensada para facilitar a escolha dos produtos, com informações claras e organização intuitiva, ajudando o cliente a montar, atualizar ou otimizar seu setup com segurança.

                Mais do que vender peças, a Nexo se posiciona como uma ponte entre tecnologia e desempenho, acompanhando as tendências do setor e garantindo acesso às inovações que impulsionam o mundo digital.</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sobre')}>
                        <Text style={{ color: 'white' }}>Acessar página Sobre</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#edf9ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0e7b46',
        marginTop: 25,
        borderRadius: 10,
        height: 48,
        width: '95%'
    },
    alinharEmLinha: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10
    },
    logo: {
        alignItems: 'center',
    }
})