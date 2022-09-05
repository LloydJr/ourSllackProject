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
@CrossOrigin("http://localhost:3000")
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
    public ResponseEntity<List<Channel>> listOfAllChannels(Channel channel) {
        return new ResponseEntity<>(channelRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/list/{userName}")
    public ResponseEntity<List<Channel>> listOfUserChannels(@PathVariable String userName, User user) {
        user = userRepository.findByUsername(userName);
        List<Channel> userChannels = user.getChannels();
        return new ResponseEntity<>(userChannels, HttpStatus.OK);
    }

    @GetMapping("/userlist/{channelName}")
    public ResponseEntity<List<User>> listOfChannelUsers(@PathVariable String channelName, Channel channel) {
        channel = channelRepository.findByChannelName(channelName);
        List<User> channelUsers = channel.getChannel_users();
        return new ResponseEntity<>(channelUsers, HttpStatus.OK);
    }


    @GetMapping("/all/list")
    public ResponseEntity<List<String>> stringListOfAllChannels (Channel channel) {
        List<String> channelNames = new ArrayList<>();
        for (int i = 0; i < channelRepository.findAll().size(); i++) {
            channelNames.add(channelRepository.findAll().get(i).getChannelName());
        }
        return new ResponseEntity<>(channelNames, HttpStatus.OK);
    }

    @GetMapping("/all/list/{userName}")
    public ResponseEntity<List<String>> stringListOfUserChannels (@PathVariable String userName, User user, Channel channel) {
        List<String> channelNames = new ArrayList<>();
        user = userRepository.findByUsername(userName);
        List<Channel> userChannels = user.getChannels();
        for (int j = 0; j < userChannels.size(); j++) {
            channelNames.add(userChannels.get(j).getChannelName());
        }
        return new ResponseEntity<>(channelNames, HttpStatus.OK);
    }

    @GetMapping("/all/users/{channelName}")
    public ResponseEntity<List<String>> stringListOfChannelUsers (@PathVariable String channelName, User user, Channel channel) {
        List<String> userNames = new ArrayList<>();
        channel = channelRepository.findByChannelName(channelName);
        List<User> userChannels = channel.getChannel_users();
        for (int j = 0; j < userChannels.size(); j++) {
            userNames.add(userChannels.get(j).getUserName());
        }
        return new ResponseEntity<>(userNames, HttpStatus.OK);
    }


    @PostMapping("/new/{userName}")
    public ResponseEntity<List<Channel>> newChannel(@PathVariable String userName, User user, @RequestBody Channel channel) {
        user = userRepository.findByUsername(userName);
        channelRepository.save(channel);
        addUserToChannel(channel.getChannelName(), channel, userName, user);
        return new ResponseEntity<>(channelRepository.findAll(), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{channelName}")
    public ResponseEntity<List<Channel>> deleteChannel(@PathVariable String channelName, Channel channel, User user, String userName) {

        channel = channelRepository.findByChannelName(channelName);
        List<User> channelUsers = channel.getChannel_users();

        for (int i = 0; i < channelUsers.size(); i++) {
            user = channelUsers.get(i);
            user.getChannels().remove(channel);
            userRepository.save(user);
        }
        channel.getChannel_users().clear();
        channelRepository.save(channel);
        channelRepository.delete(channel);
        return new ResponseEntity<>(channelRepository.findAll(), HttpStatus.OK);
    }

    @PutMapping("/rename/{channelName}/{channelName1}")
    public ResponseEntity<List<Channel>> editChannelName(@PathVariable String channelName, @PathVariable String channelName1, Channel channel) {
        channel = channelRepository.findByChannelName(channelName);
        channel.setChannelName(channelName1);
        channelRepository.save(channel);
        return new ResponseEntity<>(channelRepository.findAll(), HttpStatus.OK);
    }

    @PutMapping("/add/{userName}/{channelName}")
    public ResponseEntity<List<Channel>> addUserToChannel(@PathVariable String channelName, Channel channel,
    @PathVariable String userName, User user) {
        channel = channelRepository.findByChannelName(channelName);
        user = userRepository.findByUsername(userName);
        channel.getChannel_users().add(user);
        user.getChannels().add(channel);
        userRepository.save(user);
        channelRepository.save(channel);

        return new ResponseEntity<>(channelRepository.findAll(), HttpStatus.OK);
    }

    @PutMapping("/remove/{userName}/{channelName}")
    public ResponseEntity<List<Channel>> removeUserFromChannel(@PathVariable String channelName,
    @PathVariable String userName, Channel channel, User user) {

        channel = channelRepository.findByChannelName(channelName);
        user = userRepository.findByUsername(userName);
        channel.getChannel_users().clear();
        user.getChannels().remove(channel);
        channelRepository.save(channel);
        userRepository.save(user);
        return new ResponseEntity<>(channelRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/messages/{channelName}/")
    public ResponseEntity<List<Message>> getMessagesInChannel (@PathVariable String channelName, Channel channel){
        for (int i = 0; i < channelRepository.findAll().size(); i++) {
            if (channelName.equalsIgnoreCase(channelRepository.findAll().get(i).getChannelName())) {
                channel = channelRepository.findAll().get(i);
                return new ResponseEntity<>(channel.getMessage(), HttpStatus.OK);
            }
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}