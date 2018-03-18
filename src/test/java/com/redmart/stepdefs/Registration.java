package com.redmart.stepdefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class Registration {
	
	@Given("^User Navigates to Red Mart Registration Page$")
	public void user_Navigates_to_Red_Mart_Registration_Page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("User is on Registration page");
	}

	@When("^User click Registration button$")
	public void user_click_Registration_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("User click on registration button");
	}

}
