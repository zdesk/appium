// The below runner is used as test class in testng.xml file
// so that one file can be used to run our all test cases.


package com.redmart.testdriver;

import java.net.MalformedURLException;

import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import com.redmart.testsetup.AndroidDriverSetup;
import com.redmart.testsetup.SetupTearDown;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		features = "classpath:features/",
		plugin = {"progress", "html:target/cucumber-htmlreport","json:target/cucumber-report.json"},
		glue = "com.redmart.stepdefs",
		tags = {"@assignment"}
		
)
public class RedMartTestDriver extends AbstractTestNGCucumberTests{
	
	public AndroidDriverSetup androidSetup;
	
	@BeforeTest
	public void beforeTest() throws MalformedURLException, InterruptedException {
		androidSetup = new SetupTearDown();
		androidSetup.prepareAndroidDriver();
	}
	
	@AfterTest
	public void afterTest() {
		this.androidSetup.destroyAndroidDriver();
	}

}
