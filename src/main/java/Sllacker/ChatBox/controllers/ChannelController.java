package Sllacker.ChatBox.controllers;

import Sllacker.ChatBox.models.Channel;
import Sllacker.ChatBox.repositories.ChannelRepository;
import Sllacker.ChatBox.services.ChannelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/channel")
public class ChannelController {

    private ChannelRepository channelRepository;

    @Autowired
    public ChannelController(ChannelRepository channelRepository) {this.channelRepository = channelRepository;}

    @GetMapping
    public List<Channel> getChannels(){return channelRepository.findAll();}

    @PostMapping
    public ResponseEntity<List<Channel>> addNewChannel(@RequestBody Channel channel) {channelRepository.save(channel);
        return new ResponseEntity<>(channelRepository.findAll(), HttpStatus.OK);}

    @PutMapping("/{channelName}/{channelName1}")
    public void editChannelName (@PathVariable String channelName, @PathVariable String channelName1,  Channel channel ) {
        for (int i = 0; i < channelRepository.findAll().size(); i++){
        if (channelName.equalsIgnoreCase(channelRepository.findAll().get(i).getChannelName())){
            channel = channelRepository.findAll().get(i);

        }
    }
        channel.setChannelName(channelName1);
        channelRepository.save(channel);
    }

    @DeleteMapping("/{channelName}")
    public ResponseEntity<String> deleteChannel (@PathVariable String channelName, Channel channel) {
        for (int i = 0; i < channelRepository.findAll().size(); i++){
            if (channelName.equalsIgnoreCase(channelRepository.findAll().get(i).getChannelName())){
                channel = channelRepository.findAll().get(i);
            }
        }
        channelRepository.delete(channel);

        return new ResponseEntity<>("Channel deleted", HttpStatus.OK);
    }



}
