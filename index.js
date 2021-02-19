// utilizaremos EMACScript 6
// PROMESA

const somethingWillHappen = () =>{
    return new Promise((resolve, reject) => {
        if(true){
            resolve("Super")
        }else{
            reject("error invitable")
        }
    })
}

somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err))


const somethingWillHappen2 = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(()=>{
                resolve("super bien")
            }, 3000)

        } else{
            const error = new Error("Error")
            reject(error)
        }
    })
}

somethingWillHappen2()
.then(resolve => console.log(resolve))
.catch(error => console.error(error))

// Como correr varias promesas al mismo tiempo o encadenadas
// y para eso se usa el metodo Promise.all la cual me va permitir ejecutar estas dos promesas
// y retornar un arreglo con los resultados

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {

    console.log('Array is result', response)
})

.catch(error => {
  
    console.log(error)
})

 