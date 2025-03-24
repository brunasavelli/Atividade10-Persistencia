import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as SecureStore from "expo-secure-store";

export default function PerfilScreen({ route }) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Bruna Savelli</Text>
            <Image source={require("../public/foto-perfil.png")} style={styles.imagem} />
            <Text style={styles.texto}>
                Meu nome é Bruna Nascimento Savelli e sou estudante de desenvolvimento de sistemas na escola SENAI - Valinhos.
            </Text>
            <View style={styles.icons}>
                <Image source={require("../public/html.png")} style={styles.icon} />
                <Image source={require("../public/css.png")} style={styles.icon} />
                <Image source={require("../public/javascript.png")} style={styles.icon} />
                <Image source={require("../public/vscode.png")} style={styles.icon} />
                <Image source={require("../public/github.png")} style={styles.icon} />
            </View>
            <View style={styles.icons}>
            <Image source={require("../public/node.js.png")} style={styles.icon} />
                <Image source={require("../public/react.js.png")} style={styles.icon} />
                <Image source={require("../public/figma.png")} style={styles.icon} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 100,
        paddingHorizontal: 25,
        gap: 20,
        backgroundColor: "#D3BBDD",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    titulo: {
        fontSize: 32,
        fontWeight: "800",
        textAlign: "center",
        color: "#613659",
    },
    texto: {
        fontSize: 20,
        textAlign: "center",
    },
    imagem: {
        width: 170,
        height: 170,
        borderRadius: 100,
    },
    icons: {
        display: "flex",
        flexDirection: "row",
    },
    icon: {
        width: 50,
        height: 50,
    }
});