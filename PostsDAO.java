package com.revature.data;

import org.springframework.stereotype.Repository;
import com.revature.beans.Posts;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface PostsDAO extends JpaRepository<Posts, Integer> {

}
