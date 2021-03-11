package com.revature.data;

import org.springframework.stereotype.Repository;

@Repository
public interface PostsDAO extends JpaRepository<Posts, Integer> {

}
