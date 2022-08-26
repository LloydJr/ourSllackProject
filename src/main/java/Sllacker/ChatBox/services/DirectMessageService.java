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

    public Object getDirectMessage(Long messagesId) {
        return repository.findById(messagesId).get();
    }

    public Object postDirectMessage(DirectMessage dm) {
        return repository.save(dm);
    }

    public Object putDirectMessage(Long messageId, DirectMessage newDmData) {
        return newDmData;
    }

    public Boolean delete(Long messageId) {
        repository.deleteById(messageId);
        return true;
    }
}

/**
 *This still needs to be refactored and update to the latest version of the code
 **/
