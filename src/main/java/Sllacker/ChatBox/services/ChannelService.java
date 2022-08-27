package Sllacker.ChatBox.services;

import Sllacker.ChatBox.models.Channel;
import Sllacker.ChatBox.models.User;
import Sllacker.ChatBox.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Sllacker.ChatBox.repositories.ChannelRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ChannelService {

    private ChannelRepository channelRepository;

    @Autowired
    public ChannelService(ChannelRepository channelRepository) {
        this.channelRepository = channelRepository;
    }

    public List<Channel> getChannels() {return channelRepository.findAll();}


}