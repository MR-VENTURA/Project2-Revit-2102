package com.revature.data;

import org.springframework.stereotype.Repository;

@Repository
public interface PeopleDAO  extends JpaRepository<People , Integer>{
	
}
