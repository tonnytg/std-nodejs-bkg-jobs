### NodeJS and Background Jobs

<figure><img src="https://github.com/tonnytg/std-nodejs-bkg-jobs/blob/main/queue-example.png"><figcaption>Example Queue</figcaption></figure>


### Redis
Docker with Redis:<br/>
`docker run --name redis -p 6379:6379 -d -t redis:alpine`


### How to run

#### Reader
`npm run reader`

#### Queue
`npm run queue`

### How to use
```

curl --location --request POST 'localhost:3333/users' \
--header 'Content-Type: application/json' \
--data-raw '{
            "name": "Antonio",
            "email": "tonnytg@gmail.com",
            "password": "teste"
}'

```
