Feature: JavaScript Calculator Testing

  Scenario: Addition of two numbers
    * def calculator = read('cal.js')
    * def result = calculator(10, 20)
    * match result == 30

  Scenario: Addition of another two numbers
    * def calculator = read('cal.js')
    * def result = calculator(5, 15)
    * match result == 20
