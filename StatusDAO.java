package com.revature.data;

import org.springframework.stereotype.Repository;

@Repository
public interface StatusDAO extends JpaRepository<Status , Integer> {

}
