package Sllacker.ChatBox.controllers;

import Sllacker.ChatBox.models.Channel;
import Sllacker.ChatBox.models.User;
import Sllacker.ChatBox.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class AppController {
    @Autowired
private UserRepository repo;
    @GetMapping("")
    public String landingPage() {
        return "index";
    }

    @GetMapping("/sign-up")
    public String showSignUpForm(Model model){
        model.addAttribute("user", new User());
        return "signup_form";
    }
    @PostMapping("/process_register")
    public String processRegistration(User user){
        repo.save(user);
        return "signup_success";
    }
    @GetMapping("/list_users")
    public String listUsers(Model model) {
        List<User> listUsers = repo.findAll();
        model.addAttribute("listUsers", listUsers);

        return "Users";
    }
    @GetMapping("/channels")
    public String showChannelPage(Model model) {
        model.addAttribute("channels", new Channel());
        return "channel";
    }
}
