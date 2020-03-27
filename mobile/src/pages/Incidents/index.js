import React, {useEffect, useState} from 'react';
import { View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'
//import AntDesign from 'react-native-vector-icons/AntDesign'
import api from '../../services/api'
import styles from './styles';

import logoImg from '../../assets/logo.png';
export default function Incidents() {
    const navigation = useNavigation();
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [pages, setPages] = useState(1);
    const [loading, setLoading] = useState(false);

    function navigateToDetail(incident){
      navigation.navigate('Detail',{incident});
    }
    async function loadIncidents(){
      if(loading){
        return;
      }
      if(total > 0 && incidents.length == total){
        return;
      }
      setLoading(true);

      const response = await api.get(`incidents?page=${pages}`);

      setIncidents([...incidents, ...response.data]);
      setTotal(response.headers['x-total-count']);
      setPages(pages + 1);
      setLoading(false);
    }
    useEffect(()=>{
      loadIncidents();
    },[])    
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg}/>
          <Text style={styles.headerText}>
            Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
          </Text>
        </View>

        <Text style={styles.title}>Bem-Vindo!</Text>
        <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

        <FlatList 
          style={styles.incidentsList}
          data={incidents}
          keyExtractor={incident => String(incident.id)}
          onEndReached={loadIncidents}
          onEndReachedThreshold={0.2}
          showsVerticalScrollIndicator={true}
          renderItem= {({item: incident})=> (
              <View style={styles.incidents}> 
                <Text style={styles.incidentsProperty}>ONG {incident.id}</Text>
                <Text style={styles.incidentsValue}>{incident.nome}</Text>
                
                <Text style={styles.incidentsProperty}>Caso</Text>
                <Text style={styles.incidentsValue}>{incident.title}</Text>
                
                <Text style={styles.incidentsProperty}>Valor</Text>
                <Text style={styles.incidentsValue}>{Intl.NumberFormat('pt-br', 
                  {style: 'currency', currency: 'BRL'}).format(incident.value)}
                
                </Text>

                <TouchableOpacity 
                  style={styles.detailsButton} 
                  onPress={()=>navigateToDetail(incident)}
                >
                  <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>  
                 {/**  <AntDesign name="arrowright" size={16} color="#e02041"/> */}
                </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
}
