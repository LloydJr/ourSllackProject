package Sllacker.ChatBox.repositories;

import Sllacker.ChatBox.models.Channel;
import Sllacker.ChatBox.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ChannelRepository extends JpaRepository <Channel, Long>{
    @Query("SELECT c FROM Channel c WHERE c.ChannelName = ?1")
    Channel findByChannelName(String channelName);
    
}
