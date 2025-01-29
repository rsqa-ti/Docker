FROM ubuntu

RUN apt update && apt install build-essential -y

RUN mkdir /opt/app/

WORKDIR /opt/app/

COPY Main.c .

RUN gcc ./Main.c -static -o Main

#scratch é a imagem base utilisada no container, onde são instalados os SOs
FROM scratch

#O comando a seguir copia as informações do primeiro estágio onde está o FROM do ubuntu na imagem scratch
#gerando uma imagem muito menor.
COPY --from=0 /opt/app/Main /Main

CMD ["./Main"]