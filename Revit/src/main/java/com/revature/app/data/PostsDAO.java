package com.revature.app.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.app.beans.People;
import com.revature.app.beans.Posts;
import com.revature.app.exceptions.PersonNotFoundException;
import com.revature.app.exceptions.PostNotFoundException;

@Repository
public interface PostsDAO extends JpaRepository<Posts, Integer>{
	public Posts findByPostId(Integer id) throws PostNotFoundException;
	public People getPeopleByPostId(Integer id) throws PersonNotFoundException;;
	
	
}
