# it is important to match the playwright version in the image with the installed playwright version in package.json
FROM mcr.microsoft.com/playwright:v1.57.0-noble

RUN mkdir /steam_app
WORKDIR /steam_app
# because Dockerfile and the tests are in the same folder, we only use '.' here
COPY . /steam_app
# to install dependencies from package.json
RUN npm install --force
# to install the browsers required by playwright
RUN npx playwright install