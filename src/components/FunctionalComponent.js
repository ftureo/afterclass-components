function FunctionalComponent(props) {
    console.log("Soy el objeto props: ", props)
    return(
        <>
            {/* <h3>Soy texto común dentro del FC</h3>
            <h3>Mi nombre es Fabi</h3> */}

            {/* Acá renderizamos pero utilizando las props */}
            <h3>Hola, mi nombre es { props.name }. Pertenezco a la camada { props.camada} y soy { props.rol } en este curso. En esta data, mi identificador es #{ props.id }</h3>
        </>
    )
}

export default FunctionalComponent