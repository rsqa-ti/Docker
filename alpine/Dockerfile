ARG ALPINE_VERSION

FROM  alpine:${ALPINE_VERSION}
# para realizar o build nesse caso devemos insserir os seguintes comandos:
#docker build --build-arg ALPINE_VERSION=3.18 -t <tag> .

ENV DESENVOLVEDOR="Ricardo Assis"
ENV MSG "Variável de ambiente criado no Dockerfile"

RUN <<EOF
    apk add --no-cache nodejs
    apk add --no-cache npm
    apk add --no-cache git
    apk add --no-cache nano
EOF

LABEL desenvolvedor=${DESENVOLVEDOR} \
    descrição="Imagem pasra exemplificar a utilização de Labels no Dockerfile" \
    versao="1.1"

RUN echo ${MSG} > /tmp/arquivo_criado)durante_o_building_da_imagem.txt