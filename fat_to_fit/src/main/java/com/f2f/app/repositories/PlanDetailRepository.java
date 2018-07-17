package com.f2f.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.f2f.app.models.PlanDetail;
import com.f2f.app.models.PlanDetailPK;

public interface PlanDetailRepository extends CrudRepository<PlanDetail, PlanDetailPK> {

	@Query("SELECT p FROM PlanDetail p where p.id.planId=:planId")
	List<PlanDetail> findByPlanId(@Param("planId") int planId);
	
	
}
