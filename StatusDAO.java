package com.revature.data;

import org.springframework.stereotype.Repository;
import com.revature.beans.Status;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface StatusDAO extends JpaRepository<Status , Integer> {

}
