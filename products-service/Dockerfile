FROM openjdk:19
COPY ./target/product-service-1.0-SNAPSHOT.jar /tmp
WORKDIR /tmp
ENTRYPOINT ["java","-jar","/tmp/product-service-1.0-SNAPSHOT.jar"]