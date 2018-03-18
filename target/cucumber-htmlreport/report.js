$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Test Login Page\u0027s features",
  "description": "",
  "id": "test-login-page\u0027s-features",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@assignment"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "this is login scenario",
  "description": "",
  "id": "test-login-page\u0027s-features;this-is-login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User Navigates to Red Mart Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User input username as \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User input password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Account should be visible",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "test-login-page\u0027s-features;this-is-login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "test-login-page\u0027s-features;this-is-login-scenario;;1"
    },
    {
      "cells": [
        "anshu870@gmail.com",
        "anshu870"
      ],
      "line": 13,
      "id": "test-login-page\u0027s-features;this-is-login-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "this is login scenario",
  "description": "",
  "id": "test-login-page\u0027s-features;this-is-login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@assignment"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User Navigates to Red Mart Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User input username as anshu870@gmail.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User input password as anshu870",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Account should be visible",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_Navigates_to_Red_Mart_Login_Page()"
});
formatter.result({
  "duration": 30494051389,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 30 seconds waiting for element to be clickable: By.cssSelector: content-desc \u003d \u0027Menu opened\u0027\nBuild info: version: \u00272.46.0\u0027, revision: \u002761506a4624b13675f24581e453592342b7485d71\u0027, time: \u00272015-06-04 10:22:50\u0027\nSystem info: host: \u0027OptimusPrime\u0027, ip: \u0027192.168.1.73\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{app\u003dC:\\Users\\optimus\\workspace\\assignment.rahul\\target\\test-classes\\redmart.com.apk, appPackage\u003dcom.redmart.redmart, deviceScreenSize\u003d1080x1920, networkConnectionEnabled\u003dtrue, warnings\u003d{}, databaseEnabled\u003dfalse, deviceName\u003demulator-5554, platform\u003dLINUX, deviceUDID\u003demulator-5554, appActivity\u003dcom.redmart.redmart.usecases.start.StartActivity, fullreset\u003dtrue, desired\u003d{app\u003dC:\\Users\\optimus\\workspace\\assignment.rahul\\target\\test-classes\\redmart.com.apk, appPackage\u003dcom.redmart.redmart, appActivity\u003dcom.redmart.redmart.usecases.start.StartActivity, fullreset\u003dtrue, platformVersion\u003d5.1.1, platformName\u003dAndroid, deviceName\u003demulator-5554}, platformVersion\u003d5.1.1, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, deviceModel\u003dAndroid SDK built for x86_64, platformName\u003dAndroid, deviceManufacturer\u003dunknown}]\nSession ID: d59612b4-d69e-4b7f-a5b8-f541e3622c43\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:229)\r\n\tat com.redmart.pages.BasePage.waitForClickabilityOf(BasePage.java:58)\r\n\tat com.redmart.stepdefs.LoginSteps.user_Navigates_to_Red_Mart_Login_Page(LoginSteps.java:16)\r\n\tat ✽.Given User Navigates to Red Mart Login Page(features/Login.feature:5)\r\nCaused by: org.openqa.selenium.InvalidSelectorException: Locator Strategy \u0027css selector\u0027 is not supported for this session (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 8 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00272.46.0\u0027, revision: \u002761506a4624b13675f24581e453592342b7485d71\u0027, time: \u00272015-06-04 10:22:50\u0027\nSystem info: host: \u0027OptimusPrime\u0027, ip: \u0027192.168.1.73\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{app\u003dC:\\Users\\optimus\\workspace\\assignment.rahul\\target\\test-classes\\redmart.com.apk, appPackage\u003dcom.redmart.redmart, deviceScreenSize\u003d1080x1920, networkConnectionEnabled\u003dtrue, warnings\u003d{}, databaseEnabled\u003dfalse, deviceName\u003demulator-5554, platform\u003dLINUX, deviceUDID\u003demulator-5554, appActivity\u003dcom.redmart.redmart.usecases.start.StartActivity, fullreset\u003dtrue, desired\u003d{app\u003dC:\\Users\\optimus\\workspace\\assignment.rahul\\target\\test-classes\\redmart.com.apk, appPackage\u003dcom.redmart.redmart, appActivity\u003dcom.redmart.redmart.usecases.start.StartActivity, fullreset\u003dtrue, platformVersion\u003d5.1.1, platformName\u003dAndroid, deviceName\u003demulator-5554}, platformVersion\u003d5.1.1, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, deviceModel\u003dAndroid SDK built for x86_64, platformName\u003dAndroid, deviceManufacturer\u003dunknown}]\nSession ID: d59612b4-d69e-4b7f-a5b8-f541e3622c43\n*** Element info: {Using\u003dcss selector, value\u003dcontent-desc \u003d \u0027Menu opened\u0027}\r\n\tat sun.reflect.GeneratedConstructorAccessor14.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:27)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:358)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:447)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByCssSelector(DefaultGenericMobileDriver.java:91)\r\n\tat io.appium.java_client.AppiumDriver.findElementByCssSelector(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementByCssSelector(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:426)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:350)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:37)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:809)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:41)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$20.apply(ExpectedConditions.java:603)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$20.apply(ExpectedConditions.java:596)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat com.redmart.pages.BasePage.waitForClickabilityOf(BasePage.java:58)\r\n\tat com.redmart.stepdefs.LoginSteps.user_Navigates_to_Red_Mart_Login_Page(LoginSteps.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:80)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:673)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:842)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1166)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.runWorkers(TestRunner.java:1178)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:757)\r\n\tat org.testng.TestRunner.run(TestRunner.java:608)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:334)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:329)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:291)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:240)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1158)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1083)\r\n\tat org.testng.TestNG.run(TestNG.java:999)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:132)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:230)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:76)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "870",
      "offset": 28
    }
  ],
  "location": "LoginSteps.user_input_anshu_gmail_com(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "870",
      "offset": 28
    }
  ],
  "location": "LoginSteps.user_input_anshu(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountSteps.account_should_be_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("features/Registration.feature");
formatter.feature({
  "line": 2,
  "name": "Test Registration Page\u0027s features",
  "description": "",
  "id": "test-registration-page\u0027s-features",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@assignment"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "this is Registration scenario",
  "description": "",
  "id": "test-registration-page\u0027s-features;this-is-registration-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User Navigates to Red Mart Registration Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User input username as \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User input password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click Registration button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Account should be visible",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "test-registration-page\u0027s-features;this-is-registration-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "test-registration-page\u0027s-features;this-is-registration-scenario;;1"
    },
    {
      "cells": [
        "anshu870@gmail.com",
        "anshu870"
      ],
      "line": 13,
      "id": "test-registration-page\u0027s-features;this-is-registration-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "this is Registration scenario",
  "description": "",
  "id": "test-registration-page\u0027s-features;this-is-registration-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@assignment"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User Navigates to Red Mart Registration Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User input username as anshu870@gmail.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User input password as anshu870",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click Registration button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Account should be visible",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_Navigates_to_Red_Mart_Registration_Page()"
});
formatter.result({
  "duration": 618328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "870",
      "offset": 28
    }
  ],
  "location": "LoginSteps.user_input_anshu_gmail_com(int)"
});
formatter.result({
  "duration": 56792761297,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "870",
      "offset": 28
    }
  ],
  "location": "LoginSteps.user_input_anshu(int)"
});
formatter.result({
  "duration": 42447903679,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_click_Registration_button()"
});
formatter.result({
  "duration": 391450,
  "status": "passed"
});
formatter.match({
  "location": "AccountSteps.account_should_be_visible()"
});
formatter.result({
  "duration": 30017353137,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 30 seconds waiting for visibility of element located by By.cssSelector: text \u003d \u0027My Account\u0027\nBuild info: version: \u00272.46.0\u0027, revision: \u002761506a4624b13675f24581e453592342b7485d71\u0027, time: \u00272015-06-04 10:22:50\u0027\nSystem info: host: \u0027OptimusPrime\u0027, ip: \u0027192.168.1.73\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{app\u003dC:\\Users\\optimus\\workspace\\assignment.rahul\\target\\test-classes\\redmart.com.apk, appPackage\u003dcom.redmart.redmart, deviceScreenSize\u003d1080x1920, networkConnectionEnabled\u003dtrue, warnings\u003d{}, databaseEnabled\u003dfalse, deviceName\u003demulator-5554, platform\u003dLINUX, deviceUDID\u003demulator-5554, appActivity\u003dcom.redmart.redmart.usecases.start.StartActivity, fullreset\u003dtrue, desired\u003d{app\u003dC:\\Users\\optimus\\workspace\\assignment.rahul\\target\\test-classes\\redmart.com.apk, appPackage\u003dcom.redmart.redmart, appActivity\u003dcom.redmart.redmart.usecases.start.StartActivity, fullreset\u003dtrue, platformVersion\u003d5.1.1, platformName\u003dAndroid, deviceName\u003demulator-5554}, platformVersion\u003d5.1.1, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, deviceModel\u003dAndroid SDK built for x86_64, platformName\u003dAndroid, deviceManufacturer\u003dunknown}]\nSession ID: d59612b4-d69e-4b7f-a5b8-f541e3622c43\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:229)\r\n\tat com.redmart.pages.BasePage.waitForVisibilityOf(BasePage.java:53)\r\n\tat com.redmart.stepdefs.AccountSteps.account_should_be_visible(AccountSteps.java:14)\r\n\tat ✽.Then Account should be visible(features/Registration.feature:9)\r\nCaused by: org.openqa.selenium.InvalidSelectorException: Locator Strategy \u0027css selector\u0027 is not supported for this session (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 5 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00272.46.0\u0027, revision: \u002761506a4624b13675f24581e453592342b7485d71\u0027, time: \u00272015-06-04 10:22:50\u0027\nSystem info: host: \u0027OptimusPrime\u0027, ip: \u0027192.168.1.73\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{app\u003dC:\\Users\\optimus\\workspace\\assignment.rahul\\target\\test-classes\\redmart.com.apk, appPackage\u003dcom.redmart.redmart, deviceScreenSize\u003d1080x1920, networkConnectionEnabled\u003dtrue, warnings\u003d{}, databaseEnabled\u003dfalse, deviceName\u003demulator-5554, platform\u003dLINUX, deviceUDID\u003demulator-5554, appActivity\u003dcom.redmart.redmart.usecases.start.StartActivity, fullreset\u003dtrue, desired\u003d{app\u003dC:\\Users\\optimus\\workspace\\assignment.rahul\\target\\test-classes\\redmart.com.apk, appPackage\u003dcom.redmart.redmart, appActivity\u003dcom.redmart.redmart.usecases.start.StartActivity, fullreset\u003dtrue, platformVersion\u003d5.1.1, platformName\u003dAndroid, deviceName\u003demulator-5554}, platformVersion\u003d5.1.1, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, deviceModel\u003dAndroid SDK built for x86_64, platformName\u003dAndroid, deviceManufacturer\u003dunknown}]\nSession ID: d59612b4-d69e-4b7f-a5b8-f541e3622c43\n*** Element info: {Using\u003dcss selector, value\u003dtext \u003d \u0027My Account\u0027}\r\n\tat sun.reflect.GeneratedConstructorAccessor14.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:27)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:358)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:447)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByCssSelector(DefaultGenericMobileDriver.java:91)\r\n\tat io.appium.java_client.AppiumDriver.findElementByCssSelector(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementByCssSelector(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:426)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:350)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:37)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:809)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:41)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat com.redmart.pages.BasePage.waitForVisibilityOf(BasePage.java:53)\r\n\tat com.redmart.stepdefs.AccountSteps.account_should_be_visible(AccountSteps.java:14)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:80)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:673)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:842)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1166)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.runWorkers(TestRunner.java:1178)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:757)\r\n\tat org.testng.TestRunner.run(TestRunner.java:608)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:334)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:329)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:291)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:240)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1158)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1083)\r\n\tat org.testng.TestNG.run(TestNG.java:999)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:132)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:230)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:76)\r\n",
  "status": "failed"
});
});