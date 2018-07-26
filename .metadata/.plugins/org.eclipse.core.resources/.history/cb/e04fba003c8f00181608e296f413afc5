package com.f2f.app.service;

import java.util.Date;
import java.util.List;

import com.f2f.app.models.*;
import com.f2f.app.constants.*;

public interface AdminService {
	
	Admin login(String adminName, String password);

	List<UserWorkoutRecord> viewUserWorkoutActivity(DateQueryType queryType, Date date, int userId);

	List<UserWorkoutRecord> viewUserWorkoutActivityByStatus(DateQueryType queryType, ExerciseStatus status, int userId);

	List<UserWorkoutRecord> viewUserCurrentWorkoutActivity(int userId);
	
	List<UserLite> viewClients(int adminId);

	User viewClientInfo(int userId);

	boolean createNewPreset(Plan plan, List<PlanDetail> planDetails);

	boolean deletePreset(int planId);

	boolean assignPresetToUser(int userId, int adminId, int workoutPlanId, int dietPlanId);

	List<UserDietRecord> viewUserDietActivity(DateQueryType queryType, Date date, int userId);
	
	List<UserDietRecord> viewUserCurrentDietActivity(int userId);

	List<UserLite> viewNotifications(int adminId);
	
	void addClient(int adminId,int userId);
}
