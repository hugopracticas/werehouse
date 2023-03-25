# This application was created with the only purpose to show the operation of Dockerfile

## This a very basic NodeJs app and you can play with it, by typing:

1. npm install
2. npm run dev

</br>
</br>

## The application has been developed using Typescript, so, if you want to create the transpiled version, just type:

1. npm run build

</br>
</br>

## To see the Dockerfile in action, just create an image as you usually do:

1. docker build . -t my-awesome-tag:version
2. docker run -p port:port my-awesome-tag:version
   
</br>
</br>

## Important note:

It is importanto to note that, the application uses an environment variable to set the port number, please, consider to add '.env' file and set the mentioned property.

</br>

### .env file content:
***PORT={number}***
