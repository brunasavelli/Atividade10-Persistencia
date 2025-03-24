import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";

const TextoExibido = ({ titulo, texto, cor }) => (
    <Text style={[StyleSheet.texto, { color: cor }]}>
        {titulo}: {texto || "Nenhum texto salvo"}
    </Text>
);

export default function HomeScreen({ navigation }) {
    const [texto, setTexto] = useState("");
    const [textoPersistido, setTextoPersistido] = useState("");
    const [textoSalvoSemPersistencia, setTextoSalvoSemPersistencia] = useState("");

    useEffect(() => {
        const carregarTextoPersistido = async () => {
            const textoSalvo = await SecureStore.getItemAsync("meuTexto");
            if (textoSalvo) {
                setTextoPersistido(textoSalvo);
            }
        };
        carregarTextoPersistido();
    }, []);

    const salvarTexto = async () => {
        if (!texto.trim()) {
            alert("Digite um texto para salvar");
            return;
        }
        await SecureStore.setItemAsync("meuTexto", texto);
        setTextoPersistido(texto);
        setTextoSalvoSemPersistencia(texto);
        setTexto("");
    };

    const limparTexto = async () => {
        await SecureStore.deleteItemAsync("meuTexto");
        setTextoPersistido("");
        setTextoSalvoSemPersistencia("");
        alert("Texto apagado da persistencia");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Persistência e Navegação</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite algo"
                value={texto}
                onChangeText={setTexto}
            />

            <TextoExibido titulo="Sem persistência" texto={textoSalvoSemPersistencia} cor="red" />
            <TextoExibido titulo="Texto persistido" texto={textoPersistido} cor="green" />

            <TouchableOpacity style={styles.botao} onPress={salvarTexto}>
                <Text style={styles.textoBotao}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={limparTexto}>
                <Text style={styles.textoBotao}>Limpar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate("Detalhes", {textoNaoPersistido: textoSalvoSemPersistencia })}>
                    <Text style={styles.textoBotao}>Detalhes</Text>
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 100,
        paddingHorizontal: 25,
        gap: 20,
        backgroundColor: "#D3BBDD",
    },
    titulo: {
        fontSize: 32,
        fontWeight: "800",
        textAlign: "center",
        color: "#613659",
    },
    input: {
        borderWidth: 1,
        borderColor: "#BC96CA",
        borderRadius: 8,
        padding: 10,
        fontSize: 20,
    },
    texto: {
        fontSize: 20,
        textAlign: "center",
    },
    botao: {
        backgroundColor: "#BC96CA",
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
    },
    textoBotao: {
        color: "white",
        fontSize: 20,
    },
});