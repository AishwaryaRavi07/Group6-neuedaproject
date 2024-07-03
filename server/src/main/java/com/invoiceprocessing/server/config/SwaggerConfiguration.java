package com.invoiceprocessing.server.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfiguration {

    @Bean
    public OpenAPI apiDocConfig() {
        return new OpenAPI()
                .info(new Info()
                        .title("Invoice & Finance Management API")
                        .description("Welcome to the Invoice & Finance Management API. Simplify your business operations with our comprehensive API.")
                        .version("1.0.0"));
    }
    //
}
