package Sllacker.ChatBox;

import Sllacker.ChatBox.models.DirectMessage;
import Sllacker.ChatBox.repositories.DirectMessageRepository;
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
public class DirectMessageTest {

    @Autowired
    private DirectMessageRepository directMessageRepository;

    @Autowired
    private TestEntityManager testEntityManager;


    @Test
    public void testDirectMessage(){
        DirectMessage dm = new DirectMessage();

        dm.setDirectMessageName("DumbTalk");

        DirectMessage savedDm = directMessageRepository.save(dm); // saves the user object to the database

        DirectMessage existDm = testEntityManager.find(DirectMessage.class, savedDm.getUserId());

        assertThat(existDm.getDirectMessageName()).isEqualTo(savedDm.getDirectMessageName());
    }

//    @Test
//    public void testMessageFind(){
//
//        Channel channel = channelRepository.findByChannelName("DumbTalk");
//
//
//        Channel existChannel = testEntityManager.find(Channel.class, channel.getChannelID());
//
//
//        assertThat(existChannel.getChannelName()).isEqualTo(channel.getChannelName());
//    }
//
//
//    @Test
//    public void testChannelUpdate(){
//
//        Channel channel = channelRepository.findByChannelName("DumbTalk");
//
//        channel.setChannelName("SmartConv");
//        channelRepository.save(channel);
//
//        Channel existChannel = testEntityManager.find(Channel.class, channel.getChannelID());
//
//
//        assertThat(existChannel.getChannelName()).isEqualTo("SmartConv");
//    }
//
//
//
//
//    @Test
//    public void testChannelDelete(){
//
//        Channel channel = channelRepository.findByChannelName("SmartConv");
//
//        channelRepository.delete(channel);
//
//        Channel existChannel = testEntityManager.find(Channel.class, channel.getChannelID());
//
//
//        assertThat(existChannel).isNull();
//    }

}
