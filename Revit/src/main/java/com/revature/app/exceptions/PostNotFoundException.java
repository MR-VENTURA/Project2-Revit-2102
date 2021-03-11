package com.revature.app.exceptions;

@SuppressWarnings("serial")
public class PostNotFoundException extends Exception {
	public PostNotFoundException () {
		super("The user tried to access a post that does not exist.");
	}
}
