# Demo de GraphQL y GraphQL Federation

Este demo muestra un ejemplo simple de GraphQL y GraphQL Federation utilizando Node.js y Express.

## Estructura del Proyecto

- `services/users`: Servicio de usuarios
- `services/products`: Servicio de productos
- `gateway`: Gateway que une ambos servicios

## Instalación

```bash
npm install
```

## Ejecución

En terminales separadas, ejecuta:

1. Servicio de usuarios:
```bash
npm run start:users
```

2. Servicio de productos:
```bash
npm run start:products
```

3. Gateway:
```bash
npm run start:gateway
```

## Consultas de Ejemplo

Una vez que todos los servicios estén corriendo, puedes acceder al playground de GraphQL en:
http://localhost:4000

### Consultas de ejemplo:

1. Obtener usuarios y sus productos:
```graphql
query {
  users {
    id
    name
    email
    products {
      id
      name
      price
    }
  }
}
```

2. Obtener productos y sus usuarios:
```graphql
query {
  products {
    id
    name
    price
    user {
      id
      name
      email
    }
  }
}
```

## Explicación del Demo

Este demo muestra:
1. GraphQL básico: Cada servicio expone su propia API GraphQL
2. GraphQL Federation: Los servicios están federados a través del gateway
3. Resolución de referencias: Los servicios pueden referenciar entidades de otros servicios
4. Consultas distribuidas: El gateway permite consultar datos de múltiples servicios en una sola petición 