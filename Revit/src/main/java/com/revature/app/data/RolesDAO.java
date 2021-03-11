package com.revature.app.data;

import org.springframework.stereotype.Repository;
import com.revature.app.beans.Roles;
import com.revature.app.exceptions.RoleNotFoundException;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface RolesDAO extends JpaRepository<Roles , Integer> {
	public Roles findByRoleID(Integer id) throws RoleNotFoundException;
}
