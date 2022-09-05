package Sllacker.ChatBox;

import Sllacker.ChatBox.models.Message;
import Sllacker.ChatBox.repositories.MessageRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import java.util.List;
import java.util.Optional;

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
    public void testMessageCreate(){
        Message message = new Message();

        message.setMessage("Whats up");

        Message savedMessage = messageRepository.save(message); // saves the user object to the database

        Message existMessage = testEntityManager.find(Message.class, savedMessage.getId());

        assertThat(existMessage.getMessage()).isEqualTo(message.getMessage());
    }

    @Test
    public void testMessageDelete(){

        List<Message> newMess = messageRepository.findByMessage("Whats up");

        Message message = newMess.get(0);

        messageRepository.delete(message);
        newMess.remove(newMess.get(0));




        assertThat(newMess.size()).isEqualTo(0);
    }


    @Test
    public void testMessageUpdate(){

        List<Message> newMess = messageRepository.findByMessage("Whats up");

        Message message = newMess.get(0);
        message.setMessage("No Way");
        newMess.remove(0);

        messageRepository.save(message);
        newMess.add(message);


        assertThat(newMess.get(0).getMessage()).isEqualTo(message.getMessage());
    }


    @Test
    public void testMessageFind(){

        List<Message> newMess = messageRepository.findByMessage("No Way");

        Message message = newMess.get(0);

        assertThat(newMess.get(0).getMessage()).isEqualTo(message.getMessage());
    }

}
