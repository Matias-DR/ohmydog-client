export const filterPetDataAdapter = (data: any) => {
    return {
        nombre: data.nombre,
        raza: data.raza,
        color: data.color,
        edad: data.edad,
        sexo: data.sexo,
        tamaño: data.tamaño,
        peso: data.peso,
        origen: data.origen,
        caracteristica: data.caracteristica,
        foto: data.foto,
    }
}