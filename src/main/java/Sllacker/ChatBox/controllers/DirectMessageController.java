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
    public ResponseEntity<String> getDm(@PathVariable String userName, User user) {
        for (int i = 0; i < userRepository.findAll().size(); i++) {
            if (userName.equals(userRepository.findAll().get(i).getUserName())) {
                user = userRepository.findAll().get(i);
            }
        }
        return new ResponseEntity<>(userName, HttpStatus.OK);
    }
    @PostMapping("/new/{userName}")
    public ResponseEntity<List<DirectMessage>> createDm(@PathVariable String userName, User user, @RequestBody DirectMessage dm) {
        for (int i = 0; i < userRepository.findAll().size(); i++) {
            if (userName.equalsIgnoreCase(userRepository.findAll().get(i).getUserName())) {
                user = userRepository.findAll().get(i);
            }
        }
        repository.save(dm);
        addUserToDm(dm.getDirectMessageName(), dm, userName, user);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/{directMessageName}")
    public ResponseEntity<DirectMessage> postDm(@RequestBody Message message, DirectMessage dm, @PathVariable String directMessageName) {

//        for( int i = 0; i < userRepository.findAll().size(); i ++) {
//            if (userName.equals(userRepository.findAll().get(i).getUserName())) {
//                user = userRepository.findAll().get(i);
//            }
//            else if(userName1.equals(userRepository.findAll().get(i).getUserName())) {
//                user1 = userRepository.findAll().get(i);
//            }
//        }
        for( int i = 0; i < repository.findAll().size(); i++) {
            if(directMessageName.equalsIgnoreCase(repository.findAll().get(i).getDirectMessageName())) {
                dm = repository.findAll().get(i);
            }
        }
        for (int i = 0; i < repository.findAll().size(); i++) {
            if (dm.getMessageList().equals(repository.findAll().get(i).getMessageList())) {
                dm = repository.findAll().get(i);
            }
        }

        for(int i = 0; i<dm.getUserList().size(); i++){
            dm.getUserList().get(i).getMessages().add(message);
        }


//                message.setUser(user);
//                message.setUser(user1);
//                user.getMessages().add(message);
//                user1.getMessages().add(message);
                dm.getMessageList().add(message);
//                dm.getUserList().add(user);
//                dm.getUserList().add(user1);
//                user.getDirectMessages().add(dm);
//                user1.getDirectMessages().add(dm);
                messageRepository.save(message);
//                userRepository.save(user);
//                userRepository.save(user1);
                repository.save(dm);


        return new ResponseEntity<>(dm, HttpStatus.OK);
    }
//    @PutMapping("/{userName}")
//    public ResponseEntity<DirectMessage> putDm(@PathVariable String userName, User user, DirectMessage dm, DirectMessageController postDm) {
//        postDm.createDm(userName, user, dm);
//
//        return new ResponseEntity<>(dm, HttpStatus.OK);
//    }
    @PutMapping("/add/{userName}/{directMessageName}")
    public ResponseEntity<List<DirectMessage>> addUserToDm (@PathVariable String directMessageName, DirectMessage dm,
                                                            @PathVariable String userName, User user) {
        for (int i = 0; i < repository.findAll().size(); i++) {
            if (directMessageName.equalsIgnoreCase(repository.findAll().get(i).getDirectMessageName())) {
                dm = repository.findAll().get(i);
            }
        }
        for (int i = 0; i < userRepository.findAll().size(); i++) {
            if (userName.equalsIgnoreCase(userRepository.findAll().get(i).getUserName())) {
                user = userRepository.findAll().get(i);
            }
        }
        dm.getUserList().add(user);
        user.getDirectMessages().add(dm);
        repository.save(dm);
        userRepository.save(user);

        return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
    }
//    @DeleteMapping("/{message_id}")
//    public ResponseEntity<Boolean> deleteDm(@PathVariable Long messageId) {
//        return new ResponseEntity<>(service.delete(messageId), HttpStatus.OK);
//    }
}
