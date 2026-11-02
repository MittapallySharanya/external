package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import org.springframework.web.client.RestTemplate;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(
    classes = DemoApplication.class,
    webEnvironment = SpringBootTest.WebEnvironment.NONE
)
class EventRegistrationDockerTest {

    private final RestTemplate restTemplate = new RestTemplate();

    private final String baseUrl = "http://localhost:3001";

    @Test
    void testRegistrationAPIStatus() {
        ResponseEntity<String> response =
            restTemplate.getForEntity(
                baseUrl + "/api/registrations",
                String.class
            );

        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    void testRegistrationAPIResponse() {
        ResponseEntity<String> response =
            restTemplate.getForEntity(
                baseUrl + "/api/registrations",
                String.class
            );

        assertNotNull(response.getBody());

        assertTrue(response.getBody().trim().startsWith("["));

        assertTrue(response.getHeaders()
            .getContentType()
            .includes(MediaType.APPLICATION_JSON));
    }
}
