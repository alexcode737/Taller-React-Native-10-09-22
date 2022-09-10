import { useState, useEffect, useRef } from 'expo-status-bar';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { body } from './assets/styles/Estilos'

export default function App() {
  const [nombre, setNombre] = useState('');
  const [salario, setSalario] = useState('')
  const [salarios,setSalarios] = useState([]);
    // Referencias a elementos
    let refNombre = useRef()
    const guardar = () => {
      //Agregar datos al array a través del método setSalarios para el array salarios
      setSalarios(misalarios => [...misalarios,{nombre:nombre,salario:salario}] );
      //console.log(salarios);
      setNombre('');
      setSalario('')
      refNombre.current.focus();
    }
    //Buscar nombre
    let buscar = (nombuscar) =>{
      let nomenc = salarios.find(sal => sal.nombre == nombre);
      if (nomenc != undefined){
        setSalario(nomenc.salario);
      }
      else{
        alert("Nombre no hallado");
      }
    }
  return (
    <View style={[body.cuerpo]}>
      <View style={[body.column1]}>
        <Text>Nombre</Text>
        <TextInput
          placeholder='____________________'
          onChangeText={nombre => setNombre(nombre)}
          value={nombre}
          ref={refNombre}
          />
        <Text>salario:</Text>
        <TextInput
          placeholder='____________________'
          onChangeText={salario => setSalario(salario)}
          value={salario}
          />
        <Text>Monto prestamo:</Text>
        <TextInput
          placeholder='____________________'
          />
        <Text>Numero de cuotas:</Text>
        <TextInput
          placeholder='____________________'
          />
        <Text>Valor de cuota:</Text>
        <TextInput
          placeholder='____________________'
          />
      </View>
      <View style={[body.column2]}>
        <Text>Fecha</Text>
        <TextInput
          placeholder='____________________'
          />   
        <Text>Tipo de prestamo:</Text>
        <TextInput
          placeholder='____________________'
          />
        <Text>Total deuda:</Text>
        <TextInput
          placeholder='____________________'
        />
      </View>
      <View style={[body.column3]}>
        <TouchableOpacity
          style={{backgroundColor:'green',padding:10,borderRadius:10, marginLeft:10}}
          onPress={()=>Calcular('+')}
        >
          <Text style={{color:'white',fontWeight:'bold'}}>Calcular/Guardar</Text>
        </TouchableOpacity>  
        <TouchableOpacity
          style={{backgroundColor:'green',padding:10,borderRadius:10, marginLeft:10}}
          onPress={()=>Calcular('+')}
        >
          <Text style={{color:'white',fontWeight:'bold'}}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor:'green',padding:10,borderRadius:10, marginLeft:10}}
          onPress={()=>Calcular('+')}
        >
          <Text style={{color:'white',fontWeight:'bold'}}>Limpiar</Text>
        </TouchableOpacity>
      </View>
      <Text>{'\n'}</Text>
      <View>
      {
          salarios.map(sal => {
            return (
              <View style={{flex:1, flexDirection:'row',flexWrap:'wrap'}}>
                <Text style={{marginRight:10}}>{sal.nombre}</Text>
                <Text>{new Intl.NumberFormat('es-CO').format(sal.salario)}</Text>
              </View>
            );
          })
        }
      </View>
    </View>
  );
}


