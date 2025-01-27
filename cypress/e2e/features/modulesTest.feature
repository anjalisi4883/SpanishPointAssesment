Feature: Verify Supported Products on Modules

    Scenario: Verify the supported products under the 'Additional Features' section
        Given User visit the baseurl
        When User expand the 'Modules' section in the header
        And User click on 'Repertoire Management Module' from the menu
        And User scroll to the Additional Features section
        And User clicks on the 'Products Supported'
        Then Verify the list of product supported