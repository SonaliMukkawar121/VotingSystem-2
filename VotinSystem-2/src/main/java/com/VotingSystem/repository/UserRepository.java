package com.VotingSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.VotingSystem.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Integer>{

}
