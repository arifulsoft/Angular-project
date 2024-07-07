package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class StudentDA {
	public List<Student> allstudent(){
		List<Student> slist=new ArrayList<>();
		try {
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost/springdb","root","nclc123456");
			PreparedStatement pst=con.prepareStatement("select * from student");
			ResultSet rs=pst.executeQuery();
			while(rs.next()) {
			slist.add(new Student(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getString(4)));
//				
			}
			
		} catch (Exception e) {
			// TODO: handle exception
		}
		
		return slist;
	}
	
//	-------------------------------- insert ----------------------------------------------
	
	public Student save(Student s){

		try {
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost/springdb","root","nclc123456");
			PreparedStatement pst=con.prepareStatement("INSERT INTO student VALUES(?,?,?,?)");
			pst.setInt(1, s.getId());
			pst.setString(2, s.getName());
			pst.setString(3, s.getEmail());
			pst.setString(4, s.getRound());
			int i=pst.executeUpdate();

			
		} catch (Exception e) {
			// TODO: handle exception
		}
		
		return s;
	}

}
