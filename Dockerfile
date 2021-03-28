FROM node:14.16.0

WORKDIR /opt/app
COPY ./package.json ./pnpm-lock.yaml* ./
RUN npm cache clean --force && npm install -g pnpm
RUN pnpm install

ENV PORT=80
ENV DATABASE_CLIENT=pg
ENV DATABASE_URL=postgres://user:hunter2@postgres:5432/sfn

COPY . /opt/app

EXPOSE 80

CMD ["pnpm", "run", "start"]