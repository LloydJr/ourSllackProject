package Sllacker.ChatBox.controllers;

import Sllacker.ChatBox.models.Channel;
import Sllacker.ChatBox.models.Message;
import Sllacker.ChatBox.models.User;
import Sllacker.ChatBox.repositories.ChannelRepository;
import Sllacker.ChatBox.repositories.MessageRepository;
import Sllacker.ChatBox.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/message")
public class MessageController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private MessageRepository messageRepository;
    private ChannelRepository channelRepository;

    private List<Message> messageList = new ArrayList<>();

    @Autowired
    public void Repo(MessageRepository messageRepository, UserRepository userRepository, ChannelRepository channelRepository) {
        this.userRepository = userRepository;
        this.messageRepository = messageRepository;
        this.channelRepository = channelRepository;
    }

    @PostMapping("/{userName}")
    public @ResponseBody ResponseEntity<Message> create(@PathVariable String userName, @RequestBody Message message, User user, Channel channel) {

        for (int i = 0; i < userRepository.findAll().size(); i++) {
            if (userName.equalsIgnoreCase(userRepository.findAll().get(i).getUserName())) {
                user = userRepository.findAll().get(i);
                message.setUser(user);
                message.setUserName(userName);
                user.getMessages().add(message);
                messageRepository.save(message);
            }
        }


        return new ResponseEntity<>(message, HttpStatus.OK);
    }


    @PostMapping("/{userName}/{channelName}")
    public @ResponseBody ResponseEntity<Message> createMessageAndPost(@PathVariable String userName, @PathVariable String channelName,
                                                                      @RequestBody Message message,
                                                                      User user, Channel channel) {
        user = userRepository.findByUsername(userName);

        channel = channelRepository.findByChannelName(channelName);

        message.setUser(user);
        message.setChannel(channel);
        user.getMessages().add(message);
        channel.getMessage().add(message);
        messageRepository.save(message);
        for (int i = 0; i < messageRepository.findAll().size(); i++) {
            if (messageRepository.findAll().get(i).equals(message)) {
                message.setUserName(userName);
                messageRepository.save(message);
            }
        }
        channelRepository.save(channel);
        userRepository.save(user);

        return new ResponseEntity<>(message, HttpStatus.OK);

    }

    @PostMapping("/{channelName}/new")
    public @ResponseBody ResponseEntity<List<Message>> createMessage(@PathVariable String channelName, @RequestBody Message message, Channel channel) {
        for (int i = 0; i < channelRepository.findAll().size(); i++) {
            if (channelName.equalsIgnoreCase(channelRepository.findAll().get(i).getChannelName())) {
                channel = channelRepository.findAll().get(i);
                message.setChannel(channel);
                channel.getMessage().add(message);
                messageRepository.save(message);
                channelRepository.save(channel);
            }
        }


        return new ResponseEntity<>(messageRepository.findAll(), HttpStatus.OK);

    }


    @GetMapping("/{channelName}/{userName}/messagelist")
    public ResponseEntity<List<Message>> allMessagesInChannel(@PathVariable String channelName, @PathVariable String userName, Channel channel, User user) {
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

        for (int i = 0; i < channel.getChannel_users().size(); i++) {
            if (channel.getChannel_users().contains(user)) {
                List<Message> messages = channel.getMessage();
                return new ResponseEntity<>(messages, HttpStatus.OK);
            }
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{channelName}/messagelist")
    public ResponseEntity<List<Message>> allMessagesInChannel(@PathVariable String channelName, Channel channel, User user) {
        for (int i = 0; i < channelRepository.findAll().size(); i++) {
            if (channelName.equalsIgnoreCase(channelRepository.findAll().get(i).getChannelName())) {
                channel = channelRepository.findAll().get(i);
                return new ResponseEntity<>(channel.getMessage(), HttpStatus.OK);
            }
        }

        return new ResponseEntity<>(channel.getMessage(), HttpStatus.NOT_FOUND);
    }


    @GetMapping("/{userName}")
    public @ResponseBody ResponseEntity<User> findUserName(User user, @PathVariable String userName) {
        for (int i = 0; i < userRepository.findAll().size(); i++) {
            if (userName.equalsIgnoreCase(userRepository.findAll().get(i).getUserName())) {
                user = userRepository.findAll().get(i);
            }
        }
        return new ResponseEntity<>(user, HttpStatus.NOT_FOUND);
    }


    @DeleteMapping("/{userName}/{message}")
    public @ResponseBody ResponseEntity<User> findUserNameMessage(@PathVariable String userName, @PathVariable String message, Message messages, User user) {
        for (int i = 0; i < userRepository.findAll().size(); i++) {
            if (userName.equalsIgnoreCase(userRepository.findAll().get(i).getUserName())) {
                user = userRepository.findAll().get(i);
            }
        }
        for (int i = 0; i < messageRepository.findAll().size(); i++) {
            if (message.equalsIgnoreCase(messageRepository.findAll().get(i).getMessage())) {
                messages = messageRepository.findAll().get(i);
            }
        }

        for (int i = 0; i < user.getMessages().size(); i++)
            if (user.getMessages().get(i).getMessage().equalsIgnoreCase(message)) {
                user.getMessages().clear();
            }

        user.getMessages().remove(messages);
        messageRepository.delete(messages);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @DeleteMapping("/{messageID}/{channelName}")
    public @ResponseBody ResponseEntity<Message> deleteMessageByID (@PathVariable String messageID, Message message, User user) {

        for (int i = 0; i < messageRepository.findAll().size(); i++) {
            if (messageID.equals(messageRepository.findAll().get(i).getId())) {
                message = messageRepository.findAll().get(i);
                user = messageRepository.findAll().get(i).getUser();
            }
        }
        user.getMessages().remove(message);
        messageRepository.delete(message);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}