package com.revature.app.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.app.beans.People;


@Repository
public interface PeopleDAO extends JpaRepository<People, Integer>{

}
