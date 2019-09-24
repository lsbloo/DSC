package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.repository.AlunoRepository;
import com.example.demo.repository.ProfessorRepository;

/**
 * 
 * @author osvaldoairon
 *
 */
@Service
public class UserDetailServiceImpl implements UserDetailsService  {
	

	
	
	
	private AlunoRepository alunoRepository;
	
	private ProfessorRepository professorRepository;
	
	
	@Autowired
	public UserDetailServiceImpl( AlunoRepository alunoRepository, ProfessorRepository professorRepository) {
		this.alunoRepository=alunoRepository;
		this.professorRepository=professorRepository;
	}


	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		return null;
	}

	
	
	
}
