package com.revature.data;

import org.springframework.stereotype.Repository;
import com.revature.beans.People;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface PeopleDAO  extends JpaRepository<People , Integer>{
	
}
