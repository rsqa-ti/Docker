ARG ALPINE_VERSION
ARG FRONT_PRD="https://meuapp.com.br"
ARG BACK_PRD="https://meuapp.com.br:3002"

FROM  alpine:${ALPINE_VERSION}

ENV DESENVOLVEDOR="Ricardo Assis" \
    MSG="Variável de ambiente criado no Dockerfile" \
    FRONT_PRD=${FRONT_PRD} \
    BACK_PRD=${BACK_PRD} \
    VERSAO="1.0.1"

RUN <<EOF
    apk add --no-cache nodejs
    apk add --no-cache npm
    apk add --no-cache git
    apk add --no-cache nano
EOF

#Adiciona um usuário no SO (Linux distro Alpine)
RUN adduser -D ricardo

#Define o usuário responsável pela execução dos RUNs
USER ricardo

LABEL desenvolvedor=${DESENVOLVEDOR} \
    descrição="Imagem para exemplificar a utilização de Labels no Dockerfile" \
    versao="1.1"

RUN echo ${MSG} > /tmp/arquivo_criado)durante_o_building_da_imagem.txt

#Cada Dockerfile possui apenas um único CMD e ele se sobrepõe ao CMD herdado com a imagem
CMD [ "/bin/sh" , "-c" , "echo Comando executado automaticamente quando o container é iniciado" ]