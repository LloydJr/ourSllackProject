package Sllacker.ChatBox.services;

import Sllacker.ChatBox.models.DirectMessage;
import Sllacker.ChatBox.models.User;
import Sllacker.ChatBox.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private UserRepository repository;

//    @Autowired
//    public User(UserRepository repository) {this.repository = repository;}

    public Iterable<User> index() {
        return repository.findAll();
    }

    public Object getUser(Long userId) {
        return repository.findById(userId).get();
    }

    public Object postUser(User user) {
        return repository.save(user);
    }


}