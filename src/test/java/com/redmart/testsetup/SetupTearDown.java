package com.redmart.testsetup;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;

import io.appium.java_client.android.AndroidDriver;

public class SetupTearDown implements AndroidDriverSetup {
	
	public static AndroidDriver<WebElement> driver;

    public void prepareAndroidDriver() throws MalformedURLException, InterruptedException {
    	ClassLoader classLoader = getClass().getClassLoader();
    	File file = new File(classLoader.getResource("redmart.com.apk").getFile());
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("platformName", "Android");
        capabilities.setCapability("platformVersion", "5.1.1");
        capabilities.setCapability("deviceName", "emulator-5554");
        capabilities.setCapability("app", file.getAbsolutePath());
        capabilities.setCapability("appPackage", "com.redmart.redmart");
        capabilities.setCapability("appActivity", "com.redmart.redmart.usecases.start.StartActivity");
        capabilities.setCapability("fullreset", true);
        driver = new AndroidDriver<WebElement>(new URL("http://localhost:4723/wd/hub"), capabilities);        
    }
    
    public void destroyAndroidDriver() {
    	
    	driver.quit();
    }
    
    

}
