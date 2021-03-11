package com.revature.app.data;

import org.springframework.stereotype.Repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.app.beans.Content;
import com.revature.app.beans.Posts;
import com.revature.app.exceptions.ContentNotFoundException;
import com.revature.app.exceptions.PostNotFoundException;


@Repository
public interface ContentDAO extends JpaRepository<Content, Integer>{
	public Content findByContentId(Integer id) throws ContentNotFoundException;
	public Set<Posts> getPostByContentId(Integer id) throws PostNotFoundException, ContentNotFoundException;
}
