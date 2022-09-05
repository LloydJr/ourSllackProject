package Sllacker.ChatBox.controllers;


import Sllacker.ChatBox.models.Channel;
import Sllacker.ChatBox.models.User;
import Sllacker.ChatBox.repositories.ChannelRepository;
import Sllacker.ChatBox.repositories.MessageRepository;
import Sllacker.ChatBox.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import Sllacker.ChatBox.controllers.ChannelController;



import java.util.List;

@Controller
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/user")
public class UserController {




  private UserRepository repository;
  private ChannelRepository channelRepository;


@Autowired
  public UserController (UserRepository repository, ChannelRepository channelRepository)
    {this.repository = repository; this.channelRepository = channelRepository;}


    @PostMapping
    public @ResponseBody ResponseEntity <User> postUser(@RequestBody User user, Channel channel){

        channel = channelRepository.findByChannelName("The Lounge");
        channel.getChannel_users().add(user);
        user.getChannels().add(channel);
        repository.save(user);
        channelRepository.save(channel);
      return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @GetMapping
    public @ResponseBody ResponseEntity<List<User>> findAllUsers(){
      return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
    }

    @GetMapping("find/{userName}")
  public @ResponseBody ResponseEntity<User> getUser(@PathVariable String userName, User user){
     for(int i = 0; i<repository.findAll().size(); i++){
      if(userName.equalsIgnoreCase(repository.findAll().get(i).getUserName())){
          user = repository.findByUsername(userName);
          return new ResponseEntity<>(user, HttpStatus.OK );
      } 
     }

     return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      
      //Optional caters for if you don't have a particular user. In that case it just returns null.
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
