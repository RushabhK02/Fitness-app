package com.f2f.app.service;

import java.util.Date;
import java.util.List;

import com.f2f.app.constants.DateQueryType;
import com.f2f.app.constants.ExerciseStatus;
import com.f2f.app.models.Admin;
import com.f2f.app.models.Exercise;
import com.f2f.app.models.Plan;
import com.f2f.app.models.PlanDetail;
import com.f2f.app.models.PlansList;
import com.f2f.app.models.User;
import com.f2f.app.models.UserDietRecord;
import com.f2f.app.models.UserLite;
import com.f2f.app.models.UserWorkoutRecord;

public interface AdminService {

	void addClient(int adminId, int userId);

	boolean assignPresetToUser(int userId, int adminId, int workoutPlanId, int dietPlanId);

	boolean createNewPreset(Plan plan, List<PlanDetail> planDetails);

	boolean deletePreset(int planId);

	List<Exercise> getExercises();

	PlansList getPlans();

	Admin login(String adminName, String password);

	User viewClientInfo(int userId);

	List<UserLite> viewClients(int adminId);

	List<UserLite> viewNotifications(int adminId);

	List<UserDietRecord> viewUserCurrentDietActivity(int userId);

	List<UserWorkoutRecord> viewUserCurrentWorkoutActivity(int userId);

	List<UserDietRecord> viewUserDietActivity(DateQueryType queryType, Date date, int userId);

	List<UserWorkoutRecord> viewUserWorkoutActivity(DateQueryType queryType, Date date, int userId);

	List<UserWorkoutRecord> viewUserWorkoutActivityByStatus(DateQueryType queryType, ExerciseStatus status, int userId);
}
