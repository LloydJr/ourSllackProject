package Sllacker.ChatBox.controllers;

import Sllacker.ChatBox.models.Message;
import Sllacker.ChatBox.models.User;
import Sllacker.ChatBox.repositories.MessageRepository;
import Sllacker.ChatBox.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/message")
public class MessageController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private MessageRepository messageRepository;

    private List<Message> messageList = new ArrayList<>();

    @Autowired
    public void Repo(MessageRepository messageRepository, UserRepository userRepository){
        this.userRepository = userRepository;
        this.messageRepository = messageRepository;
    }

    @PostMapping("/{userName}")
    public @ResponseBody ResponseEntity<Message> create(@PathVariable String userName, @RequestBody Message message, User user){

        for(int i = 0; i<userRepository.findAll().size(); i++){
            if(userName.equalsIgnoreCase(userRepository.findAll().get(i).getUserName())){
                user = userRepository.findAll().get(i);
                message.setUser(user);
                messageRepository.save(message);
                user.getMessages().add(message);
            }
        }

        return new ResponseEntity<>(message, HttpStatus.OK);
    }

//    @PutMapping("/{userName}")
//    public @ResponseBody ResponseEntity<User> findAndUpdateMessage(@PathVariable String userName){
//        for(int i = 0; i<userRepository.findAll().size(); i++){
//            if(userName.equalsIgnoreCase(userRepository.findAll().get(i).getUserName())){
//
//            }
//        }
//    }



    @GetMapping("/{userName}")
    public @ResponseBody ResponseEntity<User> findUserName(User user, @PathVariable String userName){
        for(int i = 0; i<userRepository.findAll().size(); i++){
            if(userName.equalsIgnoreCase(userRepository.findAll().get(i).getUserName())){
                user = userRepository.findAll().get(i);
            }
        }


        return new ResponseEntity<>(user, HttpStatus.NOT_FOUND);
    }

    public List<Message> getMessageList() {
        return messageList;
    }

    public void setMessageList(List<Message> messageList) {
        this.messageList = messageList;
    }
}