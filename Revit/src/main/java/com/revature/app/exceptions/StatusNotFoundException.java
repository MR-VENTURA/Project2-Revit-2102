package com.revature.app.exceptions;

@SuppressWarnings("serial")
public class StatusNotFoundException extends Exception {
	public StatusNotFoundException () {
		super("The user tried to access a status that does not exist.");
	}
}
