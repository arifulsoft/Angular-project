package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class StudentDa {
	
	Connection con;
	PreparedStatement pst;
	
	public List<Student>allstudent(){
		List<Student>slist=new ArrayList<>();
		try {
			con=DriverManager.getConnection("jdbc:mysql://localhost/springdb","root","nclc123456");
			pst=con.prepareStatement("select * from student");
			ResultSet rs=pst.executeQuery();
			while(rs.next()) {
				slist.add(new Student(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getString(4)));
			}
			
		} catch (Exception e) {
			// TODO: handle exception
		}
		
		return slist;
	}

	
	

}
