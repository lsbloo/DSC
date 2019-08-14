package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.demo.repository.AlunoRepository;
import com.example.demo.repository.ProfessorRepository;

/**
 * 
 * @author osvaldoairon
 *
 */
@Service
public class UserDetailServiceImpl    {
	

	
	
	
	private AlunoRepository alunoRepository;
	
	private ProfessorRepository professorRepository;
	
	
	@Autowired
	public UserDetailServiceImpl( AlunoRepository alunoRepository, ProfessorRepository professorRepository) {
		this.alunoRepository=alunoRepository;
		this.professorRepository=professorRepository;
	}

	
	
	
}
