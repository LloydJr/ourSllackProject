package Sllacker.ChatBox.repositories;

import Sllacker.ChatBox.models.Channel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface ChannelRepository extends JpaRepository <Channel, Long>{
    @Query("SELECT c FROM Channel c WHERE c.ChannelName = ?1")
    Channel findByChannelName(String channelName);
    
}
