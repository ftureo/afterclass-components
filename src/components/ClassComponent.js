/* NOTA IMPORTANTE*/ 

/* Descomentar la fracción de código que guste renderizar desde el «import React» hasta el «export default». Luego, descomente la importación del componente en el App.js para poder renderizarlo*/

//         // Example #1 - Creando un ClassComponent desde cero
//         // Importamos el módulo React para luego extender las características en el componente
// import React from "react"

//         // Creamos una clase con el nombre asignado a nuestro componente y le extendemos las características desde React.Component (Importantes las mayúsculas)
// class ClassComponent extends React.Component {

//     // Acá tenemos que llamar al método render(). Este método se encarga de renderizar en el HTML
//     render() {
//         // Veamos que llegan en el "this"
//         // console.log("Soy el this: ", this)

//         // Nos metemos en las props
//         // console.log("Soy el this.props: ", this.props)

//         return(
//             <div>
//                 {/* Ahora puedo renderizar el nombre con las props que me llegan */}
//                 <h3>Hola { this.props.rol } { this.props.name } #{ this.props.id } camada { this.props.camada }</h3>
//             </div>
//         )
//     }
// }

// export default ClassComponent

//  // Example #2 - props vs state
import React from "react"

class ClassComponent extends React.Component {
    constructor(props) {
        // Definimos un estado a partir de las props que me llegan. Props != State (Pueden ser cosas diferentes ya que las props son las que me llegan desde algún otro lado (en palabras no-técnicas) y el estado lo puedo definir en este contexto)
        super(props) //Superconstructor - Apunta al React.Component. No escribirlo nos deja sin la posibilidad de invocar al this para la definición del estado. Sin muestro "this" por consola antes de declarar super(props), me mostrará que está indefinido. 

        // Ahora podemos ver las props
        console.log(props)

        // Puedo setear un estado a partir de las props - Descomentar para renderizar y comentar el state inferior
        // this.state = this.props

        //Aunque también podría setearlo con una información random. Es decir, por más que me lleguen props, defino un estado con información en particular por X motivo (Más adelante veremos ejemplos de esto, aunque esto no tenga mucho sentido en este ejemplo)
        this.state = { name: 'Fabi'}

        //OMG! Props vs State
        console.log(this.state.name)
    }

    // Acá tenemos que llamar al método render()
    render() {
    // Veamos que llegan en el "this"
        console.log(this)
        

    // Nos metemos en las props
        console.log(this.props)

        return(
            <div>
                {/* <h2>Soy un texto generado en <code>ClassComponent.js</code></h2> */}
                {/* Escrito de forma rudimentaria */}
                {/* <h3>Hola Esteban</h3> */}

                {/* Ahora puedo renderizar el nombre con las props que me llegan */}
                <h3>Hola { this.props.rol } { this.props.name } #{ this.props.id } camada { this.props.camada }</h3>

                {/* Ahora puedo renderizar el nombre con el state */}

                {/* Si se deja el estado definido a partir de las props, debería renderizar lo mismo que el texto de más arriba */}
                {/* Si se deja el estado definido "PORQUE SI", debería mostrar "Hola Fabi" */}
                <h3>Hola { this.state.name } </h3>
            </div>
        )
    }
}

export default ClassComponent