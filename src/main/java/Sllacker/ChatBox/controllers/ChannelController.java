package Sllacker.ChatBox.controllers;

import Sllacker.ChatBox.models.Channel;
import Sllacker.ChatBox.models.User;
import Sllacker.ChatBox.repositories.ChannelRepository;
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
public class ChannelController {

    private ChannelRepository channelRepository;
    private UserRepository userRepository;

    @Autowired
    public ChannelController(ChannelRepository channelRepository, UserRepository userRepository) {
        this.channelRepository = channelRepository;
        this.userRepository = userRepository;
    }
    @GetMapping("/channel")
    public String getChannels() {
        return"index";
    }


//    @GetMapping("")
//    public List<Channel> getChannels() {
//        return channelRepository.findAll();
//    }

    @GetMapping("/channelShare")
    public ResponseEntity<List<Channel>> listOfUserChannels() {
        List<Channel> find = new ArrayList<>();
        for(int i = 0; i<channelRepository.findAll().size(); i++){
        }

        return new ResponseEntity<>(find, HttpStatus.OK);
    }

    @PostMapping("/channelnew/{userName}")//add channels
    public ResponseEntity<List<Channel>> addNewChannel(@PathVariable String userName, User user, @RequestBody Channel channel) {
        for(int i = 0; i<userRepository.findAll().size(); i++){
            if(userName.equalsIgnoreCase(userRepository.findAll().get(i).getUserName())){
                user = userRepository.findAll().get(i);

            }
        }

        channel.getChannel_users().add(user);
        channelRepository.save(channel);
        return new ResponseEntity<List<Channel>>(channelRepository.findAll(), HttpStatus.OK);
    }


//    public ResponseEntity<List<Channel>> addNewChannel(@RequestBody Channel channel) {channelRepository.save(channel);
//        return new ResponseEntity<>(channelRepository.findAll(), HttpStatus.OK);}

    @GetMapping("/channels")
    public ResponseEntity<List<Channel>> getUserList(Channel channel) {
        return new ResponseEntity<>(channelRepository.findAll(), HttpStatus.OK);
    }


    @PutMapping("/{channelName}/{channelName1}")
    public void editChannelName(@PathVariable String channelName, @PathVariable String channelName1, Channel channel) {
        for (int i = 0; i < channelRepository.findAll().size(); i++) {
            if (channelName.equalsIgnoreCase(channelRepository.findAll().get(i).getChannelName())) {
                channel = channelRepository.findAll().get(i);
            }
        }
        channel.setChannelName(channelName1);
        channelRepository.save(channel);
    }

    @PutMapping("add/{channelName}/{userName}")
    public ResponseEntity<List<Channel>> addUserToChannel(@PathVariable String channelName, Channel channel, @PathVariable String userName, User user) {
        for (int i = 0; i < channelRepository.findAll().size(); i++) {
            if (channelName.equalsIgnoreCase(channelRepository.findAll().get(i).getChannelName())) {
                channel = channelRepository.findAll().get(i);
            }
        }

        for(int i = 0; i<userRepository.findAll().size(); i++){
            if(userName.equalsIgnoreCase(userRepository.findAll().get(i).getUserName())){
                user = userRepository.findAll().get(i);
            }
        }

        channel.getChannel_users().add(user);
        channelRepository.save(channel);

        return new ResponseEntity<>(channelRepository.findAll(), HttpStatus.OK);
    }

    @PutMapping("/remove/{userName}/{channelName}")
    public void removeUserRemoveChannel(@PathVariable String channelName, @PathVariable String userName, Channel channel, User user) {
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
        channel.getChannel_users().remove(user);
        channelRepository.save(channel);
    }

        @DeleteMapping("/{channelName}")
        public ResponseEntity<String> deleteChannel (@PathVariable String channelName, Channel channel){
            for (int i = 0; i < channelRepository.findAll().size(); i++) {
                if (channelName.equalsIgnoreCase(channelRepository.findAll().get(i).getChannelName())) {
                    channel = channelRepository.findAll().get(i);
                }
            }
            channelRepository.delete(channel);

            return new ResponseEntity<>("Channel deleted", HttpStatus.OK);
        }


    }
