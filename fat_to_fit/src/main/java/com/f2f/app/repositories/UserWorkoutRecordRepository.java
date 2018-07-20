package com.f2f.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.f2f.app.constants.ExerciseStatus;
import com.f2f.app.models.PlanDetail;
import com.f2f.app.models.User;
import com.f2f.app.models.UserWorkoutRecord;
import com.f2f.app.models.UserWorkoutRecordPK;

public interface UserWorkoutRecordRepository extends CrudRepository<UserWorkoutRecord, UserWorkoutRecordPK> {
	
	@Query("SELECT u FROM UserWorkoutRecord u where u.user=:user")
	List<UserWorkoutRecord> findByUserId(@Param("user") User user);
	
	@Query("SELECT u FROM UserWorkoutRecord u where u.user=:user and u.id.allotmentId=:allotmentId and u.status=:status")
	List<UserWorkoutRecord> findByUserIdAndAllotment(@Param("user") User user, @Param("allotmentId") int allotmentId,
													 @Param("status") ExerciseStatus status);
	
	@Query("SELECT u FROM UserWorkoutRecord u where u.user=:user and u.id.allotmentId=:allotmentId and u.planDetail=:planDetail")
	UserWorkoutRecord findByUserIdAndAllotmentAndDay(@Param("user") User user, @Param("allotmentId") int allotmentId,
												     @Param("planDetail") PlanDetail planDetail);

	@Query("SELECT u FROM UserWorkoutRecord u where u.user=:user and u.id.allotmentId=:allotmentId and u.status=:status")
	List<UserWorkoutRecord> findByUserIdAndAllotmentAndStatus(@Param("user") User user, @Param("allotmentId") int allotmentId, @Param("status") ExerciseStatus status);
}
