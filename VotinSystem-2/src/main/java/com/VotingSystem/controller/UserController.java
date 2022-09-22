package com.VotingSystem.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.VotingSystem.entity.UserDTO;
import com.VotingSystem.entity.UserEntity;
import com.VotingSystem.exception.UserNotFoundException;
import com.VotingSystem.service.UserService;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"},
allowedHeaders = "*") // prep-work 2> @RestController
public class UserController {
	@Autowired
	private UserService userService;
	
	@PostMapping("user")
    public UserEntity adduserEntity(@Validated@RequestBody  UserDTO  userDTO){
         UserEntity  userEntity = new  UserEntity(userDTO.getId(), userDTO.getName(), userDTO.getAddress(), userDTO.getDOB(), userDTO.getGender(), userDTO.getContact(), userDTO.getDistrict());
                return this.userService.addUserEntity( userEntity);
    }
   
	@PutMapping("user")
    public UserEntity updateuserEntity(@RequestBody UserDTO userDTO) throws UserNotFoundException {
        return this.userService.updateUserEntity(userDTO);
    }
    
    @GetMapping("users")
    public List< UserEntity> getAllUserEntitys(){
        return this.userService.showUserEntitys();
    }
    
    @GetMapping("user/{id}")
    public UserEntity getUserEntityDetailsById(@Validated@PathVariable("id") Integer userEntityId) throws UserNotFoundException {
        return this.userService.getUserEntityById(userEntityId);
        
    }
    @DeleteMapping("user/{id}")
    public UserEntity deleteUserEntityById(@PathVariable("id") Integer id )throws UserNotFoundException {
        return this.userService.deleteUserEntityById(id);
    
    }
}
