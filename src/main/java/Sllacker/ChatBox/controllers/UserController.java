package Sllacker.ChatBox.controllers;

import Sllacker.ChatBox.models.User;
import Sllacker.ChatBox.repositories.UserRepository;
import Sllacker.ChatBox.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
  public @ResponseBody ResponseEntity<List<User>> getUser(@PathVariable Long id){
     return new ResponseEntity<>(repository.findAll(), HttpStatus.OK ); //Optional caters for if you don't have a particular user. In that case it just returns null.
    }
}
