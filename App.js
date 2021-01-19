/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './assets/main-style'
import people from './data/Json'

export default function App() {
   const [people, setpeople] = useState([
      {
         "key": "1",
         "userId": "krish",
         "jobTitle": "Developer",
         "firstName": "Krish",
         "lastName": "Lee",
         "employeeCode": "E1",
         "region": "CA",
         "phoneNumber": "123456",
         "emailAddress": "krish.lee@learningcontainer.com"
      },
      {
         "key": "2",
         "userId": "david",
         "jobTitle": "Developer",
         "firstName": "Devid",
         "lastName": "Rome",
         "employeeCode": "E2",
         "region": "CA",
         "phoneNumber": "1111111",
         "emailAddress": "devid.rome@learningcontainer.com"
      },
      {
         "key": "3",
         "userId": "tin",
         "jobTitle": "Program Directory",
         "firstName": "tin",
         "lastName": "jonson",
         "employeeCode": "E3",
         "region": "CA",
         "phoneNumber": "2222222",
         "emailAddress": "tin.jonson@learningcontainer.com"
      }
   ])

   const pressHandler = (id) => {
      alert("User Id : " + id)
   }

   return (
      <View >
         <FlatList
            data={people}
            keyExtractor={({ item }) => item.key}
            renderItem={({ item }) => (
               <TouchableOpacity onPress={() => pressHandler(item.key)}>
                  <View style={styles.lists}>
                     <View style={styles.img}>
                        <Text>User Image</Text>
                     </View>
                     <View styles={styles.listdata}>
                        <Text>User Id : {item.userId}</Text>
                        <Text style={{ marginTop: 10, fontSize: 15, fontWeight: 'bold' }}>Name : {item.firstName + item.lastName}</Text>
                     </View>
                  </View>
               </TouchableOpacity>
            )
            }
            keyExtractor={item => item.key}
         />
      </View >
   )
}
