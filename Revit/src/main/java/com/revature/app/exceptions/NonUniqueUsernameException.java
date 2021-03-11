package com.revature.app.exceptions;

@SuppressWarnings("serial")
public class NonUniqueUsernameException extends Exception {
	public NonUniqueUsernameException () {
		super("The user tried to use a username that already exists.");
	}
}
