package Sllacker.ChatBox.controllers;


import Sllacker.ChatBox.models.User;
import Sllacker.ChatBox.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
  private UserRepository repository;

  public UserController (UserRepository repository) {this.repository = repository;}

    @PostMapping
    public @ResponseBody ResponseEntity <User> postUser(@RequestBody User user){
      user = repository.save(user);
      return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @GetMapping
  public @ResponseBody ResponseEntity<List<User>> getUser(){
      List<User> list = repository.findAll();
     return new ResponseEntity<>(list, HttpStatus.OK ); //Optional caters for if you don't have a particular user. In that case it just returns null.
    }


    @PutMapping
    public ResponseEntity<User> putUser(@PathVariable Long id, @RequestBody User user) {
      return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @DeleteMapping ("/{userName}")
  public ResponseEntity<String> deleteUser(@PathVariable String userName, User user){
     for(int i = 0; i<repository.findAll().size(); i++){
       if(userName.equalsIgnoreCase(repository.findAll().get(i).getUserName())){
         user = repository.findAll().get(i);
       }
     }
     repository.delete(user);
           return new ResponseEntity<>("user removed",HttpStatus.OK);
    }
}
