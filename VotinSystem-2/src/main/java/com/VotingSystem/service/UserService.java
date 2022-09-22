package com.VotingSystem.service;

import java.util.List;
import org.springframework.validation.annotation.Validated;

import com.VotingSystem.entity.UserDTO;
import com.VotingSystem.entity.UserEntity;
import com.VotingSystem.exception.UserNotFoundException;

public interface UserService {

	UserEntity addUserEntity(UserEntity userEntity);

	List<UserEntity> showUserEntitys();

	UserEntity updateUserEntity(UserDTO userDTO) throws UserNotFoundException;

	UserEntity getUserEntityById(@Validated Integer userEntityId) throws UserNotFoundException;

	UserEntity deleteUserEntityById(Integer id) throws UserNotFoundException;
    
}
