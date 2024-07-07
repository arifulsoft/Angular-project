package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class BankDa {

	public Bank save(Bank s) {

		try {
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost/bank", "root", "nclc123456");
			PreparedStatement pst = con.prepareStatement("INSERT INTO registration VALUES(?,?,?)");
			pst.setString(1, s.getUsername());
			pst.setString(2, s.getEmail());
			pst.setString(3, s.getPassword());
			
			pst.executeUpdate();

		} catch (Exception e) {
			// TODO: handle exception
		}

		return s;
	}
	
//	------------------------------- show data ------------------------------------------
	public List<Bank> allstudent() {
		List<Bank> slist = new ArrayList<>();
		try {
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost/bank", "root", "nclc123456");
			PreparedStatement pst = con.prepareStatement("select * from registration");
			ResultSet rs = pst.executeQuery();
			while (rs.next()) {
				slist.add(new Bank(rs.getString(1), rs.getString(2), rs.getString(3)));
			}

		} catch (Exception e) {
			// TODO: handle exception
		}

		return slist;
	}

	public List<Bank>searchById(String username, String password) {
		List<Bank> slist = new ArrayList<>();
		try {
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost/bank", "root", "nclc123456");
			PreparedStatement pst1 = con.prepareStatement("select * from login where username=? AND password=?");
			pst1.setString(1, username);
			pst1.setString(2, password);
			ResultSet rs1 = pst1.executeQuery();

			PreparedStatement pst;

			ResultSet rs=null;
			if (rs1.next()==true) {
				pst = con.prepareStatement("select * from registration where username=?");
				pst.setString(1, username);
				rs = pst.executeQuery();
				
				while (rs.next()) {
					slist.add(new Bank(rs.getString(1),rs.getString(2),rs.getString(3)));
				}
			}else {
				slist.clear();
				
			}

		} catch (Exception e) {
			// TODO: handle exception
		}

		return slist;
	}

}
