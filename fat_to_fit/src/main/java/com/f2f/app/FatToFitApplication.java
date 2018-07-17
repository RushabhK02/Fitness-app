package com.f2f.app;


import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.f2f.app.models.Allotment;
import com.f2f.app.models.ExerciseStatus;
import com.f2f.app.models.Plan;
import com.f2f.app.models.PlanDetail;
import com.f2f.app.models.PlanDetailPK;
import com.f2f.app.models.UserDietRecord;
import com.f2f.app.models.UserDietRecordPK;
import com.f2f.app.models.UserWorkoutRecord;
import com.f2f.app.models.UserWorkoutRecordPK;
import com.f2f.app.repositories.AdminRepository;
import com.f2f.app.repositories.AllotmentRepository;
import com.f2f.app.repositories.ExerciseRepository;
import com.f2f.app.repositories.PlanDetailRepository;
import com.f2f.app.repositories.PlanRepository;
import com.f2f.app.repositories.UserDietRecordRepository;
import com.f2f.app.repositories.UserRepository;
import com.f2f.app.repositories.UserWorkoutRecordRepository;

@SpringBootApplication
@EnableJpaRepositories
@EnableTransactionManagement
public class FatToFitApplication {

	public static void main(String[] args) {
		SpringApplication.run(FatToFitApplication.class, args);
	}

	@Bean
	@Autowired
	public CommandLineRunner test(PlanDetailRepository planDetailRepository, PlanRepository planRepository,
			AdminRepository adminRepository, AllotmentRepository allotmentRepository,
			ExerciseRepository exerciseRepository, UserDietRecordRepository userDietRecordRepository,
			UserWorkoutRecordRepository userWorkoutRecordRepository, UserRepository userRepository) {
		return args -> {

			System.out.println("planDetailRepository:" + planDetailRepository.count());
			PlanDetailPK planDetailPK = new PlanDetailPK();
			planDetailPK.setPlanId(1);
			planDetailPK.setDay(1);
			PlanDetail planDetail = new PlanDetail();
			planDetail.setId(planDetailPK);
			planDetail.setDayDetails("2,5,10;3,5,5");

//			planDetailRepository.save(planDetail);
//			System.out.println(planDetailRepository.findByPlanId(2));
//			planDetailRepository.deleteById(planDetailPK);
//			System.out.println(planDetailRepository.findAll());
			Plan plan = planRepository.findById(1).get();

			System.out.println("planRepository:" + planRepository.count());
			System.out.println("adminRepository:" + adminRepository.count());
//			adminRepository.deleteById(1);
//			Admin admin = new Admin();
//			admin.setAdminId(1);
//			admin.setFirstName("Chets");
//			admin.setLastName("Kallu");
//			admin.setPassword("Hero");
//			admin.setUsername("chets.kallu@gmail.com");
//			admin.setClients("1,2,3");
//			adminRepository.save(admin);
//			adminRepository.updateClient("1,2,3,4,5", 2);
			System.out.println("adminRepository:"+adminRepository.findClientsById(2));

			System.out.println("allotmentRepository:" + allotmentRepository.count());
			Date date = new Date();
			Allotment allotment= new Allotment();
			allotment.setAllotmentId(1);
			allotment.setAdmin(adminRepository.findById(2).get());
			allotment.setUser(userRepository.findById(1).get());
			allotment.setDietPlanId(plan);
			allotment.setWorkoutPlanId(plan);
			allotment.setStartDate(date);
			allotmentRepository.save(allotment);
//			System.out.println(allotmentRepository.findAllotmentsByUserId(userRepository.findById(1).get()));
//			System.out.println(allotmentRepository.findAllotmentsByUserIdAndDiet(plan,userRepository.findById(1).get()));
//			System.out.println(allotmentRepository.findAllotmentsByUserIdAndAfterDate(date,userRepository.findById(1).get()));
//			System.out.println(allotmentRepository.findFirstByOrderByAllotmentIdDesc(1));
//			UserDietRecord userDietRecord = new UserDietRecord();
//			userDietRecord.setCalorieIntake(1400);
//			userDietRecord.setPlanDetail(planDetailRepository.findById(planDetailPK).get());
//			userDietRecord.setUser(userRepository.findById(1).get());
//			UserDietRecordPK dietRecordPK =new UserDietRecordPK();
//			dietRecordPK.setAllotmentId(1);
//			dietRecordPK.setDay(1);
//			userDietRecord.setId(dietRecordPK);
//			userDietRecordRepository.save(userDietRecord);
//			System.out.println(userDietRecordRepository.findByUserIdAndAllotment(userRepository.findById(1).get(), 1));
			
//			UserWorkoutRecord userWorkoutRecord = new UserWorkoutRecord();
//			userWorkoutRecord.setPlanDetail(planDetail);
//			userWorkoutRecord.setSetsCompleted(2);
//			userWorkoutRecord.setStatus(ExerciseStatus.INCOMPLETE);
//			userWorkoutRecord.setUser(userRepository.findById(1).get());
			UserWorkoutRecordPK recordPK =new UserWorkoutRecordPK();
			recordPK.setAllotmentId(1);
			recordPK.setDay(1);
			recordPK.setExId(3);
//			userWorkoutRecord.setId(recordPK);
//			userWorkoutRecordRepository.save(userWorkoutRecord);
			System.out.println(userWorkoutRecordRepository.findById(recordPK));
			System.out.println();
			
			System.out.println("exerciseRepository:" + exerciseRepository.count());
//			List <Exercise> bodyParts=exerciseRepository.findByBodyPartAffected("BICEPS");
//			for(Exercise bp:bodyParts) {
//			System.out.println("exerciseRepository:"+bp);
//			}
//			List<Plan> plans= planRepository.findWorkoutPlans();
//			for(Plan plan:plans) {
//				System.out.println("planRepository:"+plan);
//				}

			System.out.println("userDietRecordRepository:" + userDietRecordRepository.count());
			System.out.println("userWorkoutRecordRepository:" + userWorkoutRecordRepository.count());
			System.out.println("userRepository:" + userRepository.count());
//			User user = new User();
//			user.setUserId(1);
//			user.setAge(23);
//			user.setFirstName("Akash");
//			user.setLastName("Lodha");
//			user.setHeightCms(180);
//			user.setWeightKgs(70);
//			user.setUsername("akash.lodha@wissen.com");
//			user.setPassword("wissen");
//			userRepository.save(user);
			userRepository.updateCurrentDietPlan(plan ,date, 1);
			userRepository.updateCurrentWorkoutPlan(plan ,date ,1);
			System.out.println(userRepository.findPasswordByUsername("akash.lodha@wissen.com"));
			System.out.println(userRepository.findStartDateByUserId(1));
			
		};
	}
}
