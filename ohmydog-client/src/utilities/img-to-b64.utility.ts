export const imgToB64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            if (typeof reader.result === 'string') {
                resolve(reader.result)
            } else {
                reject('Error while reading file')
            }
        }
        reader.onerror = () => {
            reject('Error while reading file')
        }
    })
}