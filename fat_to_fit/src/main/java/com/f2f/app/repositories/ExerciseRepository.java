package com.f2f.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.f2f.app.models.Exercise;

public interface ExerciseRepository extends CrudRepository<Exercise, Integer> {

	@Query("SELECT e FROM Exercise e where e.bodyPartAffected=UPPER(:bodyPartAffected)")
	List<Exercise> findByBodyPartAffected(@Param("bodyPartAffected") String bodyPartAffected);

	@Query("SELECT distinct e.bodyPartAffected FROM Exercise e")
	List<String> findDistinctBodyPartsAffected();

	@Query("SELECT e FROM Exercise e where e.exName=:exName")
	Exercise findExerciseByName(@Param("exName") String exName);
}
