package com.redmart.testsetup;

import java.net.MalformedURLException;

public interface AndroidDriverSetup {
	 public void prepareAndroidDriver() throws MalformedURLException, InterruptedException;
	 public void destroyAndroidDriver();
}
