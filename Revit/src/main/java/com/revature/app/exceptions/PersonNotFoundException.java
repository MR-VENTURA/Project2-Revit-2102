package com.revature.app.exceptions;

@SuppressWarnings("serial")
public class PersonNotFoundException extends Exception {
	public PersonNotFoundException () {
		super("The user tried to access a person that does not exist.");
	}
}
