package com.f2f.app.repositories;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.f2f.app.models.Admin;

public interface AdminRepository extends CrudRepository<Admin, Integer> {
	
	@Modifying
	@Transactional
    @Query("UPDATE Admin a SET a.clients = :clients WHERE a.id = :adminId")
	void updateClient(@Param("clients") String clients,@Param("adminId") int adminId );
	
	@Query("SELECT a.clients FROM Admin a where a.id = :adminId")
	String findClientsById(@Param("adminId") int adminId );

}
