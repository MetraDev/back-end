const environments = {
    development : "development",
    produccion: "production",
    test:"test",
    preproduccion:"preproduction"


}
const ENV = process.env.NODE_ENV || environments.development;


const config ={

    [environments.development]:{
        MongoDB:{
            URI: "mongodb+srv://sergio:porlamadre3@cluster0-ndbon.mongodb.net/unicorn?retryWrites=true",
            host:"localhost",
            port:"27017",
            db:"unicorn"
        },
        PORT:8080

    },[environments.preproduccion]:{

    MongoDB:{
        URI: "mongodb+srv://sergio:porlamadre3@cluster0-ndbon.mongodb.net/unicorn?retryWrites=true",
            host:"localhost",
            port:"27017",
            db:"unicorn"
    },
    PORT:80

    },[environments.produccion]:{

    },[environments.test]:{

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