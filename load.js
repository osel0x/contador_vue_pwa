if("serviceWorker" in navigator){
    navigator.serviceWorker.register("./sw.js").then(reg => console.log("Registro exitoso")
    ).catch(err => console.log(err));
//    To enable SW in firefox Options > Privacy&Security >
//                      Uncheck "Eliminar cookies y datos del sitio cuando se cierra Firefox"
}
