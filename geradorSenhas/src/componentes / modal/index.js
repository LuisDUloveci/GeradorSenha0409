import {View, Text, StyleSheet, TouchableOpacity, Pressable} from "react-native";

export function ModalPassword({senha, handleClose}){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>

                <Pressable style={styles.innerPassword}>
                    <Text style={styles.text}>
                    {senha}
                    </Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]}>
                        <Text style={styles.buttonSaveText}>Salvar senha</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItens: 'center',
        justifyContent: 'center'
    },
    content:{
        backgroundColor: "#FFF",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 24,
    },
    innerPassword:{
        backgroundColor: "#e0e0e0",
        width: "90%",
        padding: 14,
        boderRadius: 8,
    },
    text:{
        color: "#FFF",
        textAling: "center"
    },
    buttonArea:{
        flexDirection: "row",
        width: "90%",
        marginTop: 8,
        alingItens: "center",
        justifyContent: "space-between"
    },
    button:{
        flex: 1,
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14,
        padding: 8,
    },
    buttonSave:{
        backgroundColor: "#392DE9",
        borderRadius: 8,
    },
    buttonSaveText:{
        color: "#FFF",
        fontWeight: 'bold'
    }

})