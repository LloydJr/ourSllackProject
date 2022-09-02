package Sllacker.ChatBox;

import Sllacker.ChatBox.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ChannelApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ChannelApplication.class, args);
	}

	@Autowired
	private UserRepository userRepository;


	@Override
	public void run(String... args) throws Exception {

	}
}
