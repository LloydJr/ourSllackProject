package Sllacker.ChatBox.controllers;

import Sllacker.ChatBox.models.Channel;
import Sllacker.ChatBox.models.Message;
import Sllacker.ChatBox.models.User;
import Sllacker.ChatBox.repositories.ChannelRepository;
import Sllacker.ChatBox.repositories.MessageRepository;
import Sllacker.ChatBox.repositories.UserRepository;
import Sllacker.ChatBox.services.ChannelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/channel")
public class ChannelController {

    private ChannelRepository channelRepository;
    private UserRepository userRepository;
    private MessageRepository messageRepository;

    @Autowired
    public ChannelController(ChannelRepository channelRepository, UserRepository userRepository) {
        this.channelRepository = channelRepository;
        this.userRepository = userRepository;
        this.messageRepository = messageRepository;
    }

    @GetMapping("")
    public String getHomePage() {
        return "index";
    }

    @GetMapping("/all")
    public ResponseEntity<List<Channel>> viewAllChannels (Channel channel){
        return new ResponseEntity<>(channelRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("list/{userName}")
    public ResponseEntity<List<Channel>> listOfUserChannels(@PathVariable String userName, User user) {
        for (int i = 0; i < userRepository.findAll().size(); i++) {
            if (userName.equalsIgnoreCase(userRepository.findAll().get(i).getUserName())) {
                user = userRepository.findAll().get(i);
            }
        }
        List<Channel> userChannels = user.getChannels();
        return new ResponseEntity<>(userChannels, HttpStatus.OK);
    }

    @GetMapping("{channelName}/users")
    public ResponseEntity<List<User>> listOfChannelUsers (@PathVariable String channelName, Channel channel) {
        for (int i = 0; i < channelRepository.findAll().size(); i++) {
            if (channelName.equalsIgnoreCase(channelRepository.findAll().get(i).getChannelName())){
                channel = channelRepository.findAll().get(i);
            }
        }
        List<User> channelUsers = channel.getChannel_users();
        return new ResponseEntity<>(channelUsers, HttpStatus.OK);
    }

    @GetMapping("/{userName}/messages") //placeholder until messages fix
    public ResponseEntity<List<Message>> listOfUserMessages(@PathVariable String userName, User user) {
        for (int i = 0; i < userRepository.findAll().size(); i++) {
            if (userName.equalsIgnoreCase(userRepository.findAll().get(i).getUserName())) {
                user = userRepository.findAll().get(i);
            }
        }
        List<Message> userMessages = user.getMessages();
        return new ResponseEntity<>(userMessages, HttpStatus.OK);
    }


    @PostMapping("/new/{userName}")
    public ResponseEntity<List<Channel>> createChannel(@PathVariable String userName, User user, @RequestBody Channel channel) {
        for (int i = 0; i < userRepository.findAll().size(); i++) {
            if (userName.equalsIgnoreCase(userRepository.findAll().get(i).getUserName())) {
                user = userRepository.findAll().get(i);
            }
        }
        channelRepository.save(channel);
        addUserToChannel(channel.getChannelName(), channel, userName, user);
        return new ResponseEntity<>(HttpStatus.OK);
    }

//    @DeleteMapping("/delete/{channelName}")
//    public ResponseEntity<String> deleteChannel (@PathVariable String channelName, Channel channel){
//        for (int i = 0; i < channelRepository.findAll().size(); i++) {
//            if (channelName.equalsIgnoreCase(channelRepository.findAll().get(i).getChannelName())) {
//                channel = channelRepository.findAll().get(i);
//            }
//        }
//
//        channelRepository.delete(channel);
//        return new ResponseEntity<>("Channel deleted", HttpStatus.OK);
//    }

    @DeleteMapping("/delete/{channelID}")
    public ResponseEntity<Long> deleteChannelByID (@PathVariable Long channelID){
        channelRepository.deleteById(channelID);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{channelName}/{channelName1}")
        public ResponseEntity<List<Channel>> editChannelName (@PathVariable String channelName, @PathVariable String channelName1, Channel
        channel){
            for (int i = 0; i < channelRepository.findAll().size(); i++) {
                if (channelName.equalsIgnoreCase(channelRepository.findAll().get(i).getChannelName())) {
                    channel = channelRepository.findAll().get(i);
                }
            }
            channel.setChannelName(channelName1);
            channelRepository.save(channel);
            return new ResponseEntity<>(channelRepository.findAll(), HttpStatus.OK);
        }

        @PutMapping("add/{userName}/{channelName}")
        public ResponseEntity<List<Channel>> addUserToChannel (@PathVariable String channelName, Channel
        channel, @PathVariable String userName, User user){
            for (int i = 0; i < channelRepository.findAll().size(); i++) {
                if (channelName.equalsIgnoreCase(channelRepository.findAll().get(i).getChannelName())) {
                    channel = channelRepository.findAll().get(i);
                }
            }
            for (int i = 0; i < userRepository.findAll().size(); i++) {
                if (userName.equalsIgnoreCase(userRepository.findAll().get(i).getUserName())) {
                    user = userRepository.findAll().get(i);
                }
            }
            channel.getChannel_users().add(user);
            user.getChannels().add(channel);
            userRepository.save(user);
            channelRepository.save(channel);

            return new ResponseEntity<>(channelRepository.findAll(), HttpStatus.OK);
        }

        @PutMapping("/remove/{userName}/{channelName}")
        public ResponseEntity<List<Channel>> removeUserFromChannel (@PathVariable String channelName, @PathVariable String userName, Channel
        channel, User user){
            for (int i = 0; i < channelRepository.findAll().size(); i++) {
                if (channelName.equalsIgnoreCase(channelRepository.findAll().get(i).getChannelName())) {
                    channel = channelRepository.findAll().get(i);
                }
            }
            for (int i = 0; i < userRepository.findAll().size(); i++) {
                if (userName.equalsIgnoreCase(userRepository.findAll().get(i).getUserName())) {
                    user = userRepository.findAll().get(i);
                }
            }
            channel.getChannel_users().remove(user);
            user.getChannels().remove(channel);
            channelRepository.save(channel);
            userRepository.save(user);
            return new ResponseEntity<>(channelRepository.findAll(), HttpStatus.OK);
        }

    @PutMapping("/delete/all/{channelName}")///needs work
    public ResponseEntity<List<Channel>> removeAllUsersFromChannel (@PathVariable String channelName, Channel
            channel, User user){
        for (int i = 0; i < channelRepository.findAll().size(); i++) {
            if (channelName.equalsIgnoreCase(channelRepository.findAll().get(i).getChannelName())) {
                channel = channelRepository.findAll().get(i);
            }
        }


                if (!channel.getChannel_users().isEmpty()){
                    channel.getChannel_users().clear();
                }

//TODO forloop
        channel.getChannel_users().remove(user);
        user.getChannels().remove(channel);
        userRepository.save(user);
        channelRepository.save(channel);
        return new ResponseEntity<>(channelRepository.findAll(), HttpStatus.OK);
    }



    @GetMapping("/{userName}/{channelName}")
    public ResponseEntity<List<Message>> getAllMessages(@PathVariable String userName, @PathVariable String channelName,
                                                        Channel channel, User user){
        for (int i = 0; i < channelRepository.findAll().size(); i++) {
            if (channelName.equalsIgnoreCase(channelRepository.findAll().get(i).getChannelName())) {
                channel = channelRepository.findAll().get(i);
            }
        }
        for (int i = 0; i < userRepository.findAll().size(); i++) {
            if (userName.equalsIgnoreCase(userRepository.findAll().get(i).getUserName())){
                user = userRepository.findAll().get(i);
            }
        }

        for(int i = 0; i<channel.getChannel_users().size(); i++){
            if(channel.getChannel_users().get(i) == user && user.getMessages().get(i) == channel.getMessage().get(i)){
                List<Message> newMessages = channel.getMessage();
                return new ResponseEntity<>(newMessages, HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }





}