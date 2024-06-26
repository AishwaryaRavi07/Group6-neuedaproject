package com.invoiceprocessing.server;

import io.swagger.v3.oas.annotations.ExternalDocumentation;
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
                        .title("Invoice & Inventory Management API")
                        .description("Welcome to the Invoice & Inventory Management API. Manage invoices, track inventory, and retrieving detailed reports. Simplify your business operations with our comprehensive API.")
                        .version("0.0.1"));
    }
    //
}