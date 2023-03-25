FROM node:14-alpine as builder_image

# Maintainer
LABEL Maintainer Edgar Maya (edgar.maya@episource.com)

# Work space directory
WORKDIR /app

# Execute installation as root user
USER 0

# Copying package files
COPY package.json yarn.lock ./

# Install just needed dependencies
RUN yarn install --frozen-lockfile

# Copy needed files
COPY . .

# Transpilation process, from Ts to Js
RUN yarn run build

# Remove not-necessary tsc files
RUN rm -r node_modules

# Installation of only necessary packages for production
RUN yarn install --prod
#--------

# Final image for running the NodeJs app
FROM node:14-alpine as execution_image

# Prepare NodeJs for prod environment (This flag enables node engine to certain performance improves)
ENV NODE_ENV=production

# Work space directory
WORKDIR /app

# Setting up port number
ENV PORT 3200

# Copy only needed files
COPY --from=builder_image /app/node_modules ./node_modules
COPY --from=builder_image /app/build ./build

# Run NodeJs application as user without root privileges
USER 1000

# Expose port
EXPOSE ${PORT}

# Final command
CMD ["node", "./build/app.js"];