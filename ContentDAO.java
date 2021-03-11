package com.revature.data;

import org.springframework.stereotype.Repository;
import com.revature.beans.Content;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface ContentDAO extends JpaRepository<Content , Integer> {

}

