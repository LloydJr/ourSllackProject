package Sllacker.ChatBox.repositories;

import Sllacker.ChatBox.models.Channel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChannelRepository extends JpaRepository <Channel, Long>{
    
}
