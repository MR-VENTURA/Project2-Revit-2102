package com.revature.app.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.app.beans.Votes;

@Repository
public interface VotesDAO extends JpaRepository<Votes, Integer> {
	public Votes findByAuthorId(Integer id);
}
