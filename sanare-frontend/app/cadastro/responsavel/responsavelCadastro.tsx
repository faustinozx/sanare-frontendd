import Colors from '@/constants/Colors';
import Fonts from '@/constants/Fonts';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';

export default function ResponsavelCadastro({ onEscolha }: { onEscolha: (resposta: "sim" | "nao") => void }) {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync(Fonts);
            setFontsLoaded(true);
        }

        loadFonts();
    }, []);

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.textView}>
                    <Text style={styles.text}>Deseja usar o Sanare para monitorar a sua saúde também?</Text>
                </View>

                <View style={styles.viewBtn}>
                    <Pressable
                        onPress={() => onEscolha("sim")}
                        style={({ pressed }) => [
                            styles.btn,
                            pressed && styles.botaoPressionado
                        ]}
                    >
                        <Text style={styles.textBtn}>Sim, vamos lá</Text>
                    </Pressable>

                    <Pressable
                        onPress={() => onEscolha("nao")}
                        style={({ pressed }) => [
                            styles.btn,
                            pressed && styles.botaoPressionado
                        ]}
                    >
                        <Text style={styles.textBtn}>Não, obrigado</Text>
                    </Pressable>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: '32%'
    },
    textView: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: '20%',
        width: '85%'
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
    },
    viewBtn: {
        gap: 30,
        marginBottom: '20%',
    },
    btn: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 5,
        borderColor: Colors.light.gray,
        backgroundColor: Colors.light.background,
        width: 330,
        borderRadius: 25,
        height: 70,
    },
    botaoPressionado: {
        borderColor: Colors.light.bluePrimaryOpacity,
    },
    textBtn: {
        fontFamily: 'Poppins-Regular',
        fontSize: 17,
    }
})