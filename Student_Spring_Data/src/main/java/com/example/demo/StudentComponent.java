package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class StudentComponent {
@GetMapping("/")
	
	public String m1() {		
		return "Spring boot is working";	
	}
	
	List<Student> pp=new ArrayList<>();
	
	@GetMapping("/all")
	public List<Student> m2() {
		StudentDA da = new StudentDA();
		pp = da.allstudent();

		return pp;
	}
	
	@PostMapping("/save" )
	public Student dosave(@RequestBody Student s) {
		StudentDA da = new StudentDA();
               Student st=  da.save(s);

		return st;
	}
}
