'use strict'
exports.config={
    app_name:['PokemonAngular'],
    license_key:'732b55593ba56b470f5c503926916388FFFFNRAL',
    logging:{
        level:'info'
},allow_all_headers:true,
attributes:{
    exclude:[
        'request.headers.cookie',
        'request.headers.authorization',
        'request.headers.proxyAuthorization',
        'request.headers.setCookie*',
        'request.headers.x*',
        'response.headers.cookie',
        'response.headers.authorization',
        'response.headers.proxyAuthorization',
        'response.headers.setCookie*',
        'response.headers.x*'
    ]
}
}