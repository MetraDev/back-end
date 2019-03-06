const environments = {
    development : "development",
    produccion: "production",
    test:"test",
    preproduccion:"preproduction"


}
const ENV = process.env.NODE_ENV || environments.produccion;


const config ={

    [environments.produccion]:{
        MongoDB:{
            URI: 'mongodb+srv://sergio:porlamadre3@cluster0-ndbon.mongodb.net/unicorn?retryWrites=true',
            host:"localhost",
            port:"27017",
            db:"unicorn"
        },
        PORT:3000

    },[environments.preproduccion]:{

    MongoDB:{
        URI: 'mongodb+srv://sergio:porlamadre3@cluster0-ndbon.mongodb.net/unicorn?retryWrites=true',
            host:"localhost",
            port:"27017",
            db:"unicorn"
    },
    PORT:3000

    }
    ,[environments.test]:{

    MongoDB:{
        URI: "localhost:27017/unicorn_test",
            host:"localhost",
            port:"27017",
            db:"unicorn"
    },
    PORT:8080

    },
}

console.log(ENV)


process.env= {

    ...process.env,
    ...config[ENV]
}