package Sllacker.ChatBox.repositories;

import Sllacker.ChatBox.models.DirectMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DirectMessageRepository extends JpaRepository <DirectMessage, Long>{

    @Query("SELECT d FROM DirectMessage d WHERE d.directMessageName = ?1")
    DirectMessage findByDirectMessageName(String directMessageName);

}
