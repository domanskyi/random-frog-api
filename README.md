# Random frog api 🐸
Get random frog images using [Unsplash API](https://unsplash.com/developers) 

## Requirements:
- [Docker](https://www.docker.com/)
- [Node v.14+](https://nodejs.org/en/) for local development

- [Unspash access key](https://unsplash.com/documentation#creating-a-developer-account)

## Related DOCs:
- [Unspash API Documentation](https://unsplash.com/documentation)


## How to start: 
Set required env variables:
```
export UNSPLASH_ACCESS_KEY=your_unsplash_access_key
```
Run the server:
```
npm start
```

## Running on Docker:
Build Docker image:
```
docker build -t random-frog-api .
```

Run the container:
```
docker run --name random-frog-api -e UNSPLASH_ACCESS_KEY=your_unsplash_access_key --rm random-frog-api
```

## Docker Hub
You can also find current version of the API image on the [Docker Hub](https://hub.docker.com/repository/docker/domanskyi/random-frog-api)