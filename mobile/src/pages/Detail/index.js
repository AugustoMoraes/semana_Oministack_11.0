import React from 'react';
import { View, Image, TouchableOpacity,Text, Linking} from 'react-native';
//import {AntDesign} from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import logoImg from '../../assets/logo.png';
import {useNavigation, useRoute} from '@react-navigation/native';
export default function Detail() {
    
    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;
    const text = "Ola APAD, estou contribuindo!";
    const phone = '55091998189662';
    
    function navigateBack(){
      navigation.goBack();
    }
    function sendMail(){
      Linking.openURL('mailto:guto98miri@gmail.com?subject=Assunto do Email&body=Mensagem que será enviada');
    }
    function sendWhatsapp(){
      Linking.openURL(`whatsapp://send?text=${text}&phone=${phone}`)
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg}/>
          <TouchableOpacity onPress={navigateBack}>
            <Text> voltar </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.incident}>
          <Text style={[styles.incidentsProperty, {marginTop: 0}]}>ONG</Text>
          <Text style={styles.incidentsValue}>{incident.nome} de {incident.city}/{incident.uf}</Text>
                
          <Text style={styles.incidentsProperty}>Caso</Text>
          <Text style={styles.incidentsValue}>{incident.title}</Text>
               
          <Text style={styles.incidentsProperty}>Valor</Text>
          <Text style={styles.incidentsValue}>{Intl.NumberFormat('pt-br', 
                  {style: 'currency', currency: 'BRL'}).format(incident.value)}
          </Text>
        </View>

        <View style={styles.contactBox}>
          <Text style={styles.heroTitle}>Salve o dia!</Text> 
          <Text style={styles.heroTitle}>Seja o herói desse caso.</Text> 

          <Text style={styles.heroDescription}>Entre em contato:</Text>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
              <Text style={styles.actionText}>WhatsApp</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.action} onPress={sendMail}>
              <Text style={styles.actionText}>E-mail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
}
