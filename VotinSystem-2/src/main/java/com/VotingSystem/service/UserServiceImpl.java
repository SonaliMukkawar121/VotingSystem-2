package com.VotingSystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import com.VotingSystem.entity.UserDTO;
import com.VotingSystem.entity.UserEntity;
import com.VotingSystem.exception.UserNotFoundException;
import com.VotingSystem.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;

	@Override
	public UserEntity addUserEntity(UserEntity userEntity) {
		
		return this.userRepo.save(userEntity);
	}

	@Override
	public List<UserEntity> showUserEntitys() {
	
		return this.userRepo.findAll();
	}

	@Override
	
		public UserEntity updateUserEntity(UserDTO userDTO) throws UserNotFoundException {
	        Optional<UserEntity> userEntityOpt = this.userRepo.findById(userDTO.getId());
	        if(userEntityOpt.isEmpty())
	            throw new UserNotFoundException("User id does not exist to update. ");
	        UserEntity updateUserEntity = userEntityOpt.get();
	        updateUserEntity.setName(userDTO.getName());
	        updateUserEntity.setAddress(userDTO.getAddress());
	        updateUserEntity.setDOB(userDTO.getDOB());
	        updateUserEntity.setGender(userDTO.getGender());
	        updateUserEntity.setcontact(userDTO.getContact());
	        updateUserEntity.setDistrict(userDTO.getDistrict());
	        return this.userRepo.save(updateUserEntity);
	        
	}

	@Override
	public UserEntity getUserEntityById(@Validated Integer userEntityId) throws UserNotFoundException {
       Optional<UserEntity> userEntityOpt = this.userRepo.findById(userEntityId);
       if (userEntityOpt.isEmpty())
    	   throw new UserNotFoundException(" Id not found");
       return userEntityOpt.get();
	}

	@Override
	public UserEntity deleteUserEntityById(Integer id) throws UserNotFoundException {
		Optional<UserEntity> optuserEntity = this.userRepo.findById(id);
	       if (optuserEntity.isEmpty())
	    	   throw new UserNotFoundException("User Id does not exist to delete.");
		this.userRepo.deleteById(id);
		return optuserEntity.get();
	}


}
