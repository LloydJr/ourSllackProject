package Sllacker.ChatBox.controllers;

import Sllacker.ChatBox.models.DirectMessage;
import Sllacker.ChatBox.models.Message;
import Sllacker.ChatBox.models.User;
import Sllacker.ChatBox.repositories.DirectMessageRepository;
import Sllacker.ChatBox.repositories.MessageRepository;
import Sllacker.ChatBox.repositories.UserRepository;
import Sllacker.ChatBox.services.DirectMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/dm")
public class DirectMessageController {

    @Autowired
    private DirectMessageService service;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private final DirectMessageRepository repository;

    @Autowired
    private MessageRepository messageRepository;

    public DirectMessageController(DirectMessageRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public ResponseEntity<List<DirectMessage>> getListDm() {
        List<DirectMessage> directMessageList = repository.findAll();
        return new ResponseEntity<>(directMessageList, HttpStatus.OK);
    }
    @GetMapping("/{userName}")
    public ResponseEntity<User> getDm(@PathVariable String name) {
        User user = null;
        for (int i = 0; i < userRepository.findAll().size(); i++) {
            if (name.equals(userRepository.findAll().get(i).getUserName())) {
                user = userRepository.findAll().get(i);
            }
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
    @PostMapping("/{userName}/{userName1}")
    public ResponseEntity<List<DirectMessage>> postDm(@PathVariable String userName, @PathVariable String userName1,
                                       User user, User user1, Message message) {
        for( int i = 0; i < userRepository.findAll().size(); i ++) {
            if (userName.equals(userRepository.findAll().get(i).getUserName())) {
                user = userRepository.findAll().get(i);
            }
            else if(userName1.equals(userRepository.findAll().get(i).getUserName())) {
                user1 = userRepository.findAll().get(i);
            }
        }
//        for (int i = 0; i < userRepository.findAll().size(); i++) {
//            if (userName.equals(userRepository.findAll().get(i).getUserName())) {
                message.setUser(user);
                message.setUser(user1);
                user.getMessages().add(message);
                user1.getMessages().add(message);
                messageRepository.save(message);
                userRepository.save(user);
                userRepository.save(user1);
//            }
//        }

        return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
    }
    @PutMapping("/{userName}")
    public ResponseEntity<Object> putDm(@PathVariable DirectMessage message) {
        return new ResponseEntity<>(service.putDirectMessage(message), HttpStatus.OK);
    }
//    @DeleteMapping("/{message_id}")
//    public ResponseEntity<Boolean> deleteDm(@PathVariable Long messageId) {
//        return new ResponseEntity<>(service.delete(messageId), HttpStatus.OK);
//    }
}
