package com.redmart.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class AccountPage extends BasePage {

	public By lblMyAccount = By.cssSelector("text = 'My Account'");
	
	public AccountPage(WebDriver driver) {
		super(driver);
		// TODO Auto-generated constructor stub
	} 
	
	

}
