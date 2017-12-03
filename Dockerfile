# Create image from nodejs base image
FROM node:8.9

# Clone the repo from github
RUN git clone https://github.com/KevinRLeC/pitch_fx_visualizer.git

# Change working directory to the cloned repo
WORKDIR /pitch_fx_visualizer

# Install all the dependencies
RUN npm install

#Build the application
RUN npm run build

EXPOSE 3001

CMD ["npm", "start:backend"]

FROM nginx

#Move to nginx directory
COPY ./build/ /usr/share/nginx/html

#Move default nginx config
COPY ./dockerconf/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
