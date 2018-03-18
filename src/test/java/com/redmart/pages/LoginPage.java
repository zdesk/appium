package com.redmart.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPage extends BasePage{

	public LoginPage(WebDriver driver) {
		super(driver);
	}
	
	
	public By txtEmail = By.id("email");
	public By txtPwd = By.id("password");
	public By btnLogin = By.id("login");
	
	public LoginPage setEmail(String email) {
		this.driver.findElement(this.txtEmail).sendKeys(email);
		return this;
	}
	
	public LoginPage setPassword(String email) {
		this.driver.findElement(this.txtPwd).sendKeys(email);
		return this;
	}
	
	public LoginPage clickLogin() {
		this.driver.findElement(this.btnLogin).click();
		return this;
	}

}
