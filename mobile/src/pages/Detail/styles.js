import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 27,
    },
    incident:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16
    },
    incidentsProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24,
    },
    incidentsValue:{
        marginTop: 8,
        fontSize: 15,
        color: '#737380'
    },
    contactBox:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16
    },
    heroTitle:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30
    },
    heroDescription:{
        fontSize: 15,
        color: '#737380',
        marginTop: 16
    },
    actions:{
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    action:{
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionText:{
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold'
    }
});