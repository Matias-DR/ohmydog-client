export const filterDataAdapter = (data: any) => {
    return {
        telefono: data.telefono,
        contraseña: data.contraseña,
        nuevacontraseña: data.nuevacontraseña
    }
}