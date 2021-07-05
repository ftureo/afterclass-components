// Importamos una hoja de estilos de forma global
import './styles/styles.css'

//Importamos los componentes
import FunctionalComponent from './components/FunctionalComponent';
// import ClassComponent from './components/ClassComponent' 
//Descomentamos esta línea cuando queremos que el render muestre el componente de Clase y descomentamos el llamado del componente dentro del código del App.js

//Nos llega una determinada DATA
var dataReceived = [
  {
    id:1,
    name:"Fabián Tureo",
    rol:"Tutor",
    camada: 16895
  },
  {
    id:2,
    name:"Simón Cequea",
    rol:"Profesor",
    camada: 16895
  },
  {
    id:3,
    name:"Yamila Sleiman",
    rol:"Estudiante",
    camada: 16895
  },
  {
    id:4,
    name:"Santiago Migueles",
    rol:"Tutor",
    camada: 16895
  }
]
console.log(dataReceived)

function App() {
  return (
    <div className="App">
      <h1>Soy un texto común y silvestre</h1>
      <h2>Soy un texto antes del renderizado del FC</h2>

      {/* Vamos a llamar al componente funcional */}
      <FunctionalComponent />

      <h2>Soy un texto después del renderizado del FC</h2>

      <h2>Soy un texto antes del mapeo</h2>

      {/* Aquí probamos el render con el Funcional Component. Comentamos esta fracción de código cuando rendericemos el Class Component para no generar confusión */}
      {dataReceived.map(person => {
        return(
          <FunctionalComponent
            key = { person.id}
            id = { person.id }
            name = { person.name }
            rol = { person.rol }
            camada = { person.camada}
          />
        )
      })}

      <h2>Soy un texto después del mapeo</h2>

      {/* NOTA: DESCOMENTAR PARA JUGAR CON EL CLASS COMPONENT Y SOLAMENTE COMENTAR LAS LINEAS QUE NO SEAN DE CODIGO PURO
      Acá llamamos al componente de clase
      <h2>Un texto antes de importar el ClassComponent con props</h2>
      {dataReceived.map(person => {
        return(
            <ClassComponent 
            id = { person.id }
            name = { person.name }
            rol = { person.rol }
            camada = { person.camada }
          />
        )
      })}
      <h2>Otro texto después de importar el ClassComponent con props</h2>*/}
    </div> 
  );
}

export default App;
