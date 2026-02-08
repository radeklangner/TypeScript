Feature: Logowanie do systemu

  Scenario: Poprawne otwarcie strony i wpisanie numeru
    Given Otwieram strone "https://practice.expandtesting.com/inputs"
    When Wpisuje "123456" w pole numeru
    And Czekam 5 sekund
    Then Zamykam przegladarke