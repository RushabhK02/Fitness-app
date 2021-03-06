package com.f2f.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.f2f.app.models.PlanDetail;
import com.f2f.app.models.User;
import com.f2f.app.models.UserDietRecord;
import com.f2f.app.models.UserDietRecordPK;

public interface UserDietRecordRepository extends CrudRepository<UserDietRecord, UserDietRecordPK> {

	@Query("SELECT u FROM UserDietRecord u where u.user=:user")
	List<UserDietRecord> findByUserId(@Param("user") User user);
	
	@Query("SELECT u FROM UserDietRecord u where u.user=:user and u.id.allotmentId=:allotmentId")
	List<UserDietRecord> findByUserIdAndAllotment(@Param("user") User user, @Param("allotmentId") int allotmentId);
	
	@Query("SELECT u FROM UserDietRecord u where u.user=:user and u.id.allotmentId=:allotmentId and u.planDetail=:planDetail")
	UserDietRecord findByUserIdAndAllotmentAndDay(@Param("user") User user, @Param("allotmentId") int allotmentId,
												  @Param("planDetail") PlanDetail planDetail);

	
}
