# Use Node.js 18 (or another stable version)
FROM node:18

# Install dependencies and Docker
RUN apt-get update && \
    apt-get install -y \
    ca-certificates \
    curl \
    gnupg \
    lsb-release \
    sudo \
    && curl -fsSL https://download.docker.com/linux/debian/gpg | sudo tee /etc/apt/trusted.gpg.d/docker.asc > /dev/null \
    && echo "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null \
    && apt-get update && apt-get install -y docker-ce-cli

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) first for caching
COPY package.json package-lock.json* ./

# Install dependencies (including GameDig)
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the web server port
EXPOSE 3000
# Set the default command to run your Node.js app
CMD ["node", "index.js"]
