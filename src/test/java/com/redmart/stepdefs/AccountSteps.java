package com.redmart.stepdefs;

import com.redmart.pages.AccountPage;
import com.redmart.testsetup.SetupTearDown;

import cucumber.api.java.en.Then;

public class AccountSteps {
	
	private AccountPage accountPage = new AccountPage(SetupTearDown.driver);
	
	@Then("^Account should be visible$")
	public void account_should_be_visible() throws Throwable {
	    accountPage.waitForVisibilityOf(accountPage.lblMyAccount);
	}

}
