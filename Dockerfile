FROM node:14

# Create app directory
WORKDIR /app
COPY package*.json ./
COPY package.json .
RUN npm install

# 拷贝应用程序
COPY . .

# 暴露端口
EXPOSE 3000

# 运行命令
CMD [ "npm", "run", "dev" ]