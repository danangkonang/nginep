import React from 'react';
import {
   Image,
   Text,
   TouchableOpacity,
   View,
   ScrollView,
   TextInput
} from 'react-native';
import axios from 'axios'
import ImagePicker from 'react-native-image-picker';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
export default class Upload extends React.Component {
   state = {
      avatarSource: null,
      avatarSource2: null,
      avatarSource3: null,
      dataImage: null,
      dataImage2: null,
      dataImage3: null,
      nameKos: null,
      addresKos: null,
      longitude: null,
      latitude: null,
      direktore: null,
      phoneDirektore: null,
      long: null,
      width: null,
      price: null
   }
   constructor(props) {
      super(props)
      this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
      this.selectPhotoTapped2 = this.selectPhotoTapped2.bind(this);
      this.selectPhotoTapped3 = this.selectPhotoTapped3.bind(this);
   }
   selectPhotoTapped() {
      const options = {
         quality: 1.0,
         maxWidth: 500,
         maxHeight: 500,
         storageOptions: {
            skipBackup: true
         }
      }
      ImagePicker.showImagePicker(options, response => {
         console.log('Response = ', response)
         if (response.didCancel) {
            console.log('User cancelled photo picker')
         } else if (response.error) {
            console.log('ImagePicker Error: ', response.error)
         } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton)
         } else {
            let source = {uri: response.uri}

            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };

            this.setState({
               avatarSource: source,
               dataImage : response
            })
            
         }
      })
   }

   selectPhotoTapped2() {
      const options2 = {
         quality: 1.0,
         maxWidth: 500,
         maxHeight: 500,
         storageOptions: {
            skipBackup: true
         }
      }
      ImagePicker.showImagePicker(options2, response => {
         console.log('Response = ', response)
         if (response.didCancel) {
            console.log('User cancelled photo picker')
         } else if (response.error) {
            console.log('ImagePicker Error: ', response.error)
         } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton)
         } else {
            let source = {uri: response.uri}
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
            this.setState({
               avatarSource2: source,
               dataImage2 : response
            })
         }
      })
   }

   selectPhotoTapped3() {
      const options3 = {
         quality: 1.0,
         maxWidth: 500,
         maxHeight: 500,
         storageOptions: {
            skipBackup: true
         }
      }
      ImagePicker.showImagePicker(options3, response => {
         console.log('Response = ', response)
         if (response.didCancel) {
            console.log('User cancelled photo picker')
         } else if (response.error) {
            console.log('ImagePicker Error: ', response.error)
         } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton)
         } else {
            let source = {uri: response.uri}
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
            this.setState({
               avatarSource3: source,
               dataImage2 : response
            })
         }
      })
   }

   store=()=>{
      const formData = new FormData()
      formData.append('myImage', {
			uri : this.state.dataImage.uri,
			type : 'image/png',
			name : this.state.dataImage.fileName
      })
      if(this.state.dataImage2 !== null){
         formData.append('myImage', {
            uri : this.state.dataImage2.uri,
            type : 'image/png',
            name : this.state.dataImage2.fileName
         })
      }
      if(this.state.dataImage3 !== null){
         formData.append('myImage', {
            uri : this.state.dataImage3.uri,
            type : 'image/png',
            name : this.state.dataImage3.fileName
         })
      }
      formData.append('nameKos',this.state.nameKos)
      formData.append('addresKos',this.state.addresKos)
      formData.append('longitude',this.state.longitude)
      formData.append('latitude',this.state.latitude)
      formData.append('direktore',this.state.direktore)
      formData.append('phoneDirektore',this.state.phoneDirektore)
      formData.append('long',this.state.long)
      formData.append('width',this.state.width)
      formData.append('price',this.state.price)
      // formData.append('userId',this.state.price)
      const config = { 
         headers: { 
            'Content-Type': 'multipart/form-data',
            // "Authorization" : `Bearer ${this.state.token}` 
         } 
      }
      console.log(formData)

      axios.post("http://localhost:3000/input",formData,config)
      .then((response)=>{
         console.log(response)
      })
      .catch((error)=>{
         console.log(error)
      })

   }

  render() {
    return (
      <View style={{flex: 1,backgroundColor: '#F5FCFF',padding:15}}>
         <ScrollView>

         {/* select gambr */}
         <View style={{flexDirection:'row'}}>
               <View style={{width:100,height:100,margin:5}}>
                  <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                     <View style={{width:100,height:100,backgroundColor:'#ddd',alignItems:'center',justifyContent:'center'}}>
                        {this.state.avatarSource === null ? (
                        <Text style={{fontSize:18,color:'#515151'}}>Gambar 1</Text>
                        ) : (
                        <Image style={{width:100,height:100}} source={this.state.avatarSource} />
                        )}
                     </View>
                  </TouchableOpacity>
               </View>
               <View style={{width:100,height:100,margin:5}}>
                  <TouchableOpacity onPress={this.selectPhotoTapped2.bind(this)}>
                     <View style={{width:100,height:100,backgroundColor:'#ddd',alignItems:'center',justifyContent:'center'}}>
                        {this.state.avatarSource2 === null ? (
                        <Text style={{fontSize:18,color:'#515151'}}>Gambar 2</Text>
                        ) : (
                        <Image style={{width:100,height:100}} source={this.state.avatarSource2} />
                        )}
                     </View>
                  </TouchableOpacity>
               </View>
               <View style={{width:100,height:100,margin:5}}>
                  <TouchableOpacity onPress={this.selectPhotoTapped3.bind(this)}>
                     <View style={{width:100,height:100,backgroundColor:'#ddd',alignItems:'center',justifyContent:'center'}}>
                        {this.state.avatarSource3 === null ? (
                        <Text style={{fontSize:18,color:'#515151'}}>Gambar 3</Text>
                        ) : (
                        <Image style={{width:100,height:100}} source={this.state.avatarSource3} />
                        )}
                     </View>
                  </TouchableOpacity>
               </View>
            </View>

            {/* input text */}
            <View style={{padding: 10}}>

               <Text>Nama Kost</Text>
               <TextInput
                  placeholder='Masukkan nama kost disini...'
                  underlineColorAndroid='rgba(0,0,0,1)'
                  placeholderTextColor='#D5DBDB'
                  onChangeText={(nameKos)=> this.setState({nameKos})}
                  value={this.state.nameKos}/>
               <Text>Alamat Kost</Text>
               <TextInput
                  placeholder='Masukkan nama jalan, kecamatan, kelurahan, dll...'
                  underlineColorAndroid='rgba(0,0,0,1)'
                  placeholderTextColor='#D5DBDB'
                  onChangeText={(addresKos)=> this.setState({addresKos})}
                  value={this.state.addresKos}/>
            </View>

            <View style={{margin: 10,height:200}}>
                <MapView 
                    provider={PROVIDER_GOOGLE}
                    style={{position:'absolute',top:0,left:0,right:0,bottom:0,}}
                    initialRegion={{
                    latitude: -6.301608,
                    longitude: 106.735095,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                    }}>
                    <Marker
                    draggable
                    coordinate={{
                    latitude: -6.301608,
                    longitude: 106.735095,
                    }}
                    onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
                    title={'Kos'}
                    description={'koskosan murah'}/>
                </MapView>
            </View>

            <View style={{padding: 10}}>

               <View style={{flexDirection:'row'}}>
                  <View style={{flex:1}}>
                     <TextInput
                        placeholder='1312344'
                        underlineColorAndroid='rgba(0,0,0,1)'
                        placeholderTextColor='#D5DBDB'
                        onChangeText={(longitude)=> this.setState({longitude})}
                        value={this.state.longitude}/>
                  </View>
                  <View style={{flex:1}}>
                     <TextInput
                        placeholder='634577'
                        underlineColorAndroid='rgba(0,0,0,1)'
                        placeholderTextColor='#D5DBDB'
                        onChangeText={(latitude)=> this.setState({latitude})}
                        value={this.state.latitude}/>
                  </View>
               </View>

               <Text>Pemilik Kost</Text>
               <TextInput
                  placeholder='Pemilik Kost'
                  underlineColorAndroid='rgba(0,0,0,1)'
                  placeholderTextColor='#D5DBDB'
                  onChangeText={(direktore)=> this.setState({direktore})}
                  value={this.state.direktore}/>
               <Text>No hp pemilik Kost</Text>
               <TextInput
                  placeholder='No hp pemilik Kost'
                  underlineColorAndroid='rgba(0,0,0,1)'
                  placeholderTextColor='#D5DBDB'
                  onChangeText={(phoneDirektore)=> this.setState({phoneDirektore})}
                  value={this.state.phoneDirektore}/>
               <Text>lus kamar</Text>
               <View style={{flexDirection:'row'}}>
                  <View style={{flex:2}}>
                     <TextInput
                        placeholder='panjang(m)'
                        underlineColorAndroid='rgba(0,0,0,1)'
                        placeholderTextColor='#D5DBDB'
                        onChangeText={(long)=> this.setState({long})}
                        value={this.state.long}/>
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                     <Text>x</Text>
                  </View>
                  <View style={{flex:2}}>
                     <TextInput
                        placeholder='lebar(m)'
                        underlineColorAndroid='rgba(0,0,0,1)'
                        placeholderTextColor='#D5DBDB'
                        onChangeText={(width)=> this.setState({width})}
                        value={this.state.width}/>
                  </View>
               </View>

               <Text>Harga/bulan</Text>
               <TextInput
                  placeholder=' Harga/bulan'
                  underlineColorAndroid='rgba(0,0,0,1)'
                  placeholderTextColor='#D5DBDB'
                  onChangeText={(price)=> this.setState({price})}
                  value={this.state.price}/>
            </View>
         </ScrollView>

         <View style={{backgroundColor:'#fff',padding:4}}>
            <TouchableOpacity style={{backgroundColor: "#0397d5", marginBottom:5, justifyContent: "center",alignItems:'center',paddingVertical:15,borderRadius:5}} onPress={this.store}>
               <Text style={{color: '#ddd',fontSize:16, fontWeight: 'bold'}}>Simpan</Text>
            </TouchableOpacity>
         </View>

      </View>
    )
  }
}

