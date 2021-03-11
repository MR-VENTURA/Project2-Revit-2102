package com.revature.app.exceptions;

@SuppressWarnings("serial")
public class RoleNotFoundException extends Exception {
	public RoleNotFoundException () {
		super("The user tried to access a role that does not exist.");
	}
}
