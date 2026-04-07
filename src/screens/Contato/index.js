import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function Contato() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="auto" />
            <ScrollView contentContainerStyle={styles.container}>

                <Text style={styles.titulo}>Contato</Text>
                <Text style={styles.subtitulo}>Fale com a Nexo</Text>

                <View style={styles.card}>

                    <View style={styles.item}>
                        <FontAwesome name="phone" size={24} color="#0e7b46" />
                        <View style={styles.textContainer}>
                            <Text style={styles.label}>Telefone</Text>
                            <Text style={styles.valor}>(11) 4002-8922</Text>
                        </View>
                    </View>

                    <View style={styles.item}>
                        <FontAwesome name="whatsapp" size={24} color="#25D366" />
                        <View style={styles.textContainer}>
                            <Text style={styles.label}>WhatsApp</Text>
                            <Text style={styles.valor}>(11) 99999-9999</Text>
                        </View>
                    </View>

                    <View style={styles.item}>
                        <MaterialIcons name="location-on" size={24} color="#0e7b46" />
                        <View style={styles.textContainer}>
                            <Text style={styles.label}>Endereço</Text>
                            <Text style={styles.valor}>
                                Av. Paulista, 1000{'\n'}
                                São Paulo - SP
                            </Text>
                        </View>
                    </View>

                    <View style={styles.item}>
                        <Ionicons name="business" size={24} color="#0e7b46" />
                        <View style={styles.textContainer}>
                            <Text style={styles.label}>CNPJ</Text>
                            <Text style={styles.valor}>12.345.678/0001-90</Text>
                        </View>
                    </View>

                    <View style={styles.item}>
                        <MaterialIcons name="access-time" size={24} color="#0e7b46" />
                        <View style={styles.textContainer}>
                            <Text style={styles.label}>Horário</Text>
                            <Text style={styles.valor}>
                                Seg a Sex: 09h às 18h{'\n'}
                                Sábado: 09h às 13h
                            </Text>
                        </View>
                    </View>

                </View>

                <Text style={styles.rodape}>
                    Conectando você à tecnologia
                </Text>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#edf9ff',
    },
    container: {
        padding: 20,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0e7b46',
    },
    subtitulo: {
        fontSize: 16,
        color: '#666',
        marginBottom: 25,
    },
    card: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 10,
        elevation: 3,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    textContainer: {
        marginLeft: 15,
        flex: 1,
    },
    label: {
        fontSize: 13,
        color: '#888',
    },
    valor: {
        fontSize: 15,
        color: '#000',
        marginTop: 2,
    },
    rodape: {
        marginTop: 20,
        fontSize: 14,
        color: '#0e7b46',
        textAlign: 'center',
    },
});