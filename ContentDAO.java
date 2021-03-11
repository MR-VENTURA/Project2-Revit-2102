package com.revature.data;

import org.springframework.stereotype.Repository;

@Repository
public interface ContentDAO extends JpaRepository<Content , Integer> {

}
