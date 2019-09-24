package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Aluno;
import com.example.demo.models.Professor;
import com.example.demo.repository.AlunoRepository;
import com.example.demo.repository.ProfessorRepository;

/**
 * 
 * @author osvaldoairon
 *
 */
@Service
public class AuthenticationService implements ValidatorAuth{
	
	
	private AlunoRepository alunoRepository;
	
	private ProfessorRepository professorRepository;
	
	
	@Autowired
	public AuthenticationService(AlunoRepository alunoRepository, ProfessorRepository professorRepository) {
		this.alunoRepository=alunoRepository;
		this.professorRepository = professorRepository;
	}


	
	@Override
	public boolean checkCredentials(String username, String password) {
		// TODO Auto-generated method stub
		return false;
	}


	@Override
	public void createAccount(String username, String password, Aluno aluno) {
		// TODO Auto-generated method stub
		
	}


	@Override
	public void createAccount(String username, String password, Professor professor) {
		// TODO Auto-generated method stub
		
	}


	@Override
	public boolean checkIfAccountExist(String username) {
		// TODO Auto-generated method stub
		return false;
	}
	
	
	

}
