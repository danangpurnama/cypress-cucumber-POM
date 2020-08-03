Feature: As User creating a end-to-end (e2e) tests for creating a gist

    Scenario: As a user, I want to create a public gist
        Given user access gist
        When user add new public gist
        Then displayed gist added

    Scenario: As a user, I want to edit an existing gist
        Given user access gist
        When user edit an existing gist
        Then displayed gist updated

    Scenario: As a user, I want to delete an existing gist
        Given user access gist
        When user delete an existing gist
        Then displayed list all gist

    Scenario: As a user, I want to see my list of gists.
        Given user access gist
        When user click see all of your gists
        Then displayed list all gist