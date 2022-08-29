package Sllacker.ChatBox.services;

import Sllacker.ChatBox.models.DirectMessage;
import Sllacker.ChatBox.repositories.DirectMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DirectMessageService {

   private DirectMessageRepository repository;

    @Autowired
    public void DirectMessage(DirectMessageRepository repository) {
        this.repository = repository;
    }

    public Iterable<DirectMessage> index() {
        return repository.findAll();
    }

    public DirectMessage getDirectMessage(Long userId) {
        return repository.findById(userId).get();
    }

    public DirectMessage postDirectMessage(DirectMessage userName) {
        return repository.save(userName);
    }

    public DirectMessage putDirectMessage(DirectMessage message) {
        return message;
    }

//    public Boolean delete(String userName) {
//        repository.delete(userName);
//        return true;
//    }
}
