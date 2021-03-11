package com.revature.app.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.app.beans.Posts;

@Repository
public interface PostsDAO extends JpaRepository<Posts, Integer>{

}
