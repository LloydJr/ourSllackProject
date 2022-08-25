package Sllacker.ChatBox.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Sllacker.ChatBox.repositories.ChannelRepository;

@Service
public class ChatBoxService {

    private ChannelRepository repository;

    @Autowired
    public ChatBoxService(ChannelRepository repository) {this.repository = repository;}
    
}
