package Sllacker.ChatBox.controllers;

import Sllacker.ChatBox.models.User;
import Sllacker.ChatBox.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UserController {

    @Autowired
  private UserService service;

  public UserController (UserService service) {this.service = service;}

//  @RequestMapping("/user/")
//  public ResponseEntity<Iterable<User>> index() {
//      return new ResponseEntity<>(service.index(), HttpStatus.OK);
//  }

//  @GetMapping("/user/{id}")
//  public ResponseEntity<User> show(@PathVariable Long id) {
//      return new ResponseEntity<>(service.show(id), HttpStatus.OK);
//  }

}
