<<<<<<< HEAD
<<<<<<< HEAD
package com.revature.app.controllers;

import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.app.beans.People;
import com.revature.app.exceptions.NonUniqueUsernameException;
import com.revature.app.exceptions.PersonNotFoundException;
import com.revature.app.services.PeopleService;

@RestController
@CrossOrigin(origins="http://localhost:4200", allowCredentials="true")
@RequestMapping(path="/user")
public class PeopleController {
	private final PeopleService peopleServ;
	private ObjectMapper om = new ObjectMapper();
	
	@Autowired
	public PeopleController(PeopleService p) {
		this.peopleServ = p;
	}
	
	@GetMapping
	public ResponseEntity<People> checkLogin(HttpSession session) {
		People loggedPeople = (People) session.getAttribute("username");
		System.out.println("User is " + loggedPeople);
		if (loggedPeople == null)
			return ResponseEntity.badRequest().build();
		return ResponseEntity.ok(loggedPeople);
	}
	
	@PostMapping (path ="/login")
	public ResponseEntity<People> logIn(HttpSession session, @RequestBody String jsonBody) throws PersonNotFoundException {
		HashMap jb;
		try {
			jb = om.readValue(jsonBody, HashMap.class);
			People people = peopleServ.findPeopleByUsername(jb.get("username").toString());
			if (people != null) {
				if (people.getUserPass().equals(jb.get("password").toString())) {
					session.setAttribute("username", people);
					return ResponseEntity.ok(people);
				}
				return ResponseEntity.badRequest().build();
			}
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping
	public ResponseEntity<Void> registerUser(HttpSession session, @RequestBody People people) {
		try {
			peopleServ.addPeople(people);
		} catch (NonUniqueUsernameException e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok().build();
	}
	
	@PutMapping(path="/{id}")
	public ResponseEntity<Void> updateUser(HttpSession session, @PathVariable("id") Integer id, 
			@RequestBody People people) throws PersonNotFoundException {
		People loggedPeople = (People) session.getAttribute("username");
		if (loggedPeople != null && loggedPeople.getPeopleId().equals(id)) {
			peopleServ.updatePeople(people);
			return ResponseEntity.ok().build();
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
	}

}
=======
package com.revature.app.controllers;

import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.app.beans.People;
import com.revature.app.exceptions.NonUniqueUsernameException;
import com.revature.app.exceptions.PersonNotFoundException;
import com.revature.app.services.PeopleService;

@RestController
@CrossOrigin(origins="http://localhost:4200", allowCredentials="true")
@RequestMapping(path="/user")
public class PeopleController {
	private final PeopleService peopleServ;
	private ObjectMapper om = new ObjectMapper();
	
	@Autowired
	public PeopleController(PeopleService p) {
		this.peopleServ = p;
	}
	
	@GetMapping
	public ResponseEntity<People> checkLogin(HttpSession session) {
		People loggedPeople = (People) session.getAttribute("username");
		if (loggedPeople == null)
			return ResponseEntity.badRequest().build();
		return ResponseEntity.ok(loggedPeople);
	}
	
	@PostMapping (path ="/login")
	public ResponseEntity<People> logIn(HttpSession session, @RequestBody String jsonBody) throws PersonNotFoundException {
		HashMap jb;
		try {
			jb = om.readValue(jsonBody, HashMap.class);
			People people = peopleServ.findPeopleByUsername(jb.get("username").toString());
			if (people != null) {
				if (people.getUserPass().equals(jb.get("password").toString())) {
					session.setAttribute("username", people);
					return ResponseEntity.ok(people);
				}
				return ResponseEntity.badRequest().build();
			}
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping
	public ResponseEntity<Void> registerUser(HttpSession session, @RequestBody People people) {
		try {
			peopleServ.addPeople(people);
		} catch (NonUniqueUsernameException e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok().build();
	}
	
	@PutMapping(path="/{id}")
	public ResponseEntity<Void> updateUser(HttpSession session, @PathVariable("id") Integer id, 
			@RequestBody People people) throws PersonNotFoundException {
		People loggedPeople = (People) session.getAttribute("username");
		if (loggedPeople != null && loggedPeople.getPeopleId().equals(id)) {
			peopleServ.updatePeople(people);
			return ResponseEntity.ok().build();
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
	}

}
>>>>>>> 24230aa5963ae97384957caea8a193b4a53afcf8
=======
package com.revature.app.controllers;

import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.app.beans.People;
import com.revature.app.exceptions.NonUniqueUsernameException;
import com.revature.app.exceptions.PersonNotFoundException;
import com.revature.app.services.PeopleService;

@RestController
@CrossOrigin(origins="http://localhost:4200", allowCredentials="true")
@RequestMapping(path="/user")
public class PeopleController {
	private final PeopleService peopleServ;
	private ObjectMapper om = new ObjectMapper();
	
	@Autowired
	public PeopleController(PeopleService p) {
		this.peopleServ = p;
	}
	
	@GetMapping
	public ResponseEntity<People> checkLogin(HttpSession session) {
		People loggedPeople = (People) session.getAttribute("username");
		if (loggedPeople == null)
			return ResponseEntity.badRequest().build();
		return ResponseEntity.ok(loggedPeople);
	}
	
	@PostMapping (path ="/login")
	public ResponseEntity<People> logIn(HttpSession session, @RequestBody String jsonBody) throws PersonNotFoundException {
		HashMap jb;
		try {
			jb = om.readValue(jsonBody, HashMap.class);
			People people = peopleServ.findPeopleByUsername(jb.get("username").toString());
			if (people != null) {
				if (people.getUserPass().equals(jb.get("password").toString())) {
					session.setAttribute("username", people);
					return ResponseEntity.ok(people);
				}
				return ResponseEntity.badRequest().build();
			}
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return ResponseEntity.notFound().build();
	}
	
	@DeleteMapping
	public ResponseEntity<Void> logOut(HttpSession session) {
		session.invalidate();
		return ResponseEntity.ok().build();
	}

	@PostMapping
	public ResponseEntity<Void> registerUser(HttpSession session, @RequestBody People people) {
		try {
			peopleServ.addPeople(people);
		} catch (NonUniqueUsernameException e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok().build();
	}
	
	@PutMapping(path="/{id}")
	public ResponseEntity<Void> updateUser(HttpSession session, @PathVariable("id") Integer id, 
			@RequestBody People people) throws PersonNotFoundException {
		People loggedPeople = (People) session.getAttribute("username");
		if (loggedPeople != null && loggedPeople.getPeopleId().equals(id)) {
			peopleServ.updatePeople(people);
			return ResponseEntity.ok().build();
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
	}

}
>>>>>>> c176e0e1bd88c9db50ac0c1dd470e56cd3773fc7
