FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json yarn.lock* ./

RUN yarn install --frozen-lockfile

COPY . .

ARG VITE_CLERK_PUBLISHABLE_KEY
ARG VITE_BACKEND_URL
ARG VITE_CURRENCY

ENV VITE_CLERK_PUBLISHABLE_KEY=$VITE_CLERK_PUBLISHABLE_KEY
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
ENV VITE_CURRENCY=$VITE_CURRENCY

RUN yarn build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx-spa.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
