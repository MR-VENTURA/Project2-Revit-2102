package com.revature.data;

import org.springframework.stereotype.Repository;
import com.revature.beans.Roles;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface RolesDAO extends JpaRepository<Roles , Integer> {

}

