package Sllacker.ChatBox;

import Sllacker.ChatBox.models.Channel;
import Sllacker.ChatBox.repositories.ChannelRepository;
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
public class ChannelRepositoryTest {



    @Autowired
    private ChannelRepository channelRepository;

    @Autowired
    private TestEntityManager testEntityManager;


    @Test
    public void testChannelCreate(){
        Channel channel = new Channel();

        channel.setChannelName("DumbTalk");

        Channel savedChannel = channelRepository.save(channel); // saves the user object to the database

        Channel existChannel = testEntityManager.find(Channel.class, savedChannel.getChannelID());

        assertThat(existChannel.getChannelName()).isEqualTo(savedChannel.getChannelName());
    }

    @Test
    public void testMessageFind(){

        Channel channel = channelRepository.findByChannelName("DumbTalk");


        Channel existChannel = testEntityManager.find(Channel.class, channel.getChannelID());


        assertThat(existChannel.getChannelName()).isEqualTo(channel.getChannelName());
    }


    @Test
    public void testChannelUpdate(){

        Channel channel = channelRepository.findByChannelName("DumbTalk");

        channel.setChannelName("SmartConv");
        channelRepository.save(channel);

        Channel existChannel = testEntityManager.find(Channel.class, channel.getChannelID());


        assertThat(existChannel.getChannelName()).isEqualTo("SmartConv");
    }




    @Test
    public void testChannelDelete(){

        Channel channel = channelRepository.findByChannelName("SmartConv");

        channelRepository.delete(channel);

        Channel existChannel = testEntityManager.find(Channel.class, channel.getChannelID());


        assertThat(existChannel).isNull();
    }


}
