import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 20
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText:{
        fontSize: 15,
        color: '#737380'
    },
    headerTextBold:{
        fontWeight: 'bold',
    },
    title:{
        fontSize: 30,
        marginBottom: 16,
        marginTop: 30,
        color: '#13131a',
        fontWeight: 'bold',
    },
    description:{
        fontWeight: 'bold',
        lineHeight: 24,
        color: '#727280'
    },
    incidentsList:{
        marginTop: 32
    },
    incidents:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16
    },
    incidentsProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },
    incidentsValue:{
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },
    detailsButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detailsButtonText:{
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    }
});