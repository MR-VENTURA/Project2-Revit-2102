package com.revature.app.exceptions;

@SuppressWarnings("serial")
public class ContentNotFoundException extends Exception {
		public ContentNotFoundException () {
			super("The user tried to access content that does not exist.");
		}

}
