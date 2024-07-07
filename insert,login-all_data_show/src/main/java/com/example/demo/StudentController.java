package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class StudentController {
	@GetMapping("/")
	
	public String m1() {		
		return "Spring boot is working";	
	}
	
	List<Student>slist=new ArrayList<>();
	
@GetMapping("/all")
	
	public List<Student>m2() {
	StudentDa da=new StudentDa();
	slist=da.allstudent();
	
	return slist;	
	}

}
