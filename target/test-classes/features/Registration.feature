@assignment
Feature: Test Registration Page's features

	Scenario Outline: this is Registration scenario
					Given User Navigates to Red Mart Registration Page
					When User input username as <username>
					And User input password as <password>
					And User click Registration button
					Then Account should be visible
		
	Examples:
				|username|password|
				|anshu870@gmail.com|anshu870|