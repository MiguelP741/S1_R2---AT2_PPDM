import { StatusBar } from 'expo-status-bar';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Alert,
    StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

export default function Produtos() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style="auto" />

            <ScrollView contentContainerStyle={styles.container}>

                <Text style={styles.titulo}>Produtos Nexo</Text>

                <View style={styles.card}>
                    <Text style={styles.nome}>Placa de Vídeo RTX 3060</Text>
                    <Text style={styles.preco}>R$ 1.899,90</Text>
                    <Text style={styles.pix}>PIX: R$ 1.799,90</Text>
                    <Text style={styles.parcela}>Percelado: Até 8x</Text>

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => Alert.alert('Boa!', 'Produto adicionado ao carrinho!')}
                    >
                        <FontAwesome name="shopping-cart" size={18} color="#fff" />
                        <Text style={styles.textoBotao}>Adicionar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <Text style={styles.nome}>Processador Ryzen 5 5600X</Text>
                    <Text style={styles.preco}>R$ 999,90</Text>
                    <Text style={styles.pix}>PIX: R$ 949,90</Text>
                    <Text style={styles.parcela}>Percelado: Até 6x</Text>

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => Alert.alert('Boa!', 'Produto adicionado ao carrinho!')}
                    >
                        <FontAwesome name="shopping-cart" size={18} color="#fff" />
                        <Text style={styles.textoBotao}>Adicionar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <Text style={styles.nome}>Memória RAM 16GB DDR4</Text>
                    <Text style={styles.preco}>R$ 289,90</Text>
                    <Text style={styles.pix}>PIX: R$ 259,90</Text>
                    <Text style={styles.parcela}>Percelado: Até 3x</Text>

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => Alert.alert('Boa!', 'Produto adicionado ao carrinho!')}
                    >
                        <FontAwesome name="shopping-cart" size={18} color="#fff" />
                        <Text style={styles.textoBotao}>Adicionar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <Text style={styles.nome}>SSD 1TB NVMe</Text>
                    <Text style={styles.preco}>R$ 459,90</Text>
                    <Text style={styles.pix}>PIX: R$ 429,90</Text>
                    <Text style={styles.parcela}>Percelado: Até 4x</Text>

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => Alert.alert('Boa!', 'Produto adicionado ao carrinho!')}
                    >
                        <FontAwesome name="shopping-cart" size={18} color="#fff" />
                        <Text style={styles.textoBotao}>Adicionar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <Text style={styles.nome}>Fonte 600w</Text>
                    <Text style={styles.preco}>R$ 329,90</Text>
                    <Text style={styles.pix}>PIX: R$ 299,90</Text>
                    <Text style={styles.parcela}>Percelado: Até 4x</Text>

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => Alert.alert('Boa!', 'Produto adicionado ao carrinho!')}
                    >
                        <FontAwesome name="shopping-cart" size={18} color="#fff" />
                        <Text style={styles.textoBotao}>Adicionar</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#edf9ff',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0e7b46',
        marginBottom: 20,
    },
    card: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        elevation: 3,
    },
    nome: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    preco: {
        fontSize: 15,
        marginTop: 5,
    },
    pix: {
        fontSize: 14,
        color: '#0e7b46',
        marginBottom: 5,
    },
    parcela: {
        fontSize: 14,
        color: '#757575',
        marginBottom: 10,
    },
    botao: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0e7b46',
        padding: 10,
        borderRadius: 8,
        gap: 8,
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
    },
});