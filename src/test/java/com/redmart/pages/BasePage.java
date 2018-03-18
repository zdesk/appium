package com.redmart.pages;

import java.util.HashMap;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BasePage {

	protected WebDriver driver;
	
	public By lblLogin = By.cssSelector("text = 'LOG IN'");
	public By lblSignup = By.cssSelector("text = 'SIGN UP'");
	public By btnBackArrow = By.className("ImageButton");
	public By btnMenu = By.cssSelector("content-desc = 'Menu opened'");
	public By lblMyAccount = By.cssSelector("text = 'My Account'");

    public BasePage(WebDriver driver) {
        this.driver = driver;
    }
    
    public BasePage clickMenu() {
    	this.driver.findElement(btnMenu).click();
    	return this;
    }
    
    public BasePage clickBackArrow() {
    	this.driver.findElement(btnBackArrow).click();
    	return this;
    }
    
    public BasePage clickLabelLogin() {
    	this.driver.findElement(lblLogin).click();
    	return this;
    }
    
    public BasePage clickLabelSingup() {
    	this.driver.findElement(lblSignup).click();
    	return this;
    }
    
    public BasePage clickLabelMyAccount() {
    	this.driver.findElement(lblMyAccount).click();
    	return this;
    }
    
    public BasePage waitForVisibilityOf(By locator) {
        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
        return this;
    }
    public BasePage waitForClickabilityOf(By locator) {
        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(ExpectedConditions.elementToBeClickable(locator));
        return this;
    }

    public BasePage scrollPageUp() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        HashMap<String, Double> swipeObject = new HashMap<String, Double>();
        swipeObject.put("startX", 0.50);
        swipeObject.put("startY", 0.95);
        swipeObject.put("endX", 0.50);
        swipeObject.put("endY", 0.01);
        swipeObject.put("duration", 3.0);
        js.executeScript("mobile: swipe", swipeObject);
        return this;
    }

    protected WebElement getElement(By locator) {
    	try {
    		return driver.findElement(locator);
    	}
    	catch(Exception e) {
    		return null;
    	}
    }
    
    public BasePage swipeLeftToRight() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        HashMap<String, Double> swipeObject = new HashMap<String, Double>();
        swipeObject.put("startX", 0.01);
        swipeObject.put("startY", 0.5);
        swipeObject.put("endX", 0.9);
        swipeObject.put("endY", 0.6);
        swipeObject.put("duration", 3.0);
        js.executeScript("mobile: swipe", swipeObject);
        return this;
    }

    public BasePage swipeRightToLeft() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        HashMap<String, Double> swipeObject = new HashMap<String, Double>();
        swipeObject.put("startX", 0.9);
        swipeObject.put("startY", 0.5);
        swipeObject.put("endX", 0.01);
        swipeObject.put("endY", 0.5);
        swipeObject.put("duration", 3.0);
        js.executeScript("mobile: swipe", swipeObject);
        return this;
    }

}
