package com.redmart.stepdefs;

import com.redmart.pages.LoginPage;
import com.redmart.testsetup.SetupTearDown;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {
	
	private LoginPage loginPage = new LoginPage(SetupTearDown.driver);
	
	@Given("^User Navigates to Red Mart Login Page$")
	public void user_Navigates_to_Red_Mart_Login_Page() throws Throwable {
	    loginPage.waitForClickabilityOf(loginPage.btnMenu).clickMenu().clickLabelLogin();
	}

	@When("^User input username as anshu(\\d+)@gmail\\.com$")
	public void user_input_anshu_gmail_com(int arg1) throws Throwable {
	    loginPage.waitForClickabilityOf(loginPage.txtEmail);
	    loginPage.setEmail("anshu870@gmail.com");
	}

	@When("^User input password as anshu(\\d+)$")
	public void user_input_anshu(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		loginPage.setPassword("anshu870");
	}

	@When("^User click login button$")
	public void user_click_login_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		loginPage.clickLogin();
	}

	

}
