package Sllacker.ChatBox.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Sllacker.ChatBox.repositories.ChannelRepository;

@Service
public class ChannelService {

    private ChannelRepository repository;

    @Autowired
    public ChannelService(ChannelRepository repository) {
        this.repository = repository;
    }

}