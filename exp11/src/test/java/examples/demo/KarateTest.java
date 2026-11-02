package examples.demo;

import com.intuit.karate.junit5.Karate;

class KarateTest {

    @Karate.Test
    Karate testCalculator() {
        return Karate.run("classpath:examples/demo");
    }
}
