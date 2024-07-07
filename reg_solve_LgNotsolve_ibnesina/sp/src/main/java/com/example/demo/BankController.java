package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.Registration;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BankController {
	@PostMapping("/save" )
	public Bank dosave(@RequestBody Bank s) {
		BankDa da = new BankDa();
		Bank st=  da.save(s);

		return st;
	}
	
List<Bank> pp=new ArrayList<>();
	
	@GetMapping("/all")
	public List<Bank> m2() {
		BankDa da = new BankDa();
		pp = da.allstudent();

		return pp;
	}


	@GetMapping("/{username}/{password}")
	public List<Bank> m3(@PathVariable String username,@PathVariable String password) {
		BankDa da = new BankDa();
		pp = da.searchById(username,password);
		return pp;
	}
}
