import { StyleSheet } from "react-native";

const styles = StyleSheet.create({    mainTxt: {
        paddingTop: 50,
        color: 'green',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    slogan: {  
        color: 'orange',
        fontSize: 20,
        textAlign: 'center',
    },
    mogHubLogo: {
        width: 350,
        height: 350,
        paddingTop: 25,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    inputFlex: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 25,
    },
    UserInputTxt: {
        borderBottomWidth: 1,
    },
    enterTxt: {
        fontWeight: 'bold',
    },
    radioContainer: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
    },
    radioButton: {
        flexDirection: 'column',    
        alignItems: 'center',
    },        
    radioLabel: {
        fontSize: 15,
        marginLeft: 5,
        color: 'black',
    },
    radioGroup: {
        flexDirection: 'column',   
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#e6f7ff',
        padding: 15,
        elevation: 5,
        shadowColor: '#404040',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#7ad1f3',
    },
    inputPetContainer: {
        marginVertical: 6,
    },
    inputPetTxt: {
        fontSize: 15,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    petContainer: {
        flex: 5,
        marginTop: 20,
    },

    petTxt: {
        fontSize: 15,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    modalBackdrop: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
    },
    modalContent: {
        width: '100%',
        maxWidth: 360,
        padding: 20,
        borderRadius: 12,
        backgroundColor: 'white',
    },
    modalTitle: {
        marginBottom: 12,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalOption: {
        marginVertical: 4,
        padding: 12,
        borderWidth: 1,
        borderColor: '#7ad1f3',
        borderRadius: 8,
        alignItems: 'center',
    },
    selectedModalOption: {
        backgroundColor: '#e6f7ff',
        borderColor: 'orange',
    },
    selectedRadioLabel: {
        color: 'orange',
        fontWeight: 'bold',
    },
    modalValidation: {
        marginTop: 8,
        color: '#b00020',
        textAlign: 'center',
    },
    modalActions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 16,
    },
});

export default styles;

        