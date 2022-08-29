package Sllacker.ChatBox;

import Sllacker.ChatBox.models.Channel;
import Sllacker.ChatBox.models.Message;
import Sllacker.ChatBox.models.User;
import Sllacker.ChatBox.repositories.MessageRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class MessageRepositoryTest {


    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private TestEntityManager testEntityManager;


    @Test
    public void messageCreate(){
        Message message = new Message();
        User user = new User();
        Channel channel = new Channel();
        message.setMessage("Whats up");
        message.setUser(user);

        Message savedMessage = messageRepository.save(message); // saves the user object to the database

        Message existMessage = testEntityManager.find(Message.class, savedMessage.getMessage());

        assertThat(existMessage.getMessage()).isEqualTo(message.getMessage());
    }
}
