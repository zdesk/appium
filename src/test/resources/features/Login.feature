@assignment
Feature: Test Login Page's features

	Scenario Outline: this is login scenario
					Given User Navigates to Red Mart Login Page
					When User input username as <username>
					And User input password as <password>
					And User click login button
					Then Account should be visible
		
	Examples:
				|username|password|
				|anshu870@gmail.com|anshu870|