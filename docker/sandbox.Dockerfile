FROM digitalasset/daml-sdk:0.12.1-master

COPY ./target/mortgage-repackaging.dar /home/sdk/

WORKDIR /home/sdk

EXPOSE 7600

CMD da run sandbox -- --port 7600 mortgage-repackaging.dar 
